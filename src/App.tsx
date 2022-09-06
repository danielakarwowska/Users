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



    return (
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
                    {data.map((item) => (
                        <tr key={item.uri}>
                            <td>{item.uri}</td>
                            <td>{item.uris.company}</td>
                        </tr>
                    ))}
                </tbody>
                <thead>
                </thead>
            </table>
        </div>
    )
}
export default App

    // const fetchUsersJson = async () => {
    //     let url = "http://localhost:3000/users"
    //     const res = await fetch(url)
    //     const users = await res.json()
    //     // console.log(users)
    //     return users
    // }
    // fetchUsersJson()

    // const fetchCompanyJson = async () => {
    //     let url = "http://localhost:3000/companies"
    //     const res = await fetch(url)
    //     const company = await res.json()
    //     // console.log(company)
    //     return company
    // }
    // fetchCompanyJson()

    // const [users, setUsers] = useState (fetchUsersJson)

    // const all = async () => {
    //     const users = await fetchUsersJson()
    //     console.log(users)
    // }
    // all()
    // useEffect(() => {
    //     const oneUser = async () =>{
    //         try{
    //             const users = await fetchUsersJson()
    //             setUsers(users)
    //         }catch(error){}
    //     }
    //     oneUser()
    //     console.log(oneUser)
    //     console.log(users)
    //     console.log(setUsers)
    // }, [])