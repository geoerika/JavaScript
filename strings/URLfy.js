//replace spaces in a string with %20

const URLfy_simple = (str) => {
  return str.replace(' ', '%20');
};

console.log(URLfy_simple('Ana Mary'));

const myArgs = process.argv.slice(2);
let str = myArgs[0].trim();
const URLfy = (str, length) => {
  return str.replace(' ', '%20');
}