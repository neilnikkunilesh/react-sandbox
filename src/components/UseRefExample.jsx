import React, { useRef } from 'react'

function UseRefExample() {
    const inputRef = useRef();
    const paramRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        // inputRef.current is the DOM element
        console.log(inputRef.current.value)
        inputRef.current.value = inputRef.current.value;
        // inputRef.current.style.backgroundColor = 'red'
        paramRef.current.innerText = inputRef.current.value
    }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" ref={inputRef} id='name' className='form-control mb-2' />
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
      <p onClick={() => inputRef.current.focus()} ref={paramRef}></p>
    </div>
  )
}

export default UseRefExample
