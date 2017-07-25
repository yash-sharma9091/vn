'use strict';

const path 	= require('path'),
multer      = require('multer'),
_ 			= require('lodash'),
fs 			= require('fs');

/* Require All the controllers */
let ctrls = {};

fs.readdirSync(path.resolve('./controllers/front')).forEach(file => {
	let name = file.substr(0,file.indexOf('.'));
	ctrls[name] = require(path.resolve(`./controllers/front/${name}`));
});


module.exports = {
  	routes: [
	  	{ url: '/register', 	method: ctrls.registerController.register, 	type: 'POST' },
	  	{ url: '/login', 		method: ctrls.loginController.login, 		type: 'POST' },
	  	
	  	{ url: '/add_hotels', 	method: ctrls.hotelController.addHotel, 	type: 'POST' },
	  	{ url: '/update_hotel', method: ctrls.hotelController.updateHotel, 	type: 'POST' },
	  	{ url: '/delete_hotel', method: ctrls.hotelController.deleteHotel, 	type: 'POST' },
	  	{ url: '/get_hotels', 	method: ctrls.hotelController.listHotel, 	type: 'POST' },
	  	
	  	{ url: '/create_jot', 	method: ctrls.jotController.addJot, 		type: 'POST' },
	  	{ url: '/update_jot', 	method: ctrls.jotController.updateJot, 		type: 'POST' },
	  	{ url: '/delete_jot', 	method: ctrls.jotController.deleteJot, 		type: 'POST' },
	  	{ url: '/get_jot', 		method: ctrls.jotController.listJot, 		type: 'POST' },
	  	
	  	{ url: '/add_member', 		method: ctrls.memberController.addMember, 		type: 'POST' }
	  	
	]
};