import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button} from '@mui/material';
import '../App.css';

const AddNewBooks = ({ handleAddBook }) => {	
    const initialBookData = {	
      name: '',	
      subject: '',	
      writer: '',	
      class: '',	
      published: '',	
      creatingDate: '',	
    };
    
const [bookData, setBookData] = useState(initialBookData);
const [status, setStatus] = useState(false);

const handleSubmit = (event) => {
    event.preventDefault();	
    handleAddBook(bookData);	
    setBookData(initialBookData);
    console.log("All Books", initialBookData)
    setStatus(true);

 // Collect all input data into a string
 const inputDataString = `Book Name: ${bookData.name}\n`
 + `Subject: ${bookData.subject}\n`
 + `Writer: ${bookData.writer}\n`
 + `Class: ${bookData.class}\n`
 + `Published: ${bookData.published}\n`
 + `Creating Date: ${bookData.creatingDate}`;

// Display the input data in an alert
alert(inputDataString);
console.log(inputDataString);

//     axios.post('/api/books', bookData)
//     .then(response => {
//         console.log('Book added:', response.data);
//         // Reset input fields to initial state after successful submission
//         setBookData(initialBookData);
//       })
//       .catch(error => console.error('Error adding Book:', error));

if (status) {
    console.log("True")
    return <AddNewBooks />;
  }
  };

  return (
    <form onSubmit={handleSubmit}>
        <h1>Add New Books</h1>
      <TextField
        label="Book Name"
        style={{display:'block' , marginBottom:'10px'}}
        value={bookData.name}
        onChange={(e) => setBookData({ ...bookData, name: e.target.value }, console.log("Book Name:",e.target.value))}
      />
      <TextField
        label="Subject"
        style={{display:'block' , marginBottom:'10px'}}
        value={bookData.subject}
        onChange={(e) => setBookData({ ...bookData, subject: e.target.value }, console.log("Subject Name:",e.target.value))}
      />
      <TextField
        label="Writer"
        style={{display:'block' , marginBottom:'10px'}}
        value={bookData.writer}
        onChange={(e) => setBookData({ ...bookData, writer: e.target.value }, console.log("Writer Name:",e.target.value))}
      />
      <TextField
        label="Class"
        style={{display:'block' , marginBottom:'10px'}}
        value={bookData.class}
        onChange={(e) => setBookData({ ...bookData, class: e.target.value }, console.log("Class Name:",e.target.value))}
      />
      <TextField
        label="Published"
        style={{display:'block' , marginBottom:'10px'}}
        value={bookData.published}
        onChange={(e) => setBookData({ ...bookData, published: e.target.value }, console.log("Published Year:",e.target.value))}
      />
      <TextField
        label="Creating Date"
        style={{display:'block' , marginBottom:'10px'}}
        value={bookData.creatingDate}
        onChange={(e) => setBookData({ ...bookData, creatingDate: e.target.value }, console.log("Creating Date:",e.target.value))}
      />
     <Button type="submit" variant="contained" color="primary" style={{ margin: '20px' }}>
  Add Book
</Button>

    </form>
  );
};

export default AddNewBooks;
