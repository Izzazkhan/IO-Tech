import React, { useState, useEffect } from "react";
import { Item } from "../types/item";

interface ItemFormProps {
  onSubmit: (data: Omit<Item, "id">) => void
  initialData?: Omit<Item, "id">
}

const ItemForm: React.FC<ItemFormProps> = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState({title: '', body: ''})
  useEffect(() => {
    if (initialData) {
      setFormData(initialData)
    }
  }, [initialData])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ ...formData })
    setFormData({title: '', body: ''})
  }

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Title
          </label>
          <input className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
          required value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} id="grid-first-name" type="text" placeholder="Write title here" />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Description
          </label>
          <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
          required value={formData.body} onChange={(e) => setFormData({...formData, body: e.target.value})}id="grid-last-name" type="text" placeholder="Write description here" />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <button className="px-4 py-2 text-white bg-blue-500 rounded">
            {initialData ? "Update Item" : "Add Item"}
          </button>
        </div>
      </div>
    </form>
  )
}

export default ItemForm