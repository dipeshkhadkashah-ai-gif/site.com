const Contact = require("../models/contactModel");

//create contact
const createContact = async (req, res) => {
  try {
    const contact = new Contact({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      desc: req.body.desc,
    });

    const savedContact = await contact.save();
    res.json(savedContact);
  } catch(error) {
    res.json(error);
    console.log(error);
  }
};

module.exports = { createContact };
