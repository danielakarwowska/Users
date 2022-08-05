import Table from './components/table'
import React,{ useState } from 'react'
import { useEffect } from 'react'


const App = () => {
    // const API_HOST = "http://localhost:3000"
    // const USERS_API_URL = `${API_HOST}/users`
    
     const [data,setData] = useState([])
    
    // const fetchUsers = () => {
    //     fetch(`${USERS_API_URL}`)
    //     .then(res => res.json())
    //     .then(json => setData(json))
    // }

    // useEffect(() => {
    //     fetchUsers()
    // },[])

    return(
        <div className="container">
        <h1>Simple Users Table</h1>
        <table>
            <thead>
            <tr>
                <th>Company</th>
                <th>User</th>

            </tr>
            </thead>
            <tbody>
                {
                    data.map((item) => (
                        <tr key={item.name}>
                            <td>{item.product_name}</td>
                            <td>{item.uri}</td>
                            <td>{item.mail}</td>
                            <td/>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
    )
}
export default App