const Button = ( {name, color, onAdd}) => {
  return (
    <button className="btn"
    style={{backgroundColor:color}}
    onClick={onAdd}
    >
      {name}
    </button>
  )
}

export default Button