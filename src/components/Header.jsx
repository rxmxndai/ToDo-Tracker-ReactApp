import Button from "./Button"

const Header = ( {title, onAdd, form} ) => {
  return (
    <header className="header">
      <h1> {title} </h1>
      <Button name={form? "Close": "Add"} color={form? "red" : "darkgreen"} onAdd={onAdd} />
    </header>
  )
}

export default Header