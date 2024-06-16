import { useEffect, useState } from 'react'
import { UserInterface } from '../types/User.interfase'
import { fetchData } from '../utils/api'

const UseEffectForm = () => {
  const [users, setUsers] = useState<UserInterface[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchDataAndHandleLoading = async () => {
      try {
        setIsLoading(true)
        const data = await fetchData()
        setUsers(data)
      } catch (error) {
        setError((error as Error).message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchDataAndHandleLoading()

    return () => {}
  }, [])

  return (
    <div>
      <h1>Render of Users list with axios</h1>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{'Error fetching data'}</h2>}
      <ul>
        {users.map((user: UserInterface) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default UseEffectForm
