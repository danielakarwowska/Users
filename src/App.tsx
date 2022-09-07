import React from 'react'

const App = () => {

    let data = [
        {
            user: "user1",
            email: "aaa@user1.pl",
            uri: "/users/1",
            company: "Company 2",
            uris: { company: "/companies/2" },
        },
        {
            user: "user10",
            email: "aaa@user10.pl",
            uri: "/users/10",
            company: "Company 2",
            uris: { company: "/companies/2" },
        },
        {
            user: "user3",
            email: "aaa@user3.pl",
            uri: "/users/3",
            company: "Company 2",
            uris: { company: "/companies/2" },
        },
        {
            user: "user2",
            email: "aaa@user2.pl",
            uri: "/users/2",
            company: "Company 0",
            uris: { company: "/companies/0" },
        },
        {
            user: "user4",
            email: "aaa@user4.pl",
            uri: "/users/4",
            company: "Company 1",
            uris: { company: "/companies/1" },
        },
        {
            user: "user5",
            email: "aaa@user5.pl",
            uri: "/users/5",
            company: "Company 0",
            uris: { company: "/companies/0" },
        },
    ];
    const companies = [
        { name: "Company 0", uri: "/companies/0" },
        { name: "Company 1", uri: "/companies/1" },
        { name: "Company 2", uri: "/companies/2" },
      ];

    const employeers = data.map((item) => {
        return item.user
    })

    const company = companies.map((item) => {
        return item.name
    })

    const employeersAndCompany = company.reduce((accumulator, element, index) => {
        return { ...accumulator, [element]: employeers[index] }
    }, {})

    console.log(employeersAndCompany)

    const results = []

    data.forEach((employee, index) => {
        results.push(
            <tr key={index}>
                <td>{employee.user}</td>
            </tr>
        )
    })
    const sumOfCompanies = []
    companies.forEach((compan, index) => {
        sumOfCompanies.push(
            <tr key={index}>
            <td>{compan.name}</td>
        </tr>
        )
    })

    return (
        <div className="container">
            <h1>Simple Users Table</h1>
            <table>
                <thead>
                    <tr>
                        <th>company</th>
                        <th>User</th>
                    </tr>
                </thead> 
                <tbody>
                        <tr>
                            <td>{sumOfCompanies}</td>
                            <td>{results}</td>
                        </tr>
                </tbody>
                <thead>
                </thead>
            </table>
        </div>
    )
}
export default App