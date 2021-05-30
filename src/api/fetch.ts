import { AxiosResponse } from 'axios';

import axiosClient from './apiClient';
import { EventType } from '../types';

export async function fetchAllEventsAPI(): Promise<EventType[]> {
  return axiosClient.get('/events').then((response: AxiosResponse) => response.data);
}

export async function fetchEventAPI(id: string): Promise<EventType> {
  return axiosClient(`/events/${id}`).then((response: AxiosResponse) => response.data);
}
