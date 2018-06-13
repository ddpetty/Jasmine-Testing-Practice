class AddressBook {
  constructor(contacts) {
    this.contacts = [];
  }
  //Adds contact to array of contacts
  addContact(contact) {
    this.contacts.push(contact);
  }
  //Returns contact index
  getContact(index) {
    return this.contacts[index];
  }
  //Deletes contact
  deleteContact(index) {
    this.contacts.splice(index, 1);
  }
  getInitialContacts() {
    this.initialComplete = true;
  }
}