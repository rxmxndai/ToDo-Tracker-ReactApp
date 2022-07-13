import { useState } from "react"

const NewTask = ( {addTask} ) => {
  const onSubmit = (e) => {
    e.preventDefault();

    addTask( {task, day, reminder} )

    setTask("")
    setDay("")
    setReminder(false)
  }

  const [task, setTask] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-control">
      <label>ToDo</label>
      <input type="text" placeholder="New ToDo" value={task} 
      onChange={ (e) => setTask(e.target.value)}></input>
      </div>

      <div className="form-control">
      <label>Day and Time</label>
      <input type="text" placeholder="Add Day and Time" value={day} 
      onChange={ (e) => setDay(e.target.value)}></input>
      </div>

      <div className="form-control form-control-check">
      <label>Reminder</label>
      <input type="checkbox" checked={reminder} value={reminder} onChange={ (e) => setReminder(e.target.checked)}></input>
      </div>

      <input type="submit" value="Submit" className="btn btn-block" />

    </form>
  )
}

export default NewTask