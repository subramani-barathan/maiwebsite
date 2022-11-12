import "./userslist.css";
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'user', headerName: 'User name', width:  150 },
  { field: 'email', headerName: 'Email', width:  150 },
  { field: 'status', headerName: 'Status', width:  150 },
  { field: 'transaction', headerName: 'Transaction', width:  150 },
];

const rows = [
  { id: 1, user: 'Snow', email: 'Jon@gmail.com', status: "Active", transaction: 35 },
  { id: 2, user: 'Lannister', email: 'Jon@gmail.com', status: "Active", transaction: 42 },
  { id: 3, user: 'Lannister', email: 'Jon@gmail.com', status: "Active", transaction: 45 },
  { id: 4, user: 'Stark', email: 'Jon@gmail.com', status: "Active", transaction: 16 },
  { id: 5, user: 'Targaryen', email: 'Jon@gmail.com', status: "Active", transaction: 38 },
  { id: 6, user: 'Melisandre', email: 'Jon@gmail.com', status: "Active", transaction: 150 },
  { id: 7, user: 'Clifford', email: 'Jon@gmail.com', status: "Active", transaction: 44 },
  { id: 8, user: 'Frances', email: 'Jon@gmail.com', status: "Active", transaction: 36 },
  { id: 9, user: 'Roxie', email: 'Jon@gmail.com', status: "Active", transaction: 65 },
];



function UsersList() {
  return (
    <div style={{ height: 400, width: '100%' }} className="usersList">
      <h3 className="panel-heading">Users List</h3>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default UsersList