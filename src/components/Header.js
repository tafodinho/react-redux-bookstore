import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <div className="header">
    <div className="container inner-header">
      <ul>
        <li className="logo">Bookstore CMS</li>
        <li className="header-text">BOOKS</li>
        <li className="header-text active">CATEGORIES</li>
        <li className="user-profile clearfix">
          <div className="oval">
            <FontAwesomeIcon icon={faUserAlt} className="user-icon" />
          </div>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
