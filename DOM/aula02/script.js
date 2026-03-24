const colections = document.getElementsByClassName('item');

/*for(let i = 0; i <= obj.length; i++) {
    console.log(obj[i].textContent);
}*/

const lista = Array.from(colections);
lista.forEach((item, i) => {
    item.textContent = `Item ${i}`;
});
console.log(lista);

// const list = document.getElementsByClassName('list');
// console.log(list);


