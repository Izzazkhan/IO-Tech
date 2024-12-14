import React from 'react'

interface Props {
  searchTerm: string
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void
  sortOrder: 'asc' | 'desc'
  setSortOrder: React.Dispatch<React.SetStateAction<'asc' | 'desc'>>
}

const SortFilterBar: React.FC<Props> = ({ searchTerm, handleSearch, sortOrder, setSortOrder }) => (
  <div>
    <div className="flex justify-end items-center mb-4">
      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
        className="p-2 border rounded"
      >
        <option value="asc">Sort Ascending</option>
        <option value="desc">Sort Descending</option>
      </select>
    </div>
    <div className="mt-4">
      <input className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
      value={searchTerm} onChange={handleSearch} id="grid-first-name" type="text" placeholder="Search Item here" />
    </div>
  </div>
)

export default SortFilterBar