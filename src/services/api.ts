import axios from "axios"
import { Item } from "../types/item"

const API_URL = "https://jsonplaceholder.typicode.com/posts"

export const fetchItems = async () => {
  try {
    const response = await fetch(`${API_URL}?_limit=10`)
    const data = await response.json()
    return data
  } catch (error) {
    return error
  }
}

export const createItem = async (data: Omit<Item, "id">) => {
  try {
    const response = await axios.post(API_URL, data)
    const res = await response.data
    return res
  } catch (error) {
    return error
  }
}

export const deleteItem = async (id: number) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`)
    const res = await response.data
    return res
  } catch (error) {
    return error
  }
}

export const updateItem = async (item: Item): Promise<Item> => {
  const response = await axios.put(`${API_URL}/${item.id}`, item)
  return response.data
}
