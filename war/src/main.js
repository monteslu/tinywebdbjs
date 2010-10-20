exports.urls = [
                ['/', require('./actions')]
            ]; 

exports.app =  require("ringo/webapp").handleRequest;

	
