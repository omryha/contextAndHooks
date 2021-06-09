import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: 'Name of the Wind', id: 1 },
    { title: 'Harry Potter', id: 2 },
    { title: 'Goosebumps', id: 3 },
    { title: 'Tomb Raider', id: 4 },
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
