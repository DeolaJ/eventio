import { AxiosResponse } from 'axios';

import axiosClient from './apiClient';
import { EventDetailsType, EventType } from '../types';

export async function createEventAPI(eventDetails: EventDetailsType, accessToken: string): Promise<EventType> {
  const { title, description, startsAt, capacity } = eventDetails;

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

export async function updateEventAPI(
  id: string,
  eventDetails: EventDetailsType,
  accessToken: string
): Promise<EventType> {
  const { title, description, startsAt, capacity } = eventDetails;

  return axiosClient({
    method: 'put',
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

export async function setAttendeeStatusAPI(id: string, status: boolean, accessToken: string): Promise<EventType> {
  return axiosClient({
    method: status ? 'post' : 'delete',
    url: `/events/${id}/attendees/me`,
    headers: {
      Authorization: accessToken,
    },
  }).then((response: AxiosResponse) => response.data);
}

export async function deleteEventAPI(id: string, accessToken: string): Promise<{ deleted: boolean }> {
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
