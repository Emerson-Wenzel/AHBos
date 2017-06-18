//document.getElementById("addButton").onclick = addData;
//document.getElementById("sendComment").onclick = sendComment;

console.log("start of index.js");

function addData(msg){
    if(msg.user === 1)
        $("#test").append("<div class='person person-1'>"+msg.message+"<span class='tooltiptext'><p id='sideBar'>Side Bar</p><img class='link' src='goodLink.png'><p id='score'>300</p></span></div><br>")
    else
       $("#test").append("<div class='person person-2'>"+msg.message+"<span class='tooltiptext'><p id='sideBar'>Side Bar</p><img class='link' src='goodLink.png'><p id='score'>300</p></span></div><br>")
}


$(document).ready(function(){
    satoripull();
    console.log("Test1");

    $("#commentForm").submit(function(event){
        var comment = document.getElementById("comment").value;

        console.log("the comment is " + comment);
        setTimeout(test, 1000);
    });
});
function test(){
    console.log("test");
}

function sendComment(){
    var comment = document.getElementById("comment").value;
    var jsondata = {message: comment, user: 1};
    satoripush(jsondata);
}
function sendViewerComment(i){
    var comment = document.getElementById("viewercomment").value;
    var jsondata = {message: comment, debatepoint: i};
    satorichatpush(jsondata);
}





/*
var body = document.getElementsByTagName('body')[0],
    newdiv = document.createElement('div'); //Create a div
    newdiv.id = 'newid';
    body.appendChild(newdiv);
    body.insertBefore(newdiv,body.firstChild)
*/
