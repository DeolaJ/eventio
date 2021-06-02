import { EventDetailsType, EventType } from '../types';
import api from '../api';

export async function createEvent(eventDetails: EventDetailsType): Promise<EventType> {
  const response = await api.createEventAPI(eventDetails);
  return response;
}

export async function updateEvent(id: string, eventDetails: EventDetailsType): Promise<EventType> {
  const response = await api.updateEventAPI(id, eventDetails);
  return response;
}

export async function setAttendeeStatus(id: string, status: boolean): Promise<EventType> {
  const response = await api.setAttendeeStatusAPI(id, status);
  return response;
}

export async function deleteEvent(id: string): Promise<{ deleted: boolean }> {
  const response = await api.deleteEventAPI(id);
  return response;
}
