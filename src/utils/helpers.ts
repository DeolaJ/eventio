import { UserType } from '../types';

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
