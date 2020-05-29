import React from 'react';

const AddColorForm = () => {
  return (
    <form onSubmit={e=>e.preventDefault()}>
      <input 
        type='text'
        placeholder='color title...' 
        required />
      <input
        type='color'
        required/>
      <button>ADD</button>
    </form>
  )
}

export default AddColorForm;