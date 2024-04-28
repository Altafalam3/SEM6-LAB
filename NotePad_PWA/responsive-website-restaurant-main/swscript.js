if('serviceWorker in navigator') {
    navigator.serviceWorker.register('sw1.js')
    .then((swreg) => {
        console.log("service worker successfully registered", swreg);
    })
    .catch((err) => {
        console.log("service worker not registered", err);
    })
}