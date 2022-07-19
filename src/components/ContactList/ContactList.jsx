import css from 'components/ContactList/ContactList.module.css';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.item}>
          <span className={css.text}>
            {name}: {number}
          </span>

          <button onClick={() => deleteContact(id)} className={css.btn}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
