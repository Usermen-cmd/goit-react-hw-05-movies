import { useState } from 'react';

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
    <form onSubmit={onSubmitForm}>
      <input type="text" name="search" value={inputValue} onChange={onChange} />
      <button type="submit">search</button>
    </form>
  );
};
