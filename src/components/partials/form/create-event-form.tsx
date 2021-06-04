/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable max-lines-per-function */
import { FC } from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import InputField from '../input-field/input-field';
import DateField from '../date-field/date-field';
import Loader from '../loader/loader';
import PrimaryButton from '../button/primary-button';

import { FormContainer, InputContainer, FormError } from './form.styled';
import selectors from '../../../store/selectors';
import utils from '../../../utils';
import actions from '../../../store/actions';

const EventDetailsSchema = Yup.object().shape({
  title: Yup.string().min(1, 'Too Short!').required('Required'),
  description: Yup.string().min(1, 'Too Short!').required('Required'),
  date: Yup.string().required('Required'),
  time: Yup.string().required('Required'),
  capacity: Yup.number().min(0, 'Please enter a number').required('Required'),
});

const CreateEventForm: FC = () => {
  const initialValues = {
    title: '',
    description: '',
    date: new Date(),
    time: utils.getCurrentTime(),
    capacity: 0,
  };
  const dispatch = useDispatch();
  const history = useHistory();
  const createEventErrorMessage = useSelector(selectors.selectActiveFormError);
  const isCreatingEvent = useSelector(selectors.selectIsCreatingEvent);

  const errorCheck = (key: string, value: string | number | Date, error: string | undefined) => {
    if (value) {
      return createEventErrorMessage.errorFields.includes(key) || error !== undefined;
    }
    return false;
  };

  const errorMessage = (key: string, value: string | number, error: string | undefined) => {
    if (value) {
      return createEventErrorMessage.errorMessages[key] || (error !== undefined ? error : '');
    }
    return '';
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={EventDetailsSchema}
      onSubmit={(values) => {
        const newEventDetails = {
          title: values.title,
          description: values.description,
          capacity: values.capacity,
          startsAt: utils.setCurrentDate(values.date, values.time),
        };
        dispatch(actions.doCreateEvent(newEventDetails, history));
      }}>
      {({ errors, values, handleChange, handleSubmit }) => (
        <FormContainer
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}>
          <h2>Create new event.</h2>
          <p>
            {!createEventErrorMessage.hasError ? (
              'Enter details below.'
            ) : (
              <FormError>{utils.generateTotalMessage(createEventErrorMessage, 'eventDetails')}</FormError>
            )}
          </p>

          <InputContainer>
            <DateField
              label="Date"
              name="date"
              type="date"
              value={values.date}
              error={Boolean(createEventErrorMessage.errorFields.includes('startsAt') || errors.date)}
            />
          </InputContainer>

          <InputContainer>
            <DateField
              label="Time"
              name="time"
              type="time"
              value={values.time}
              error={Boolean(createEventErrorMessage.errorFields.includes('startsAt') || errors.time)}
            />
          </InputContainer>

          <InputContainer>
            <InputField
              label="Title"
              placeholder="Title"
              name="title"
              type="text"
              value={values.title}
              setValue={handleChange}
              error={errorCheck('title', values.title, errors.title)}
              errorMessage={errorMessage('title', values.title, errors.title)}
            />
          </InputContainer>

          <InputContainer>
            <InputField
              label="Description"
              placeholder="Description"
              name="description"
              type="text"
              value={values.description}
              setValue={handleChange}
              error={errorCheck('description', values.description, errors.description)}
              errorMessage={errorMessage('description', values.description, errors.description)}
            />
          </InputContainer>

          <InputContainer>
            <InputField
              label="Capacity"
              placeholder="Capacity"
              name="capacity"
              type="number"
              value={values.capacity}
              setValue={handleChange}
              error={errorCheck('capacity', values.capacity, errors.capacity)}
              errorMessage={errorMessage('capacity', values.capacity, errors.capacity)}
            />
          </InputContainer>

          <PrimaryButton
            text={!isCreatingEvent ? 'Create new event' : <Loader light />}
            size="lg"
            type="submit"
            onClick={() => handleSubmit()}
          />
        </FormContainer>
      )}
    </Formik>
  );
};

export default CreateEventForm;
