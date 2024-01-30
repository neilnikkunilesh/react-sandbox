import {useState, useEffect, useRef} from 'react'

function Todo() {
    const [loading, setLoading] = useState(true);
    const [todo, setTodo] = useState({})

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((res) => res.json())
        .then((data) => {
            setTimeout(() => {
                setTodo(data);
                setLoading(false)
            }, 3000)
        })
    }, [])

  return (
    loading ? <h3>Loading...</h3> : <h3>{todo.title}</h3>
  )
}

export default Todo
