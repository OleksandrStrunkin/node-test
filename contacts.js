
const fs = require('fs');
const path = require('path');



const contactsPath = path.join(__dirname, './db/contacts.json')


// TODO: задокументувати кожну функцію
function listContacts() {
    fs.readFile(contactsPath, 'utf-8', (error, data)=>{
        if (error) {
            console.log(error)
        }
        const res = JSON.parse(data);
        console.log(res)
    })
  }
  
  function getContactById(contactId) {
    fs.readFile(contactsPath, 'utf-8', (error, data)=>{
        if (error) {
            console.log(error)
        }
        const items = JSON.parse(data)
        const result = items.find(d=> contactId === d.id)
        console.log(result)
    })
  }
  
  function removeContact(contactId) {
    fs.readFile(contactsPath, 'utf-8', (error, data)=>{
        if (error) {
            console.log(error)
        }
        const items = JSON.parse(data)
        const result = items.filter(d=> contactId !== d.id)
        console.log(result)
    })
  }
  
  function addContact(name, email, phone) {
    fs.readFile(contactsPath, 'utf-8', (error, data)=>{
        if (error) {
            console.log(error)
        }
        const items = JSON.parse(data)
        const id = (items.length + 1).toString();
        const newContact = { id, name, email, phone };
        items.push(newContact);
        fs.writeFileSync(contactsPath, JSON.stringify(items));
        console.log(newContact)
    })
  }

  module.exports ={
    listContacts,
    getContactById,
    removeContact,
    addContact
  }