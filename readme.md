## nocamel.js

### Introduction
This was a project that started because there's no choice in language grammar for the end user. The intent of this project is no offer non-camelCase aliases for all Javascript and Node.js object methods and prototype methods. I love Javascript and Node.js, but hate camelCase, and with this library, I am happy again. This is a work in progress.

### Installation
```
npm install nocamel
```

### Include
```js
require('nocamel')
```

### Use
```js
// works!
[1,2,3].for_each(num => {
    console.log(num)
})

is_nan(NaN) // true
```
