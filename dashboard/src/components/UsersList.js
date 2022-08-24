import React from 'react';
import TopBar from './TopBar';
import Footer from './Footer';

function UsersList(props) {
    
    return (
        <div id="content-wrapper" className="d-flex flex-column">			
			<div id="content">		

        <TopBar/>             				
			</div>
			<h2>Este es el componente UsersList</h2>
      <Footer/>
		</div>
        
        
    );
  }


export default UsersList;