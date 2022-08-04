import Table from './components/table'
import React,{ useState } from 'react'
import { useEffect } from 'react'

const API_HOST = "http://localhost:3000"
const USERS_API_URL = `${API_HOST}/users`

const App = () => {

    const [data,setData] = useState([])
    
    const fetchUsers = () => {
        fetch (`${USERS_API_URL}`)
        .then(res => res.json())
        .then(json => setData(json))
    }

    useEffect(() => {
        fetchUsers()
    },[])

    return(
        <>
        <Table/>
        {
            data.map ((item) => {
                <tr key={item.name}>
                    <td>{item.uri}</td>
                    <td>{item.email}</td>

                </tr>
            })
        }
        </>
    )
}
export default App