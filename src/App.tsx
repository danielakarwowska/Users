import React, { useEffect, useState } from 'react'

const App =  () => {

    const fetchUsersJson = async () => {
        let url = "http://localhost:8000/users"
        console.log(url)
        const res = await fetch(url)
        const users = await res.json()
        console.log(users)
        return users
    }
    fetchUsersJson()

    const fetchCompanyJson = async () => {
        let url = "http://localhost:8000/companies"
        const res = await fetch(url)
        const company = await res.json()
        console.log(company)
        return company
        }

     
        const all = async () => {
        const users = await fetchUsersJson()
        const company = await fetchCompanyJson()
    }
    all()

    fetch("http://localhost:8000/").then(async response => {
        try {
         const users = await response.json()
         console.log('response user?', users)
       } catch(error) {
         console.log('Error happened here!')
         console.error(error)
       }
      })

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