//document.getElementById("addButton").onclick = addData;
//document.getElementById("sendComment").onclick = sendComment;

console.log("start of index.js");

function addData(){
    $("#test").append("<p>Please Show up</p>")
    console.log("Button worked");
    
}


$(document).ready(function(){
    console.log("Test1");

    $("#commentForm").submit(function(event){
        console.log("Test2");
        var comment = document.getElementById("comment").value;
        console.log("the comment is " + comment);
        setTimeout(test, 1000);
    });
});
function test(){
    console.log("test");
}

    //$("#buyForm").submit(function(event){


function sendComment(){
    alert("Test");
    
    alert($("#commentForm").serialize());
    
    var comment = document.getElementById("comment");
    alert("hello");
    alert("the comment is " + comment);

    
}






/*
var body = document.getElementsByTagName('body')[0],
    newdiv = document.createElement('div'); //Create a div
    newdiv.id = 'newid';
    body.appendChild(newdiv);
    body.insertBefore(newdiv,body.firstChild)
*/