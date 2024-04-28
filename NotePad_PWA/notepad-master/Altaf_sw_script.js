if('serviceWorker'in navigator) {
    navigator.serviceWorker.register("./Altaf_sw1.js").then(function(registration){
     console.log("service worker succesfully register",
     registration.scope);
     
    }).catch(function(error){
     console.log("service worker registration failed",error);
 
    });
 }