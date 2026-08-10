import {useState} from 'react'

function SearchInput() {
  const [search, setSearch] = useState('')

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />

      <p>Current search: {search}</p>
    </div>
  )
}

export default SearchInput