## nocamel.js

### Introduction
This was a project that started because there's no choice in language grammar for the end user. The intent of this project is to offer non-camelCase aliases for all Javascript and Node.js object methods, instance methods, prototype methods, object properties, and globals. I love Javascript and Node.js, but hate camelCase, and with this library, I am happy again. This is a work in progress.

### Installation
```
npm install nocamel
```

### Include (preferably line 1 of your script or the entry point to your application)
```js
require('nocamel');
```

### Use
```js
// prototype alises
[1,2,3].for_each(num => {
    console.log(num);
});

// object method aliases
Array.is_array([]); // true

// function aliases!
is_nan(NaN); // true
```