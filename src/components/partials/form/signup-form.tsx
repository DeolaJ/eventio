/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable max-lines-per-function */
import { FC } from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import actions from '../../../store/actions';
import InputField from '../input-field/input-field';
import Loader from '../loader/loader';
import AuthSwitch from '../auth-switch/auth-switch';
import PrimaryButton from '../button/primary-button';

import { FormContainer, InputContainer, FormError } from './form.styled';
import selectors from '../../../store/selectors';
import utils from '../../../utils';

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string().min(1, 'Too Short!').max(50, 'Too Long!').required('Required'),
  lastName: Yup.string().min(1, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Enter a valid email').required('Required'),
  password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  passwordrepeat: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .oneOf([Yup.ref('password'), null], 'Passwords must match!')
    .required('Required'),
});

const SignupForm: FC = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordrepeat: '',
  };
  const dispatch = useDispatch();
  const signupErrorMessage = useSelector(selectors.selectActiveFormError);
  const IsCreatingAccount = useSelector(selectors.selectIsCreatingAccount);

  const errorCheck = (key: string, value: string, error: string | undefined) => {
    if (value) {
      return signupErrorMessage.errorFields.includes(key) || error !== undefined;
    }
    return false;
  };

  const errorMessage = (key: string, value: string, error: string | undefined) => {
    if (value) {
      return signupErrorMessage.errorMessages[key] || (error !== undefined ? error : '');
    }
    return '';
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignUpSchema}
      onSubmit={(values) => {
        const userDetails = {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
        };
        dispatch(actions.doSignupUser(userDetails));
      }}>
      {({ errors, values, handleChange, handleSubmit }) => (
        <FormContainer
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}>
          <h2>Get started absolutely free.</h2>

          <p>
            {!signupErrorMessage.hasError ? (
              'Enter your details below.'
            ) : (
              <FormError>{utils.generateTotalMessage(signupErrorMessage, 'userDetails')}</FormError>
            )}
          </p>

          <InputContainer>
            <InputField
              label="First name"
              placeholder="First name"
              name="firstName"
              type="text"
              value={values.firstName}
              setValue={handleChange}
              error={errorCheck('firstName', values.firstName, errors.firstName)}
              errorMessage={errorMessage('firstName', values.firstName, errors.firstName)}
            />
          </InputContainer>

          <InputContainer>
            <InputField
              label="Last name"
              placeholder="Last Name"
              name="lastName"
              type="text"
              value={values.lastName}
              setValue={handleChange}
              error={errorCheck('lastName', values.lastName, errors.lastName)}
              errorMessage={errorMessage('lastName', values.lastName, errors.lastName)}
            />
          </InputContainer>

          <InputContainer>
            <InputField
              label="Email"
              placeholder="Email"
              name="email"
              type="email"
              value={values.email}
              setValue={handleChange}
              error={errorCheck('email', values.email, errors.email)}
              errorMessage={errorMessage('email', values.email, errors.email)}
            />
          </InputContainer>

          <InputContainer>
            <InputField
              label="Password"
              placeholder="Password"
              name="password"
              type="password"
              value={values.password}
              setValue={handleChange}
              error={errorCheck('password', values.password, errors.password)}
              errorMessage={errorMessage('password', values.password, errors.password)}
            />
          </InputContainer>

          <InputContainer>
            <InputField
              label="Repeat Password"
              placeholder="Repeat Password"
              name="passwordrepeat"
              type="password"
              value={values.passwordrepeat}
              setValue={handleChange}
              error={errorCheck('passwordrepeat', values.passwordrepeat, errors.passwordrepeat)}
            />
          </InputContainer>

          <div className="auth-switch-container">
            <AuthSwitch />
          </div>

          <PrimaryButton text={!IsCreatingAccount ? 'Sign Up' : <Loader light />} size="lg" type="submit" />
        </FormContainer>
      )}
    </Formik>
  );
};

export default SignupForm;
