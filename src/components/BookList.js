import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { books } = useContext(BookContext);
  return (
    <div
      className='book-list'
      style={{ color: theme.syntax, backgroundColor: theme.bg }}
    >
      <ul>
        {books.map((book) => {
          return <li style={{ backgroundColor: theme.ui }}>{book.title}</li>;
        })}
      </ul>
    </div>
  );
};
export default BookList;
