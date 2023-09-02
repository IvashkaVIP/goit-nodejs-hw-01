const { Command } = require("commander");
const { clear } = require("console");
const { nanoid } = require("nanoid");
const program = new Command();
const fs = require("fs").promises;
const contacts = require("./contacts.js");
//---------------------------------------------------------
// index.js
const argv = require('yargs').argv;

// TODO: рефакторить
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);
      
    case 'get':
      const gettingContactById = await contacts.getContactById(id);
      return console.log(gettingContactById);
      
    case 'add':
      const addingContact = await contacts.addContact({ name, email, phone });
      return console.log(addingContact);

    case 'remove':
      const removalContact = await contacts.removeContact(id);
      return console.log(removalContact);

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}
// const param = {action : 'list'}
// const param = {action:"get", id:"rX9VXwtklXCK9nWG4xdEO"};
// const param = { action: "add", name:"Vasya", email:"vasya@mail.com",phone: "(098)7654748"};
const param = { action: "remove", id: "mkEiNp7o794YCK6Pev-NJ" };
invokeAction(param);



// //---------------------------------------------------------
// program
//   .name("nodejs-hw1")
//   .description("CLI on the nodejs-hw1")
//   .version("1.0.0");

// // listContacts()
// // Возвращает массив контактов.

// // getContactById(contactId)
// // Возвращает объект контакта с таким id. Возвращает null, если объект с таким id не найден.
// program
//   .command("get-contact")
//   .description("get contact by id from main file")
//   .option("--id <string>")
//   .action((str, options) => {
//     console.log("str >>> ", str);
//     console.log("options >>> ", options);
//     //   console.log('contact >>> ', contact)
//   });
// // removeContact(contactId)
// // Возвращает объект удаленного контакта. Возвращает null, если объект с таким id не найден.

// // addContact(name, email, phone) {
// // Возвращает объект добавленного контакта.
// program
//   .command("add-contact")
//   .description("add contact to the main file")
//   .argument("<string>", "object of new contact")
//   //   .option("--first", "display just the first substring")
//   //   .option("-s, --separator <char>", "separator character", ",")
//   .action(async (str, options) => {
//     // const limit = options.first ? 1 : undefined;
//     // console.log(str.split(options.separator, limit));
//     const input = JSON.parse(str);
//     const contact = {
//       id: nanoid(),
//       ...input,
//     };
//     //   console.log('str >>> ', input)
//     //   console.log("options >>> ", options)
//     //   console.log('contact >>> ', contact)

//     const db = JSON.parse((await fs.readFile("./db/contacts.json")).toString());
//     db.push(contact);
//     await fs.writeFile("./db/contacts.json", JSON.stringify(db, null, 2));

//     console.log(db);
//   });

// //------------------------------------
// program
//   .command("split")
//   .description("Split a string into substrings and display as an array")
//   .argument("<string>", "string to split")
//   .option("--first", "display just the first substring")
//   .option("-s, --separator <char>", "separator character", ",")
//   .action((str, options) => {
//     const limit = options.first ? 1 : undefined;
//     console.log(str.split(options.separator, limit));
//   });

// //-----------------------------------------------
// program
//   .command("test")
//   .description("Split a string into substrings and display as an array")
//   // .argument("<string>", "string to split")
//   .option("--first", "display just the first substring")
//   .option("-s, --separator <char>", "separator character", ",")
//   .action(async (str, options) => {
//     // console.log("test >>>> ", await contacts.listContacts());
//     // console.log(
//     //   "test >>>> ",
//     //         await contacts.getContactById("05olLMgyVQdWRwgKfg5J6")
//     // );
//     console.log(
//       "test >>> ",
//       await contacts.addContact({
//         name: "Bob",
//         email: "bob@mail.com",
//         phone: "(123)45678",
//       })
//     );
   
//     // console.log("test >>> ", await contacts.removeContact('rmt051tt8POfH06Zn_jNq'));
    
//     // const limit = options.first ? 1 : undefined;
//     // console.log(str.split(options.separator, limit));
//   });

// program.parse(process.argv);

// //--------------------------------------------

// //      "id": "AeHIrLTr6JkxGE6SN-0Rw",
// //     "name": "Allen Raymond",
// //     "email": "nulla.ante@vestibul.co.uk",
// //     "phone": "(992) 914-3792"
