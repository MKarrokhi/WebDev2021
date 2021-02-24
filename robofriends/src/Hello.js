import React, { Component } from 'react';
import './Hello.css';

const Hello = (props) =>{
	return ( 
		<div className='f1 tc'>
			<h1> Mustafa is the BEST </h1>
			<p> {props.greeting} is the BEST too </p>
		</div>
	)
}


export default Hello;