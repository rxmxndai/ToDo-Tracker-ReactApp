import { TiTick } from 'react-icons/ti';
import { Link } from 'react-router-dom';


const Tasks = ( {list, onDelete, onToogle} ) => {
  return (
    <div 
      className={`task ${list.reminder ? 'active': ''}`}
      onDoubleClick={ () => onToogle(list.id)}>
        <h3>{list.task} 
        <TiTick
          style={{color: "lightgreen", cursor: "pointer"}}
          onClick={ () => onDelete(list.id)
        }
        /></h3>

      <p>{list.day}</p>
      <p> 
        <Link to={`task/${list.id}`}> View Details </Link> 
      </p>
    </div>

  )
}

export default Tasks