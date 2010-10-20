var {Response} = require('ringo/webapp/response');
var Request = require("ringo/webapp/request").Request;

var AITag = require("./aitag").AITag;

exports.index = function index(req) {
    
    return {
        status: 200,
        headers: {"Content-Type": "text/html"},
        body: ['<html><body>This is a simple AppengineJS implementation of TinyWebDB for App Inventor.</body></html>']
    };
};

exports.getvalue = function (req) {
	var retVal = ["VALUE"];
	var params = new Request(req).params;
	if(!params.tag)
	{
		params.tag = "blah";
	}
	
	retVal.push(params.tag);
	
	var tag = AITag.getByKeyName(params.tag);
	if(!tag){
		retVal.push("undefined");
	}else{
		retVal.push(tag.value);
	}
	
	return sendJSON(retVal);
};



exports.storeavalue = function (req) {
	var retVal = ["STORED"];
	var params = new Request(req).params;
	
	if(!params.tag)
	{
		params.tag = "foo";
	}
	
	if(!params.value)
	{
		params.value = "bar";
	}
	
	// The database will just overwrite the record if it already exists.
	var tag = new AITag({keyName: params.tag, value: params.value});
	tag.put();
	
	retVal.push(params.tag);
	retVal.push(params.value);
	
	
	return sendJSON(retVal);
};

// send the response in the format and mime-type TinyWebDB is expecting
function sendJSON(obj){
	return {
        status: 200,
        headers: {"Content-Type": "application/jsonrequest"},
        body: [JSON.stringify(obj)]
    };
}
