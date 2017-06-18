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

$(document).ready(function(){
    $("p").click(function(){
        alert("Hit sideBar");
        
        var request;
        
        request = $.ajax({            url:"https://script.google.com/macros/s/AKfycby2szvPK4qwpXsopiDVdXVKVI_qrHquu-Uw9EVp-EfDElWLXWc/exec",
            type:"get"
        });
        
        request.done(function(response, textStatus, jqXHR){
            console.log("ajax call worked");
            console.log(response);
            console.log(textStatus);
            console.log(jqXHR);
            displayViewerComments(response);
            
        })
        
        request.fail(function(jqXHR, textStatus, errorThrown){
            console.error("the following error occured: " + textStatus, errorThrown)
        })
        
        
    });
});

function displayViewerComments(response){
    console.log("Inside displayViewerComments")
        
}
