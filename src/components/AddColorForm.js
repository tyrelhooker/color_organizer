import React, { useRef } from 'react';

const AddColorForm = () => {

  const titleInput = useRef('');
  const colorInput = useRef('#000000');
  
  const submit = (e) => {
    e.preventDefault();
    console.log(`New Color: ${titleInput.current.value} ${colorInput.current.value}`);
    titleInput.current.value = '';
    colorInput.current.value = '#000000';
    titleInput.current.focus();
  }

  return (
    <form onSubmit={submit}>
      <input ref={titleInput}
        type='text'
        placeholder='color title...' 
        required />
      <input ref={colorInput}
        type='color'
        required/>
      <button>ADD</button>
    </form>
  )
}

export default AddColorForm;