//global variables
endpoint = "wss://open-data.api.satori.com";
appkey = "89A9EF0DC955ca63dce7aAF0C4dEf8fC";
role = "angelhackbos";
roleSecretKey = "b0F727FBFfbd8EAf92B6CBd5AEBd2CDF";
channel = "angelhackbos";

chatrole = "chatdata";
chatroleSecretKey = "Fc5eb65fa13117725fAb5dD593138AE6";
chatchannel ="chatdata";
nummessages = 0;

function satoripull(){

roleSecretProvider = RTM.roleSecretAuthProvider(role, roleSecretKey);

var rtm = new RTM(endpoint, appkey, {
  authProvider: roleSecretProvider,
});
var subscription = rtm.subscribe(channel, RTM.SubscriptionMode.SIMPLE, {history: {age: 86400}});

subscription.on('rtm/subscription/data', function (pdu) {
  pdu.body.messages.forEach(function (msg) {
      nummessages++;
      addData(msg);
    console.log('Got message:', msg);
  });
});
    rtm.start(); 
    return nummessages;
}

function satoripush(message){
//var RTM = require('satori-sdk-js');
roleSecretProvider = RTM.roleSecretAuthProvider(role, roleSecretKey);

var rtm = new RTM(endpoint, appkey, {
  authProvider: roleSecretProvider,
});
var subscription = rtm.subscribe(channel, RTM.SubscriptionMode.SIMPLE, {history: {age: 86400}});
/* publish a message after being subscribed to sync on subscription */

subscription.on('enter-subscribed', function () {
  rtm.publish(channel, message, function (pdu) {
      console.log("Publish ack:", pdu);
  });
});
  rtm.start();    
}

function satorichatpush(message){
//var RTM = require('satori-sdk-js');
roleSecretProvider = RTM.roleSecretAuthProvider(chatrole, chatroleSecretKey);

var rtm = new RTM(endpoint, appkey, {
  authProvider: roleSecretProvider,
});
var subscription = rtm.subscribe(channel, RTM.SubscriptionMode.SIMPLE, {history: {age: 86400}});
/* publish a message after being subscribed to sync on subscription */

subscription.on('enter-subscribed', function () {
  rtm.publish(channel, message, function (pdu) {
      console.log("Publish ack:", pdu);
      console.log(message.debatepoint);
  });
});
  rtm.start();    
}
