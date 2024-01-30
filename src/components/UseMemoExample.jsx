import {useEffect, useMemo, useRef, useState} from 'react'
import UseRefExample4 from './UseRefExample4';

function UseMemoExample() {
   const [number, setNumber] = useState(1);
   const [inc, setInc] = useState(0);

   const renders = useRef(1);

   const sqrt = useMemo(() =>getSqrt(number), [number])

   useEffect(() => {
        renders.current = renders.current + 1;
   })

   const onClick = () => {
    setInc((prevState) => {
        console.log(prevState +1)
        return prevState + 1
    })
   }
  return (
    <div>
      <input type="number"  value={number}
      onChange={(e) => setNumber(e.target.value)}
      className='form-control w-25'/>

    <h2>The Sqrt of {number}: {sqrt} </h2>

      <button className='btn btn-primary' onClick={onClick}>ReRender</button>
      <h3>Renders: {renders.current}</h3>
    </div>
  )
}

function getSqrt(n) {
    for(let i = 0; i <=1000; i++) {
        console.log(i)
    }
    console.log('Expensive function called!')
    return Math.sqrt(n);
}
export default UseMemoExample
