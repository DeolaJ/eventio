import { EventType } from '../types';
import api from '../api';

export async function fetchAllEvents(): Promise<EventType[]> {
  const response = await api.fetchAllEventsAPI();
  return response;
}

export async function fetchEvent(id: string): Promise<EventType> {
  const response = await api.fetchEventAPI(id);
  return response;
}
