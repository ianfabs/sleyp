let sleep = require('./index.js');

( async ()=>{
    console.log("Hello");
    await sleep(5000);
    console.log("World");
})();