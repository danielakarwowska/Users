import React from 'react'
import App from '../App'

const Table = () => {
    return(
    <div className="container">
        <h1>Simple Table With Users Data</h1>
        <table>
            <thead>
                <tr>
                    <th>Users</th>
                    <th>Company</th>
                </tr>
            </thead>
        </table>
    </div>
    )
}
export default Table