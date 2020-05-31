import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const AddColorForm = ({ onNewColor = f => f }) => {
  const titleInput = useRef();
  const colorInput = useRef();

  const submit = e => {
    e.preventDefault();
    onNewColor(titleInput.current.value, colorInput.current.value);
    titleInput.current.value = '';
    colorInput.current.value = '#000000';
    titleInput.current.focus();
  };

  return (
    <form onSubmit={submit}>
      <input
        ref={titleInput}
        type='text'
        placeholder='color title...'
        required
      />
      <input ref={colorInput} type='color' required />
      <button>ADD</button>
    </form>
  );
};

AddColorForm.propTypes = {
  onNewColor: PropTypes.func
};

export default AddColorForm;
