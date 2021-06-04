/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable max-lines-per-function */
import { FC } from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import actions from '../../../store/actions';
import InputField from '../input-field/input-field';
import DateField from '../date-field/date-field';
import UpdateEventButton from '../update-event-button/update-event-button';

import { FormContainer, InputContainer, FormError } from './form.styled';
import selectors from '../../../store/selectors';
import utils from '../../../utils';
import { EventType } from '../../../types';

type EventDetailsFormProps = {
  eventDetails: EventType;
};

const EventDetailsSchema = Yup.object().shape({
  title: Yup.string().min(1, 'Too Short!').required('Required'),
  description: Yup.string().min(1, 'Too Short!').required('Required'),
  date: Yup.string().required('Required'),
  time: Yup.string().required('Required'),
  capacity: Yup.number().min(0, 'Please enter a number').required('Required'),
});

const EventDetailsForm: FC<EventDetailsFormProps> = ({ eventDetails }) => {
  const initialValues = {
    title: eventDetails.title,
    description: eventDetails.description,
    date: new Date(eventDetails.startsAt),
    time: utils.getCurrentTime(eventDetails.startsAt),
    capacity: eventDetails.capacity,
  };

  const dispatch = useDispatch();
  const updateEventErrorMessage = useSelector(selectors.selectActiveFormError);
  const isUpdatingEvent = useSelector(selectors.selectIsUpdatingEvent);

  const errorCheck = (key: string, value: string | number, error: string | undefined) => {
    if (value) {
      return updateEventErrorMessage.errorFields.includes(key) || error !== undefined;
    }
    return false;
  };

  const errorMessage = (key: string, value: string | number, error: string | undefined) => {
    if (value) {
      return updateEventErrorMessage.errorMessages[key] || (error !== undefined ? error : '');
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

        dispatch(actions.doUpdateEvent(eventDetails.id, newEventDetails));
      }}>
      {({ errors, values, handleChange, handleSubmit }) => (
        <FormContainer
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}>
          {updateEventErrorMessage.hasError && (
            <p>
              <FormError>{utils.generateTotalMessage(updateEventErrorMessage, 'eventDetails')}</FormError>
            </p>
          )}

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
            <DateField
              label="Date"
              name="date"
              type="date"
              value={values.date}
              error={Boolean(updateEventErrorMessage.errorFields.includes('startsAt') || errors.date)}
            />
          </InputContainer>

          <InputContainer>
            <DateField
              label="Time"
              name="time"
              type="time"
              value={values.time}
              error={Boolean(updateEventErrorMessage.errorFields.includes('startsAt') || errors.time)}
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

          <UpdateEventButton isLoading={isUpdatingEvent} />
        </FormContainer>
      )}
    </Formik>
  );
};

export default EventDetailsForm;
