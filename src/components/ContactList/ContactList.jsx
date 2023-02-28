import PropTypes from 'prop-types';
import css from '../ContactList/ContactList.module.css';
import { Contact } from '../ContactRender/ContactRender.jsx';
import { useSelector } from 'react-redux';

export function ContactList() {
  const contacts = useSelector(state => state.contactsData.contacts);
  const filter = useSelector(state => state.contactsData.filter);

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().trim().includes(filter.toLowerCase());
  });
  if (filteredContacts.length === 0) {
    return;
  }
  return (
    <ul className={css.contactList}>
      {filteredContacts.map(contact => {
        return <Contact contact={contact} key={contact.id} />;
      })}
    </ul>
  );
}
