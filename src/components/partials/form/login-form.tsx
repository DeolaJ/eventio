/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable max-lines-per-function */
import { FC } from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import actions from '../../../store/actions';
import InputField from '../input-field';
import PrimaryButton from '../button/primary-button';

import { LoginFormContainer, LoginInputContainer, LoginFormError } from './login-form.styled';
import selectors from '../../../store/selectors';

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
  const loginErrorMessage = useSelector(selectors.selectLoginError);

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
      {({ isSubmitting, errors, values, handleChange, handleSubmit }) => (
        <LoginFormContainer
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}>
          <h2>Sign in to Eventio.</h2>
          {loginErrorMessage ? <LoginFormError>{loginErrorMessage}</LoginFormError> : null}
          <LoginInputContainer>
            <InputField
              label="email"
              placeholder="Email"
              id="email"
              name="email"
              type="email"
              value={values.email}
              setValue={handleChange}
              error={values.email && errors.email}
              errorColor=""
            />
          </LoginInputContainer>

          <LoginInputContainer>
            <InputField
              label="password"
              placeholder="Password"
              id="password"
              name="password"
              type="password"
              value={values.password}
              setValue={handleChange}
              error={values.password && errors.password}
              errorColor=""
            />
          </LoginInputContainer>

          <PrimaryButton text="Sign In" size="lg" />
        </LoginFormContainer>
      )}
    </Formik>
  );
};

export default LoginForm;
