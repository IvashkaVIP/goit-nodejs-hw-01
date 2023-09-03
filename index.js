const { Command } = require("commander");
const program = new Command();
const contacts = require("./contacts.js");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.table(allContacts);

    case "get":
      const gettingContactById = await contacts.getContactById(id);
      return console.log(gettingContactById);

    case "add":
      const addingContact = await contacts.addContact({ name, email, phone });
      return console.log(addingContact);

    case "remove":
      const removalContact = await contacts.removeContact(id);
      return console.log(removalContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);
const argv = program.opts();
invokeAction(argv);

