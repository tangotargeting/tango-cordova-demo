#!/usr/bin/env node
'use strict';
var jsonfile = require('jsonfile');
var configValues = 'config_values.json';
var fs = require('fs');

var fileOptions = {encoding : "utf-8"};

// utility methods
function fileExists(path) {
  try  {
    return fs.statSync(path).isFile();
  }
  catch (e) {
    return false;
  }
}

function directoryExists(path) {
  try  {
    return fs.statSync(path).isDirectory();
  }
  catch (e) {
    return false;
  }
}


jsonfile.readFile(configValues, function(err, config) {
	if(err) throw err;

	jsonfile.writeFileSync('www/js/config_values.json', config, {spaces: 2});

	if(!directoryExists('platforms/android')) return;
	
	// transform config values to android resources
	var builder = require('xmlbuilder');
	var xmlBuilder = builder.create('resources');
	  
	Object.keys(config).forEach(function(key){
		var value = config[key];

		if(typeof value === 'string'){
			xmlBuilder.ele('string', {'name': key}, value);
		}else if(typeof value === 'boolean'){
			xmlBuilder.ele('bool', {'name': key}, value);
		}else{
			// integer
		}

	});

	var androidConfigXml = xmlBuilder.end({pretty: true});

	fs.writeFileSync('platforms/android/res/values/config_values.xml', androidConfigXml, fileOptions);

	console.log(androidConfigXml);

	// throw Error("Breakpoint");

});