import './App.css';
import React, { useState } from 'react';	
import axios from 'axios';
import AddNewBooks from './components/AddNewBooks';
import AllBooks from './components/AllBooks';


  



function App() {

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
  const handleAddBook = (newBook) => {	
    const newId = data.length + 1; // Assign a new ID	
    const newData = [...data, { ...newBook, id: newId }];	
    setData(newData);	
  };

  return (
    <div className="App">
      <>
      <div className="add">
      <AddNewBooks handleAddBook={handleAddBook} />
      </div>
      <AllBooks data={data}/>
      </>
    </div>
  );
}

export default App;
