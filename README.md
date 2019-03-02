# Sleyp

<small>Sorry, `sleep` was taken.</small>

A sleep implementation for that sweet async/await syntax 

Anyway, here is an example

```js
const sleep = require('sleyp');

(async () => {
    console.log("Hello,");
    await sleep(3000);
    console.log("World!");
})();
```