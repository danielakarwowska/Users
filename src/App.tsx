import React, { useEffect, useState, useSyncExternalStore } from 'react'
import { json } from 'stream/consumers'

const App =  () => {

    const fetchUsersJson = async () => {
        let url = "http://localhost:3000/users"
        console.log(url)
        const res = await fetch(url)
        const users = await res.json()
        console.log(users)
        return users
    }
    fetchUsersJson()

    const fetchCompanyJson = async () => {
        let url = "http://localhost:3000/companies"
        const res = await fetch(url)
        const company = await res.json()
        console.log(company)
        return company
        }
        fetchCompanyJson()

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
                        <tr>
                        <td></td>
                        <td></td>
                        </tr>
                
                
            </tbody>
            <thead>
            </thead>
        </table>
    </div>
    )    
}
export default App