import Task from "./Task"

const ViewTask = ( {list, onDelete, onToogle} ) => {
  return (
    <>
    {list.map( (each) => (
        <Task key={each.id} list={each} 
        onDelete={onDelete}
        onToogle={onToogle}/>
    ))}
  </>
  )
}

export default ViewTask