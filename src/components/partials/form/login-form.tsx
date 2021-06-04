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

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const LoginForm: FC = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const dispatch = useDispatch();
  const loginErrorMessage = useSelector(selectors.selectActiveFormError);
  const isLoggingIn = useSelector(selectors.selectIsLoggingIn);

  const errorCheck = (key: string, value: string, error: string | undefined) => {
    if (value) {
      return loginErrorMessage.errorFields.includes(key) || error !== undefined;
    }
    return false;
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        const loginDetails = {
          ...values,
        };
        dispatch(actions.doLoginUser(loginDetails));
      }}>
      {({ errors, values, handleChange, handleSubmit }) => (
        <FormContainer
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}>
          <h2>Sign in to Eventio.</h2>

          <p>
            {!loginErrorMessage.hasError ? (
              'Enter your details below.'
            ) : (
              <FormError>{utils.generateTotalMessage(loginErrorMessage, 'loginDetails')}</FormError>
            )}
          </p>

          <article>
            <InputContainer>
              <InputField
                label="Email"
                placeholder="Email"
                name="email"
                type="email"
                value={values.email}
                setValue={handleChange}
                error={errorCheck('email', values.email, errors.email)}
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
              />
            </InputContainer>

            <div className="auth-switch-container">
              <AuthSwitch loginState />
            </div>

            <PrimaryButton
              className="login-button"
              text={!isLoggingIn ? 'Sign In' : <Loader light />}
              size="lg"
              type="submit"
            />
          </article>
        </FormContainer>
      )}
    </Formik>
  );
};

export default LoginForm;
