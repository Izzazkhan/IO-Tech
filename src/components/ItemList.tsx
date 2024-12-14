import React, {useState} from "react"
import { Item } from "../types/item"
import MyModal from './DialogModel'

interface ItemListProps {
  items: Item[]
  onEdit: (item: Item) => void
  onDelete: (id: number) => void
}

const ItemList: React.FC<ItemListProps> = ({ items, onEdit, onDelete }) => {

  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const handleEdit = (item: Item) => {
    if(item.id > 100) {
      openModal()
    } else {
      onEdit(item)
    }
  }

  return (
    <div className="space-y-4 mt-4">
      <MyModal closeModal={closeModal} isOpen={isOpen} />
      {items.map((item) => (
        <div key={item.id} className="p-4 border rounded-md">
          <h2 className="text-lg font-bold">{item.title.charAt(0).toUpperCase() + item.title.slice(1)}</h2>
          <p className="text-gray-600">{item.body.charAt(0).toUpperCase() + item.body.slice(1)}</p>
          <div className="mt-2 space-x-2">
            <button
              onClick={() => handleEdit(item)}
              className="px-4 py-1 text-white bg-green-500 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(item.id)}
              className="px-3 py-1 text-white bg-red-500 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ItemList
