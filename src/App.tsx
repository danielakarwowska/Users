import Table from './components/table'
import React,{ useState } from 'react'
import { useEffect } from 'react'


const App =  () => {
    const API_HOST = "http://localhost:3000"
    const USERS_API_URL = `${API_HOST}/users`
    const COMPANY_API_URL = `${API_HOST}/company`

     const [data,setData] = useState([])
     const [company, setCompany] = useState([])
    
    const fetchUsers = () => {
        fetch(`${USERS_API_URL}`)
        .then(res =>  res.json())
        .then(json => setData(json))
    }

    const fetchCompany = () => {
        fetch(`${COMPANY_API_URL}`)
        .then(res => res.json())
        .then(json => setCompany(json))
    }

    useEffect(() => {
        fetchUsers()
    },[])
    console.log(fetchUsers)
    useEffect(()=>{
        fetchCompany()
    },[])
return(
    <Table/>
)
        
}
export default App