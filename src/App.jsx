import { useState, useEffect } from 'react'
import UserCard from './components/UserCard'
import './style.css'

function App() {


  const [users, setUsers] = useState([])

  const [loading, setLoading] = useState(true)

  const [error, setError] = useState(null)


  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')

      .then(response => {

        if (!response.ok) {
          throw new Error('Failed to fetch users')
        }

        return response.json()
      })

      .then(data => {

        setUsers(data)
        setLoading(false)

      })

      .catch(error => {

        setError(error.message)
        setLoading(false)

      })

  }, [])


  if (loading) {
    return (
      <div className="app">
        <h1>Loading users...</h1>
      </div>
    )
  }

  if (error) {
    return (
      <div className="app">
        <h1>Error</h1>
        <p>{error}</p>
      </div>
    )
  }

  return (
  <div className="app">

    <div className="hero">
      <h1>Welcome To The World Of Tech</h1>

      <p>
        Hope everyone is doing well and having a great start to the day.
        Let's have a productive day ahead, stay safe, and continue supporting
        one another. 💪
      </p>
    </div>

    <h1>Workers</h1>

    <div className="user-list">

      {users.map(user => (
        <UserCard
          key={user.id}
          user={user}
        />
      ))}

    </div>

  </div>
)
}

export default App