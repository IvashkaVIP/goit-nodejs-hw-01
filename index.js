const { Command } = require("commander");
const { nanoid } = require("nanoid");
const program = new Command();
const fs = require("fs").promises;

program.name("nodejs-hw1").description("CLI to nodejs-hw1").version("1.0.0");

// listContacts()
// Возвращает массив контактов.

// getContactById(contactId)
// Возвращает объект контакта с таким id. Возвращает null, если объект с таким id не найден.
program
  .command("get-contact")
  .description("get contact by id from main file")
  .option("--id <string>")
  .action((str, options) => {
    console.log("str >>> ", str);
    console.log("options >>> ", options);
    //   console.log('contact >>> ', contact)
  });
// removeContact(contactId)
// Возвращает объект удаленного контакта. Возвращает null, если объект с таким id не найден.

// addContact(name, email, phone) {
// Возвращает объект добавленного контакта.
program
  .command("add-contact")
  .description("add contact to the main file")
  .argument("<string>", "object of new contact")
  //   .option("--first", "display just the first substring")
  //   .option("-s, --separator <char>", "separator character", ",")
  .action(async (str, options) => {
    // const limit = options.first ? 1 : undefined;
    // console.log(str.split(options.separator, limit));
    const input = JSON.parse(str);
    const contact = {
      id: nanoid(),
      ...input,
    };
    //   console.log('str >>> ', input)
    //   console.log("options >>> ", options)
    //   console.log('contact >>> ', contact)

    const db = JSON.parse((await fs.readFile("./db/contacts.json")).toString());
    db.push(contact);
    await fs.writeFile("./db/contacts.json", JSON.stringify(db, null, 2));

    console.log(db);
  });

//------------------------------------
program
  .command("split")
  .description("Split a string into substrings and display as an array")
  .argument("<string>", "string to split")
  .option("--first", "display just the first substring")
  .option("-s, --separator <char>", "separator character", ",")
  .action((str, options) => {
    const limit = options.first ? 1 : undefined;
    console.log(str.split(options.separator, limit));
  });

program.parse(process.argv);

//      "id": "AeHIrLTr6JkxGE6SN-0Rw",
//     "name": "Allen Raymond",
//     "email": "nulla.ante@vestibul.co.uk",
//     "phone": "(992) 914-3792"
