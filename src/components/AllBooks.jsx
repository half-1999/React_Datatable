import React, { useState } from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, IconButton, Dialog } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddNewBooks from './AddNewBooks';

const TableRowComponent = ({ columns, row, handleUpdate, handleDelete }) => {
  return (
    <TableRow key={row.id}>
      {columns.map(column => (
        <TableCell key={column.field}>
          {column.field === 'actions' 
          ? column.render(row)
          : row[column.field]}
        </TableCell>
      ))}
    </TableRow>
  );
};

const AllBooks = () => {
  const [data, setData] = useState([
    { id: 1, bookName: 'S Chand' , subject:"Physics", writer:"Aman Sharma", class:"Xth", published:2019, creatingDate:"10/10/2010" },
    { id: 2, bookName: 'S Chand' , subject:"Physics", writer:"Aman Sharma", class:"Xth", published:2019, creatingDate:"10/10/2010" },
    { id: 3, bookName: 'S Chand' , subject:"Physics", writer:"Aman Sharma", class:"Xth", published:2019, creatingDate:"10/10/2010" },
    { id: 4, bookName: 'S Chand' , subject:"Physics", writer:"Aman Sharma", class:"Xth", published:2019, creatingDate:"10/10/2010" },
    { id: 5, bookName: 'S Chand' , subject:"Physics", writer:"Aman Sharma", class:"Xth", published:2019, creatingDate:"10/10/2010" },
    { id: 6, bookName: 'S Chand' , subject:"Physics", writer:"Aman Sharma", class:"Xth", published:2019, creatingDate:"10/10/2010" },
    { id: 7, bookName: 'S Chand' , subject:"Physics", writer:"Aman Sharma", class:"Xth", published:2019, creatingDate:"10/10/2010" },
    { id: 8, bookName: 'S Chand' , subject:"Physics", writer:"Aman Sharma", class:"Xth", published:2019, creatingDate:"10/10/2010" },
    
    // Add more data entries
  ]);

  const [selectedBook, setSelectedBook] = useState(null);
  const [addNewClicked, setAddNewClicked] = useState(false); 
  
  const handleDelete = (id) => {
    setData(prevData => prevData.filter(item => item.id !== id));
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  const handleUpdate = (id) => {
    console.log("Selected Book Id for Update:", id);
    const selectedBook = data.find(item => item.id === id);
    setSelectedBook(selectedBook);
  };
  
  const handleSaveChanges = () => {
    console.log("Updated Book:", selectedBook);
    const updatedData = data.map(item =>
      item.id === selectedBook.id ? selectedBook : item
    );
    // console.log("Updated Data:", updatedData);
    setData(updatedData);
    setSelectedBook(null); // Close the modal
    console.log("Updated Data:", updatedData);
  };

  // Add Book
  const handleAddBook = (newBook) => {	
    const newId = data.length + 1; // Assign a new ID	
    const newData = [...data, { ...newBook, id: newId }];	
    setData(newData);	
  };

  const columns = [
    { label: 'Id', field: 'id' },
    { label: 'Book Name', field: 'bookName' },
    { label: 'Subject', field: 'subject' },
    { label: 'Writer', field: 'writer' },
    { label: 'Class', field: 'class' },
    { label: 'Published', field: 'published' },
    { label: 'Creating Date', field: 'creatingDate' },
    { label: 'Edit', field: 'actions', render: (row) => (
    <IconButton color="primary" onClick={() => handleUpdate(row.id)} style={{ margin: '10px' }}>
     <EditIcon />
    </IconButton>
    ) },
    { label: 'Delete', field: 'action', render: (row) => (
      <IconButton color="secondary" onClick={() => handleDelete(row.id)}>
        <DeleteIcon />
      </IconButton>
    ) },
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map(column => (
              <TableCell key={column.field}>{column.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRowComponent
              key={row.id} // Important: Provide a unique key for each row
              columns={columns}
              row={row}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
            />
          ))}
        </TableBody>
      </Table>



      {/* Modal for editing */}
      <Dialog open={selectedBook !== null} onClose={handleCloseModal}>
        {selectedBook && (
          <div>
            <h2>Edit Book</h2>
            <form>
              {columns
                .filter(column => column.field !== 'actions') // Exclude actions column
                .map(column => (
                  <div key={column.field}>
                    <label>{column.label}</label>
                    <input
                      type="text"
                      value={selectedBook[column.field]}
                      onChange={(e) =>
                        setSelectedBook((prevBook) => ({
                          ...prevBook,
                          [column.field]: e.target.value,
                        }))
                      }
                    />
                  </div>
                ))}
              <button
                type="button"
                onClick={handleSaveChanges}
              >
                Save Changes
              </button>
            </form>
          </div>
        )}
      </Dialog>



    </TableContainer>
  );
};

export default AllBooks;
