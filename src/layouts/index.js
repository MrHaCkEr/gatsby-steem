import React from 'react';
import Link from 'gatsby-link';
import styles from './index.module.css';

const AppLayout = ({ children }) => (
  <div className={styles.container}>
    <h1>
      <Link to="/">Welcome to my blog :)</Link>
    </h1>
    {children()}
  </div>
);

export default AppLayout;
