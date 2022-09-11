import React from 'react'
import Table from './components/Table'




const App = () => {

    const fetchUsersJson = async () => {
        let url = "http://localhost:3000/users"
        const res = await fetch(url)
        const user = await res.json()
        return user
    }

    const fetchCompanyJson = async () => {
        let url = "http://localhost:3000/companies"
        const res = await fetch(url)
        const companies = await res.json()
        return companies
    }

    const printUsers = async () => {
        const user = await fetchUsersJson()
        const companies = await fetchCompanyJson()

        const addUserstoCompany = (user, companies) => {
            companies.map((item) => ({
              name: item.name,
              employees: user
                .filter((index) => index.uris.company === item.uri)
                .map((element) => element.name),
            }))}
            addUserstoCompany(user,companies)
        }
        printUsers()

    return (
        <Table />
    )
}
export default App
