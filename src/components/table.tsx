import React from 'react'
import App from '../App'

const Table = () => {
    const users = [
        { name: "User 0", uri: "/users/0", email: "user0@company343.com", company: "343"},
        { name: "User 1", uri: "/users/1", email: "user1@company518.com",company: "518"}] 
    const company = [
        { company: "343" },
        { company: "518" }
        ]
    return(
        <div className="container">
        <h1>Simple Users Table</h1>
        <table>
            <thead>
            <tr>
                <th>User</th>
                <th>company</th>
            </tr>
            </thead>
            <tbody>
                {
                    users.map((item,key) => (
                        <tr key={key}>
                            <td>{item.name}</td>
                            <td>{item.company}</td>
                        </tr>
                    ))
                }
            </tbody>
            <thead>
            </thead>
        </table>
    </div>
    )
}
export default Table