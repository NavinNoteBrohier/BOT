// NAVBOT V1

var canvas = document.getElementById("Canvas");
var context = canvas.getContext("2d");
//var INPUT = document.getElementById("TextInput").value;
//object.addEventListener("click", index);



// CONSTANTS

var HELLO = "hello world!";
var SCREENWIDTH = 640 ;
var SCREENHEIGHT = 480 ;
var COMMAND = "empty freaking space"



// MISC FUNCTIONS

function RandNumGen (floor, ceil)
{
				//var Type = random(0,3); <- example so I don't forget how this works 
		return Math.floor ( (Math.random() * (ceil - floor ) ) + floor) ; 
}

//function randF ()

	


// RUN

	context.fillStyle = "#000000";
	context.fillRect(0,0,640,480);

	context.fillStyle = "#3ee61d";
	context.font = "18px Arial";
	context.fillText( HELLO , SCREENWIDTH/5, SCREENHEIGHT/2);
	

function RunCommand()
{
	COMMAND = document.getElementById("TextInput").value;
	
	
	switch(COMMAND)
	{
			case "!":
			ExecuteCommand();
			break;
			
			case "":
				
			break;
				
			case"!date":
			DATE();
			break;
			
			case"!name":
			
			break;
			
	}
	
	context.fillStyle = "#3ee61d";
	context.font = "18px Arial";
	context.fillText( COMMAND , SCREENWIDTH/5, SCREENHEIGHT/3);
};

function NameCommand()
{
	
}

function PrintCommand()
{	
	context.fillStyle = "#3ee61d";
	context.font = "18px Arial";
	context.fillText( "wrong" , SCREENWIDTH/5, SCREENHEIGHT/4);
}

function DATE()
{
	var DATE = document.getElementById("INSIDE").innerHTML = Date();
	context.fillStyle = "#3ee61d";
	context.font = "18px Arial";
	context.fillText(Date() , SCREENWIDTH/5, SCREENHEIGHT/5);
}