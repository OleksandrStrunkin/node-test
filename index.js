console.log("--------Початок коду-----------")

const log = require('./contacts')

const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

// TODO: рефакторить
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      log.listContacts()
      break;

    case "get":
      log.getContactById(id)
      break;

    case "add":
      log.addContact(name, email, phone)
      break;

    case "remove":
      log.removeContact(id)
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);