import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {
  static contextType = ThemeContext;

  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;

    return (
      <div
        className='book-list'
        style={{ color: theme.syntax, backgroundColor: theme.bg }}
      >
        <ul>
          <li style={{ backgroundColor: theme.ui }}>the way of kings</li>
          <li style={{ backgroundColor: theme.ui }}>the name of the wind</li>
          <li style={{ backgroundColor: theme.ui }}>the final empire</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
