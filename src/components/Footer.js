/*
Footer component.
*/
import React, { Component } from 'react';
import styles from '../stylesheets/Footer.css';

class Footer extends Component{
  render(){
      return(
        <footer className={styles.footer}>
					<div className="container footer-content">
            <h6>Pacific Lutheran University -- Department of Computer Science</h6>
					</div>
				</footer>
      );
  }
}
export default Footer;
