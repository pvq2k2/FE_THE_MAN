import { Contact } from "../models/Contact";
import instance from "./Config";
export const getAllContact = (): Promise<Contact[]> => {
  return instance.get("/contacts");
};
export const removeContact = (id: string): Promise<Contact> => {
  return instance.delete(`/contact/${id}`);
};

export const addContact = (contact: Contact): Promise<Contact> => {
  return instance.post("/contact", contact);
};

export const getContact = (id: string): Promise<Contact> => {
  return instance.get(`/contact/${id}`);
};

export const updateContact = (contact: Contact): Promise<Contact> => {
  return instance.put(`/contact/${contact._id}`, contact);
};
