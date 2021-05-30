import { EventDetailsType, EventType } from '../types';
import api from '../api';

export async function createEvent(eventDetails: EventDetailsType, accessToken: string): Promise<EventType> {
  const response = await api.createEventAPI(eventDetails, accessToken);
  return response;
}

export async function updateEvent(id: string, eventDetails: EventDetailsType, accessToken: string): Promise<EventType> {
  const response = await api.updateEventAPI(id, eventDetails, accessToken);
  return response;
}

export async function setAttendeeStatus(id: string, status: boolean, accessToken: string): Promise<EventType> {
  const response = await api.setAttendeeStatusAPI(id, status, accessToken);
  return response;
}

export async function deleteEvent(id: string, accessToken: string): Promise<{ deleted: boolean }> {
  const response = await api.deleteEventAPI(id, accessToken);
  return response;
}
