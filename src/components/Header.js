import React from 'react';

const Header = (props) => {

  return (
    <div className="header">
      <div className="container inner-header">
        <ul>
          <li className="logo">Bookstore CMS</li>
          <li className="header-text">BOOKS</li>
          <li className="header-text active">CATEGORIES</li>
          <li className="user-profile clearfix">
            <div className="oval">
              <i class="fas fa-user-alt"></i>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
