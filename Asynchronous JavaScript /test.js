function printHelloFactory() {
  const value = "hello";
  return function() {
    console.log(value);
  };
}
const printHello = printHelloFactory();
setTimeout(printHello, 1000);
printHello();
console.log("Me first!");
