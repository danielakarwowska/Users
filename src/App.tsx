import React from 'react'
import Table from './components/Table'

const App = (props) => {

    const fetchUsersJson = async () => {
        let url = "http://localhost:3000/users"
        const res = await fetch(url)
        const users = await res.json()
        return users
    }

    const fetchCompanyJson = async () => {
        let url = "http://localhost:3000/companies"
        const res = await fetch(url)
        const companies = await res.json()
        return companies
    }

    const print = async () => {
        const users = await fetchUsersJson()
        const companies = await fetchCompanyJson()
        console.log(users)
        console.log(companies)
        const companiesAndUsers = companies.reduce((accumulator, element, index) => {
            return { ...accumulator, [element]: users[index] }
        }, {})
    }
    print()

    return (
        <Table title={props.companies} value={props.users}/>
    )
}
export default App


    // const addUserToCompany = (users, companies) => {
    //     companies.map((item) => ({
    //         name: item.name,
    //         users: users
    //             .filter((items) => items.uris.company === item.uri)
    //             .map((element) => element.name),
    //             return (users, companies)
    //     }))
    //     console.log(addUserToCompany)
    // }
