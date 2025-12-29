import { useState, useEffect, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Navbar from './components/Navbar'
import './App.css'

function App() {

  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])
  const [showFinished, setshowFinished] = useState(true)
  const firstRun = useRef(true)

  useEffect(() => {
    const stored = localStorage.getItem("savedTasks");

    if (stored) {
      const savedTasks = JSON.parse(stored);

      if (Array.isArray(savedTasks)) {
        setTasks(savedTasks);
      }
    }
  }, []);

  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }

    saveToLS(tasks);
    console.log("i am useeffect save");
  }, [tasks]);




  const handleEdit = (id, e) => {
    if (task.length != 0) {
      let isConfirmed = confirm("Do you want to discard the changes?")
      if (isConfirmed) {
        setTasks([...tasks, { id: uuidv4(), task, isCompleted: false, }])
        setTask("")
      } else {
      }
    } else {
      let taskToEdit = tasks.filter(item => { return item.id === id })
      setTask(taskToEdit[0].task)
      let newTasks = tasks.filter(item => {
        return item.id !== id
      }
      )
      setTasks(newTasks)
    }
  }

  const handleDelete = (id, e) => {
    let newTasks = tasks.filter(item => {
      return item.id !== id
    }
    )
    let isConfirmed = confirm("Are you sure you want to delete this Task?")
    if (isConfirmed) {
      setTasks(newTasks)
    } else {
    }
  }

  const handleAdd = () => {
    setTasks([...tasks, { id: uuidv4(), task, isCompleted: false, }])
    setTask("")
    console.log(`Task Added. Task is :`)
    console.log(tasks)
  }

  const handleChange = (e) => {
    setTask(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.id
    let index = tasks.findIndex(item => {
      return item.id === id
    })
    console.log(id, index)
    let newTasks = [...tasks]
    newTasks[index].isCompleted = !newTasks[index].isCompleted
    setTasks(newTasks)
    console.log(newTasks)
  }

  const saveToLS = (data) => {
    localStorage.setItem("savedTasks", JSON.stringify(data));
    console.log(`Task saved. Task saved is :`)
    console.log(tasks)
  };

  const toggleFinished = () => {
    setshowFinished(!showFinished)
  }


  return (
    <>
      <Navbar />
      <div className="container w-[90%] mx-auto my-5 lg:max-w-[50%]">

        <div className='add-task-container'>
          <h2>Add Task</h2>
          <div className='flex gap-3'>
            <input onChange={handleChange} value={task} type="text" className='border border-black w-full bg-transparent focus:outline-none px-2 rounded-sm'
              onKeyDown={(e) => {
                if (e.key === "Enter")
                  handleAdd();
              }}
            />
            <button onClick={handleAdd} disabled={task.length < 3} className='bg-blue-600 rounded-sm py-1 px-2 text-white hover:bg-blue-800 disabled:bg-blue-300'>Save</button>

          </div>
        </div>


        <div className="tasks-container py-5 ">

          <h1 className='text-xl'>Your Tasks</h1>
          <div className='flex gap-2'>
            <input onChange={toggleFinished} type="checkbox" checked={showFinished} name="" id="showfinished" />
            <label htmlFor="showfinished">Show Completed</label>
          </div>

          <div className="tasks">
            {tasks.length == 0 && <div>No Tasks to display</div>}
            {tasks.map(item => {
              return (showFinished || !item.isCompleted) && <div key={item.id} className='flex flex-col item-center justify-between p-3 bg-gray-300 rounded-lg my-2 sm:flex-row '>
                <div className="text-box flex gap-2 item-center">
                  <input className="w-5 flex-shrink-0" onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} id={item.id} />
                  <div className={`px-1 sm:px-5 justify flex items-center text-wrap ${item.isCompleted ? "line-through" : ""}`}>{item.task}</div>
                </div>
                <div className="buttons flex justify-end items-center gap-5 sm:justify-between">
                  <button onClick={(e) => handleEdit(item.id, e)} value={item.task} className='bg-blue-600 rounded-md py-1 px-2 my-2 text-white  hover:bg-blue-800'>Edit</button>
                  <button onClick={(e) => handleDelete(item.id, e)} className='bg-blue-600 rounded-md py-1 px-2 my-2 text-white  hover:bg-blue-800'>Delete</button>
                </div>
              </div>
            })
            }
          </div>

        </div>
      </div>
    </>
  )
}

export default App
