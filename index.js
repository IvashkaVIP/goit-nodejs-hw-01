const { Command } = require("commander");
const program = new Command();
const contacts = require("./contacts.js");

// const yargs = require("yargs");
// const { hideBin } = require("yargs/helpers");

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

//----------------------------
program.parse(process.argv);
const argv = program.opts();

invokeAction(argv);

//----------------------------------Ручной запуск с аргументами
// const param = {action : 'list'}
// const param = {action:"get", id:"rX9VXwtklXCK9nWG4xdEO"};
// const param = { action: "add", name:"Vasya", email:"vasya@mail.com",phone: "(098)7654748"};
// const param = { action: "remove", id: "mkEiNp7o794YCK6Pev-NJ" };
// invokeAction(param);

//----------------------------------Автоматическая обработка ком/стр
// const actionIndex = process.argv.indexOf("--action");
// if (actionIndex !== -1) {
//   const action = process.argv[actionIndex + 1];
//   invokeAction({ action });
// }

//----------------------------------Yarg для обработки ком/стр
// const arr = hideBin(process.argv);
// const { argv } = yargs(arr);
// invokeAction(argv);
