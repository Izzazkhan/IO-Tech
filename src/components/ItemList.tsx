import React, {useState} from "react"
import { Item } from "../types/item"
import MyModal from './DialogModel'
import { Suspense } from 'react'

interface ItemListProps {
  items: Item[]
  onEdit: (item: Item) => void
  onDelete: (id: number) => void
  inputRef: React.RefObject<HTMLInputElement> 
}

const ItemList: React.FC<ItemListProps> = ({ items, onEdit, onDelete, inputRef }) => {

  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)

  const handleEdit = (item: Item) => {
    if(item.id > 100) {
      openModal()
    } else {
      onEdit(item)
      if(inputRef.current) {
        inputRef.current.focus();
      }
    }
  }

  return (
    <div className="space-y-4 mt-4">
      <MyModal closeModal={closeModal} isOpen={isOpen} />
      {items.map((item) => (
        <Suspense key={item.id} fallback={<div>Loading...</div>}>
          <div className="p-4 border rounded-md">
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
        </Suspense>
      ))}
    </div>
  )
}

export default ItemList
