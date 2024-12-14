import { useEffect, useState } from "react"
import { fetchItems, createItem, updateItem, deleteItem } from "../services/api"
import { Item } from "../types/item"
import ItemForm from "../components/ItemForm"
import ItemList from "../components/ItemList"
import SortFilterBar from "../components/SortFilterBar"

function HomePage() {
  const [items, setItems] = useState<Item[]>([])
  const [editingItem, setEditingItem] = useState<Item | null>(null)
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [filteredData, setFilteredData] = useState<Item[]>([])
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  
  useEffect(() => {
    async function fetchCall()  {
      const res = await fetchItems()
      if(res) {
        const data = res.map((item: Item) => ({
          id: item.id,
          title: item.title,
          body: item.body
        }))
        if(sortOrder === 'asc') {
          data.sort((a: any, b: any) => a.id - b.id)
        } else {
          data.sort((a: any, b: any) => b.id - a.id)
        }
        setItems(data)
      } else {
        console.log('Error')
      }
    }
    fetchCall()
  }, [sortOrder])

  const handleAddOrUpdate = async (data: Omit<Item, "id">) => {
    if (editingItem) {
      const updatedItem = { ...editingItem, ...data }
      updateItem(updatedItem).then((updated) => {
        setItems((prev) =>
          prev.map((item) => (item.id === updated.id ? updated : item))
        )
        setEditingItem(null)
      })
    } else {
      const newItem = await createItem(data)
      setItems((prev) => [newItem, ...prev])
    }
  }

  const handleDelete = async (id: number) => {
    const res = await deleteItem(id)
    if(res) {
      setEditingItem(null)
      return (
        setItems((prev) => prev.filter((item) => item.id !== id))
      )
    }
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value
    setSearchTerm(searchTerm)
    const filteredItems = items.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
    setFilteredData(filteredItems)
  }

  return (
    <div className="max-w-4xl mx-auto mt-12">
      <br /><br />
      <ItemForm
        onSubmit={handleAddOrUpdate}
        initialData={editingItem ? { title: editingItem.title, body: editingItem.body } : undefined}
      />
      <SortFilterBar searchTerm={searchTerm} handleSearch={handleSearch} sortOrder={sortOrder} setSortOrder={setSortOrder} />
      <ItemList items={searchTerm != '' ? filteredData : items} onEdit={setEditingItem} onDelete={handleDelete} />
    </div>
  )
}

export default HomePage