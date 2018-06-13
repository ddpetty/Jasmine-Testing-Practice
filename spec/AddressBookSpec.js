//Test Suite for Address Book
describe('Address Book', function() {
  let addressBook, 
  thisContact;

  beforeEach(function() {
    addressBook = new AddressBook();
    thisContact = new Contact();
  });

  it('should be able to add a contact', function() {
    addressBook.addContact(thisContact);

    //First Contact in addressBook === thisContact
    expect(addressBook.getContact(0)).toBe(thisContact);
  });

  it('should be able to delete a contact', function() {
    addressBook.addContact(thisContact);
    addressBook.deleteContact(0);

    expect(addressBook.getContact(0)).not.toBeDefined();
  });
});

//Test Suite for Fake Async Address Book
// Simulates ajax calls and responses
describe('Async Address Book', function() {
  addressBook = new AddressBook();
  /* Signals to Jasmine that the async function is done and it can continue testing. */
  beforeEach(function() {
    addressBook.getInitialContacts(function() {
    });
  });

  it('should grab initial contacts', function() {
    expect(addressBook.initialComplete).toBe(true);
  });
});