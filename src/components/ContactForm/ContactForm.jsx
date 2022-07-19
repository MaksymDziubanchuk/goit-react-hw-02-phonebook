import { nanoid } from 'nanoid';
import css from 'components/ContactForm/ContactForm.module.css';

const inputNameId = nanoid();
const inputNumberId = nanoid();

export const ContactForm = ({
  onSubmit,
  name,
  handleNameChange,
  number,
  handleNumberChange,
}) => {
  return (
    <form onSubmit={onSubmit} className={css.form}>
      <label htmlFor={inputNameId}>
        <p className={css.input__title}>Name</p>
        <input
          className={css.input}
          id={inputNameId}
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor="inputNumberId">
        <p className={css.input__title}>Number</p>
        <input
          className={css.input}
          id={inputNumberId}
          value={number}
          onChange={handleNumberChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
};
