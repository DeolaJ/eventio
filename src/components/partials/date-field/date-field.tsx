import { FC } from 'react';
import { useFormikContext } from 'formik';
import TimePicker from 'react-time-picker';
import DatePicker from 'react-date-picker';

import { DateLabel, DatePickerWrapper, DateFieldError } from './date-field.styled';

type DateFieldProps = {
  label: string;
  name: string;
  type: string;
  value: Date | string;
  error: boolean;
  errorMessage?: string;
};

const DateField: FC<DateFieldProps> = ({ label, name, type, value, error, errorMessage }) => {
  const { setFieldValue } = useFormikContext();

  return (
    <>
      <DateLabel htmlFor={name}>{value && label}</DateLabel>

      <DatePickerWrapper className={error ? 'error' : ''}>
        {type === 'date' ? (
          <DatePicker
            onChange={(val) => setFieldValue(name, val)}
            value={typeof value === 'string' ? null : value}
            minDate={new Date()}
            format="y-MMM-dd"
          />
        ) : (
          <TimePicker onChange={(val) => setFieldValue(name, val)} value={value} format="h:m:s a" disableClock />
        )}
      </DatePickerWrapper>

      {errorMessage && <DateFieldError>{errorMessage}</DateFieldError>}
    </>
  );
};

export default DateField;
