var jsonLoader = {
	load : function(filePath, callback){
		var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
	    xobj.open('GET', filePath, true);
	    xobj.onreadystatechange = function () {
	          if (xobj.readyState == 4 && xobj.status == "200") {
	            callback(eval("(" + xobj.responseText + ")")); // use eval to transform to js object
	          }
	    };
	    xobj.send(null);  
	}
}