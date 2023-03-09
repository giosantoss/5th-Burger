import { React, useState } from 'react'

function AddItems( {onAddItem} ) {
  const [numItems, setNumItems] = useState(0)

  function addItems() {
    setNumItems(numItems + 1)
    onAddItem(numItems + 1) // chama a função onAddItem para atualizar a quantidade no componente do nav
  }

  return (
    <div onClick={addItems} className="add"></div>
  )
}

export default AddItems
