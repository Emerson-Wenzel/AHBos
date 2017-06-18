function santori(){
console.log("hello world2");
//var RTM = require('satori-sdk-js');

endpoint = "wss://open-data.api.satori.com";
appkey = "4c375e6532B427FB16f210bAeB825C09";
role = "gun-rights";
roleSecretKey = "7ACC4C8c95C1eE903d167EA10bEe7700";
channel = "gun-rights";

roleSecretProvider = RTM.roleSecretAuthProvider(role, roleSecretKey);

var rtm = new RTM(endpoint, appkey, {
  authProvider: roleSecretProvider,
});
var subscription = rtm.subscribe(channel, RTM.SubscriptionMode.SIMPLE, {history: {age: 86400}});
/* publish a message after being subscribed to sync on subscription */
subscription.on('enter-subscribed', function () {
  rtm.publish(channel, "Hello, World2!", function (pdu) {
      console.log("Publish ack:", pdu);
  });
});
sendMessage(channel, subscription, "heres a message");
    /*
document.getElementById('message').addEventListener('keypress', function(event){
    var isEnterPressed = (event.keyCode || event.charCode) === 13;
    if(isEnterPressed && rtm.isConnected()){
        rtm.publish(channel, event.target.value, function(pdu){
            if('rtm/publish/error' === pdu.action){
                console.log("failed to publish");
            }
        });
    }
});
*/
/* set callback for PDU with specific action */
subscription.on('rtm/subscription/data', function (pdu) {
  pdu.body.messages.forEach(function (msg) {
    console.log('Got message:', msg);
  });
  // close client after receving one message
  //rtm.stop();
});

  rtm.start();    
}

function sendMessage(channel, subscription, message){
    console.log(channel);
    roleSecretProvider = RTM.roleSecretAuthProvider(role, roleSecretKey);
    var newrtm = new RTM(endpoint, appkey, {
        authProvider: roleSecretProvider,
    });
    var subscription = newrtm.subscribe(channel, RTM.SubscriptionMode.SIMPLE, {history: {age: 86400}});
    if(newrtm.isConnected()){
        newrtm.publish(channel, message);
    }
    else{
        console.log("We're fucked");
    }
}
