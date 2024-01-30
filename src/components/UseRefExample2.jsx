import React, { useRef } from 'react'

function UseRefExample2() {
  let ref = useRef(0);
  let printRef = useRef();

  const handleClick = () => {
    ref.current = ref.current + 1;
    printRef.current.innerText = `You have clicked ${ref.current} times!`;
  }

  return (
    <div>
      <button onClick={handleClick} className='btn btn-primary'>Click me!</button>
      <p ref={printRef}></p>
    </div>
  )
}

export default UseRefExample2
// If you show {ref.current} in the JSX, the number won’t update on click. 
// This is because setting ref.current does not trigger a re-render. 
// Information that’s used for rendering should be state instead.
