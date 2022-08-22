// Write your code here!
let main = document.getElementById('main');
main.remove();
console.log(main);

let newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = "Joash is the champion";