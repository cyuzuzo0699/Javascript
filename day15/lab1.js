let contacts = [
    {
        name: "Maxwell Wright",
        phone: "(0191) 719 6495",
        email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    },
    {
        name: "Raja Villarreal",
        phone: "0866 398 2895",
        email: "posuere.vulputate@sed.com"
    },
    {
        name: "Helen Richards",
        phone: "0800 1111",
        email: "libero@convallis.edu"
    }
];

function showContact(contactList, index) {
    if (contactList instanceof Array && index >= 0 && index < contactList.length) {
        const contact = contactList[index];
        console.log(`Name: ${contact.name}`);
        console.log(`Phone: ${contact.phone}`);
        console.log(`Email: ${contact.email}`);
    } else {
        console.log("Invalid arguments for showContact function.");
    }
}

function showAllContacts(contactList) {
    if (contactList instanceof Array) {
        contactList.forEach((contact, index) => {
            console.log(`Contact #${index + 1}`);
            showContact([contact], 0); 
            console.log("--------------------");
        });
    } else {
        console.log("Invalid argument for showAllContacts function.");
    }
}

function addNewContact(contactList, name, phone, email) {
    if (contactList instanceof Array && name && phone && email) {
        const newContact = {
            name: name,
            phone: phone,
            email: email
        };
        contactList.push(newContact);
        console.log("New contact added successfully.");
    } else {
        console.log("Invalid arguments for addNewContact function.");
    }
}


showAllContacts(contacts);

addNewContact(contacts, "Yvette Cyuzuzo", "0783313776", "cy@example.com");

showContact(contacts, 0);