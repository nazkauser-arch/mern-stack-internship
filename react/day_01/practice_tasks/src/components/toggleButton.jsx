import { useState } from 'react'

function ToggleButton() {
  const [showDetails, setShowDetails] = useState(false)

  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }

  return (
    <div>
      <button onClick={toggleDetails}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>

      {showDetails && <p>This is the text.</p>}
    </div>
  )
}

export default ToggleButton