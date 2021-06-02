import { AxiosResponse } from 'axios';

import axiosClient from './apiClient';
import { EventDetailsType, EventType } from '../types';
import { getFromLocalStorage } from '../utils/helpers';

export async function createEventAPI(eventDetails: EventDetailsType): Promise<EventType> {
  const { title, description, startsAt, capacity } = eventDetails;
  const accessToken = getFromLocalStorage('accessToken');

  return axiosClient({
    method: 'post',
    url: '/events',
    headers: {
      Authorization: accessToken,
    },
    data: {
      title,
      description,
      startsAt,
      capacity,
    },
  }).then((response: AxiosResponse) => response.data);
}

export async function updateEventAPI(id: string, eventDetails: EventDetailsType): Promise<EventType> {
  const { title, description, startsAt, capacity } = eventDetails;
  const accessToken = getFromLocalStorage('accessToken');

  return axiosClient({
    method: 'patch',
    url: `/events/${id}`,
    headers: {
      Authorization: accessToken,
    },
    data: {
      title,
      description,
      startsAt,
      capacity,
    },
  }).then((response: AxiosResponse) => response.data);
}

export async function setAttendeeStatusAPI(id: string, status: boolean): Promise<EventType> {
  const accessToken = getFromLocalStorage('accessToken');

  return axiosClient({
    method: status ? 'post' : 'delete',
    url: `/events/${id}/attendees/me`,
    headers: {
      Authorization: accessToken,
    },
  }).then((response: AxiosResponse) => response.data);
}

export async function deleteEventAPI(id: string): Promise<{ deleted: boolean }> {
  const accessToken = getFromLocalStorage('accessToken');

  return axiosClient({
    method: 'delete',
    url: `/events/${id}`,
    headers: {
      Authorization: accessToken,
    },
  }).then(async (response: AxiosResponse) => {
    if (response.status === 204) {
      return {
        deleted: true,
      };
    }

    return {
      deleted: false,
    };
  });
}
