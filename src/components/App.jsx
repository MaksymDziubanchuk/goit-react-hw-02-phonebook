import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import contacts from 'components/Data/contacts.json';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import css from 'components/App.module.css';

export class App extends Component {
  state = {
    contacts,
    filter: '',
    name: '',
    number: '',
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleNumberChange = e => {
    this.setState({ number: e.target.value });
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { contacts, name, number } = this.state;
    for (let contact of contacts) {
      if (contact.name.toLowerCase() === name.toLowerCase()) {
        alert(`${name} is already in contacts.`);
        this.resetForm();
        return;
      }
    }
    this.addContact(name, number);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      filter: '',
      number: '',
    });
  };

  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter, name, number } = this.state;

    const searchContact = filter.toLowerCase();
    const filteredContacts = contacts
      .filter(contact => contact.name.toLowerCase().includes(searchContact))
      .sort((firstContact, secondContact) =>
        firstContact.name.localeCompare(secondContact.name)
      );

    return (
      <div className={css.thumb}>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.handleSubmit}
          name={name}
          handleNameChange={this.handleNameChange}
          number={number}
          handleNumberChange={this.handleNumberChange}
        />
        <h2>Contacts</h2>
        <Filter filter={filter} handleFilterChange={this.handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
