import { ActiveFormErrorType, UserType } from '../types';
import { errorMessageObj } from '../constants';

export function localStorageAvailable(): boolean | undefined {
  let storage;
  try {
    storage = window.localStorage;
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

const isLocalStorageAvailable = localStorageAvailable() || false;

export function storeInLocalStorage(key: string, data: UserType): void {
  if (isLocalStorageAvailable) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}

export function storeStringInLocalStorage(key: string, data: string): void {
  if (isLocalStorageAvailable) {
    localStorage.setItem(key, data);
  }
}

export function getFromLocalStorage(key: string): string | void {
  if (isLocalStorageAvailable) {
    return localStorage.getItem(key) || '';
  }
}

export function removeFromLocalStorage(key: string): void {
  if (isLocalStorageAvailable) {
    localStorage.removeItem(key);
  }
}

export function generateTotalMessage(
  error: ActiveFormErrorType,
  type: 'eventDetails' | 'userDetails' | 'loginDetails'
): string {
  let errorMessage = 'Oops! That ';
  const titleObject: { [key: string]: string } = errorMessageObj[type];

  const errorFieldsLength = error.errorFields.length;

  for (let i = 0; i < errorFieldsLength; i += 1) {
    const label = error.errorFields[i];
    errorMessage += titleObject[label];

    if (errorFieldsLength > 1 && i < error.errorFields.length) {
      errorMessage += ' and ';
    }
  }

  errorMessage += ' combination is not valid.';

  return errorMessage;
}

export const getCurrentTime = (date?: string): string => {
  let currentDate;
  if (date) {
    currentDate = new Date(date);
  } else {
    currentDate = new Date();
  }
  return `${currentDate.getHours()}:${
    currentDate.getMinutes() > 9 ? currentDate.getMinutes() : `0${currentDate.getMinutes()}`
  }`;
};

export function setCurrentDate(date: Date, timeString: string): string {
  const hours: number[] = timeString.split(':').map((timeValue) => parseInt(timeValue, 10));
  const newDateValue = date.setHours(hours[0], hours[1], hours[2] || 0);

  const newDateString = new Date(newDateValue);

  return newDateString.toISOString();
}

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export function formatDate(date: string): string {
  const dateObj = new Date(date);
  let formattedDate = '';

  formattedDate += months[dateObj.getMonth()];
  formattedDate += ` ${dateObj.getDate()}, `;
  formattedDate += ` ${dateObj.getFullYear()} - `;

  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();

  if (hours > 12) {
    formattedDate += ` ${hours - 12}:${minutes > 10 ? minutes : `0${minutes}`} PM`;
  } else if (hours === 12) {
    formattedDate += ` 12:${minutes} PM`;
  } else {
    formattedDate += ` ${hours}:${minutes > 10 ? minutes : `0${minutes}`} AM`;
  }

  return formattedDate;
}
