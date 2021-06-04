import { FC } from 'react';
// import { FC, useState, useEffect, useRef } from 'react';
// import isEqual from 'lodash/isEqual';
import { useFormikContext } from 'formik';
import TimePicker from 'react-time-picker';
import DatePicker from 'react-date-picker';

import { DateLabel, DatePickerWrapper, DateFieldError } from './date-field.styled';

type DateFieldProps = {
  label: string;
  name: string;
  type: string;
  value: Date | string;
  // setValue: (event: Date | TimePickerValue) => void;
  error: boolean;
  errorMessage?: string;
};

// type DatetimeProps = {
//   _d: Date;
// };

const DateField: FC<DateFieldProps> = ({ label, name, type, value, error, errorMessage }) => {
  const { setFieldValue } = useFormikContext();
  // const [dateValue, setDateValue] = useState(value);

  // const updateFormValue = useRef((newValue: DatetimeProps) => {
  //   setValue(newValue._d);
  // });

  // const updateLocalValue = (localValue: DatetimeProps) => {
  //   if (isEqual(localValue._d, dateValue)) {
  //     return;
  //   }
  //   setDateValue(localValue._d);
  //   updateFormValue.current(localValue);
  // };

  // useEffect(() => {
  //   setDateValue(value);
  // }, [value]);

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
