import './app.css';
import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import Footer from './components/footer';

import {contentDB} from './db/contentDB'
import Content from './components/content';
const media = [
		{id:0,title:'vk',
			url:'https://vk.com/artys74',
			img:{__html: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve"><path style="fill:#ffffff;" d="M47.761,24c0,13.121-10.639,23.76-23.76,23.76C10.878,47.76,0.239,37.121,0.239,24c0-13.123,10.639-23.76,23.762-23.76 C37.122,0.24,47.761,10.877,47.761,24 M35.259,28.999c-2.621-2.433-2.271-2.041,0.89-6.25c1.923-2.562,2.696-4.126,2.45-4.796 c-0.227-0.639-1.64-0.469-1.64-0.469l-4.71,0.029c0,0-0.351-0.048-0.609,0.106c-0.249,0.151-0.414,0.505-0.414,0.505 s-0.742,1.982-1.734,3.669c-2.094,3.559-2.935,3.747-3.277,3.524c-0.796-0.516-0.597-2.068-0.597-3.171 c0-3.449,0.522-4.887-1.02-5.259c-0.511-0.124-0.887-0.205-2.195-0.219c-1.678-0.016-3.101,0.007-3.904,0.398 c-0.536,0.263-0.949,0.847-0.697,0.88c0.31,0.041,1.016,0.192,1.388,0.699c0.484,0.656,0.464,2.131,0.464,2.131 s0.282,4.056-0.646,4.561c-0.632,0.347-1.503-0.36-3.37-3.588c-0.958-1.652-1.68-3.481-1.68-3.481s-0.14-0.344-0.392-0.527 c-0.299-0.222-0.722-0.298-0.722-0.298l-4.469,0.018c0,0-0.674-0.003-0.919,0.289c-0.219,0.259-0.018,0.752-0.018,0.752 s3.499,8.104,7.463,12.23c3.638,3.784,7.764,3.36,7.764,3.36h1.867c0,0,0.566,0.113,0.854-0.189 c0.265-0.288,0.256-0.646,0.256-0.646s-0.034-2.512,1.129-2.883c1.15-0.36,2.624,2.429,4.188,3.497 c1.182,0.812,2.079,0.633,2.079,0.633l4.181-0.056c0,0,2.186-0.136,1.149-1.858C38.281,32.451,37.763,31.321,35.259,28.999"></path></svg>'}},
		{id:1,title:'linkedin',
			url:'https://www.linkedin.com/in/%D1%81%D0%B5%D1%80%D0%B3%D0%B5%D0%B9-%D0%B0%D1%80%D1%82%D0%B8%D1%85%D0%BE%D0%B2%D0%B8%D1%87-14b40283',
			img:{__html: '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="512px" height="512px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"> <g> <path style="fill:#ffffff;" d="M256,0C114.609,0,0,114.609,0,256c0,141.391,114.609,256,256,256c141.391,0,256-114.609,256-256 C512,114.609,397.391,0,256,0z M256,472c-119.297,0-216-96.703-216-216S136.703,40,256,40s216,96.703,216,216S375.297,472,256,472z "/> <g> <g> <path style="fill:#ffffff;" d="M128.094,383.891h48v-192h-48V383.891z M320.094,191.891c-41.094,0.688-61.312,30.641-64,32v-32h-48v192h48v-112 c0-4.108,10.125-37,48-32c20.344,1.328,31.312,28.234,32,32v112l47.812,0.219V251.188 C382.219,232,372.625,192.578,320.094,191.891z M152.094,127.891c-13.25,0-24,10.734-24,24s10.75,24,24,24s24-10.734,24-24 S165.344,127.891,152.094,127.891z"/> </g> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>'}}
];
const navLinks = [
	{id:0,url:'#',label:'Frontend Cool Developer'},
	{id:1,url:'#',label:'Верстка сайтов'},
	{id:2,url:'#',label:'Контакты'}
	];
class App extends React.Component {
	render(){
		let dateNow = new Date();
		let monthNow = dateNow.toLocaleString('default', {month: 'long'});
		let yearNow = dateNow.getFullYear();
		return(
			<div className="app">
				<Header 
					links={media}
					navLinks= {navLinks}
				/>
				<Content 
					skillsDB={contentDB} 
				/>
				<Footer 
				month={monthNow}
				year={yearNow}
				media={media}
				/>
			</div>
			)
	}
}
ReactDOM.render(<App />,document.getElementById('app'));

