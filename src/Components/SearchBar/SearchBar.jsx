import { useState } from 'react';
//Components
import { AiOutlineSearch } from 'react-icons/ai';
//Styles
import css from './SearchBar.module.css';
//Utils
import PropTypes from 'prop-types'

export const SearchBaar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  function onChange(event) {
    const value = event.target.value;
    setInputValue(value);
  }

  function onSubmitForm(event) {
    onSubmit(event, inputValue);
    setInputValue('');
  }

  return (
    <form onSubmit={onSubmitForm} className={css.form}>
      <input
        type="text"
        name="search"
        value={inputValue}
        onChange={onChange}
        className={css.input}
        placeholder="Enter film"
      />
      <button type="submit" className={css.button}>
        Search
        <AiOutlineSearch size="15" style={{ marginLeft: '6px' }} />
      </button>
    </form>
  );
};


SearchBaar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}