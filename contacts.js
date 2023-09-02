const fs = require("fs/promises");
const { nanoid } = require("nanoid");
const path = require("path");

// contacts.js

const contactsPath = path.join(__dirname, "./db/contacts.json");

async function listContacts() {
  // console.log("listContacts >>> ", contactsPath)
  console.log("listContacts >>> ");
  const listContacts = JSON.parse(await fs.readFile(contactsPath));
  return listContacts;
}

async function getContactById(contactId) {
  const contactById = (await listContacts()).find(
    (item) => item.id === contactId
  );
  return contactById || null;
}

async function addContact(data) {
  const newContact = { id: nanoid(), ...data };
  const newList = (await listContacts())
  newList.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(newList, null, 2));
  return (newList)
}

async function removeContact(contactId) { 
  const newList = await listContacts();
  const index = newList.findIndex(item => item.id === contactId);
  if (index === -1) return null;
  const [result] = newList.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(newList, null, 2));
  return result;
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};

/*

function removeContact(contactId) {
  // ...твой код. Возвращает объект удаленного контакта. Возвращает null, если объект с таким id не найден.
}1


*/
