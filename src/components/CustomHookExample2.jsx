import useLocalStorage from '../hooks/useLocalStorage'

function CustomHookExample2() {
    const [task, setTask] = useLocalStorage('task', '')
    const [tasks, setTasks] = useLocalStorage('task', [])

    const onSubmit = (e) => {
        e.preventDefault()

        const taskObj = {
            task,
            completed: false,
            date: new Date().toLocaleDateString(),
        }

        setTasks([...tasks, taskObj])
    }

  return (
    <>
      <form className='w-50' onSubmit={onSubmit}>
        <div className='mb-3'>
            <label className="form-label">Task</label>
            <input type="text" 
            value={task}
             onChange={(e) => setTask(e.target.value)} />
        </div>
        <button type="submit" className='btn btn-primary'>Submit</button>
      </form>

        <hr />
        {/* {tasks.map((task) => (
            <h3 key={task.date}>{task.task}</h3>
        ))} */}
      </>
  )
}

export default CustomHookExample2
