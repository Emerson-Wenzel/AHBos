nummessages = 0;
function addData(msg){
    var idnum = msg.messagenum;
    idnum = JSON.stringify(idnum);
    if(msg.user === 1)
        $("#test").append("<div class='person person-1'>"+msg.message+"<span class='tooltiptext'><p id='sideBar" + idnum + "'>Comments on <br>this Point</p><img class='link' src='goodLink.png'><p id='score'>$54.32</p></span></div><br>")
    else
       $("#test").append("<div class='person person-2'>"+msg.message+"<span class='tooltiptext'><p id='sideBar" + idnum + "'>Comments on <br>this Point</p><img class='link' src='goodLink.png'><p id='score'>$22.34</p></span></div><br>")
}


$(document).ready(function(){
    nummessages = satoripull();
    $("#commentForm").submit(function(event){
        var comment = document.getElementById("comment").value;
        setTimeout(test, 1000);
    });
});
function test(){
    console.log("test");
}

function sendComment(){
    var comment = document.getElementById("comment").value;
    var jsondata = {message: comment, user: 2, messagenum: nummessages};
    console.log(nummessages);
    satoripush(jsondata);
    document.getElementById("commentForm").reset();
}
function sendViewerComment(i){
    var comment = document.getElementById("viewercomment").value;
    var jsondata = {message: comment, debatepoint: i};
    satorichatpush(jsondata);
}

$(document).on('click', 'p', function(){
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
            

function displayViewerComments(response){
    console.log("Inside displayViewerComments")
        
}

function displayViewerComments(response){
    console.log("Inside displayViewerComments")
    $("#tempComment").remove();
    
    for (var i =0; i < response.length; i++){
        console.log(response[i]);
        oneResponse = response[i];
        $("#commentDiv").append("<p id='tempComment'>Name: " + response[i].name + "</p><p id='tempComment'>Comment: " + response[i].comment + "</p><p id='tempComment'>Points: " + response[i].score + "</p><br>");        
        
        
    }
}





