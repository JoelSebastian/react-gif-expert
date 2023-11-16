import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSumbit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length === 0) return;
    setInputValue('');
    onNewCategory(inputValue.trim());
  };

  return (
    <form onSubmit={onSumbit}>
      <input
        autoFocus
        type="text"
        placeholder="buscar keys"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func,
};
