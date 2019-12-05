const js = require("hello-wasm");
js.then(js => {
  const num1 = js.is_odd(3);
  const num2 = js.is_odd(4);
  console.log(num1);
  console.log(num2);
});
