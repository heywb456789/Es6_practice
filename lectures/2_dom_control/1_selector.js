/* 1) get 메서드 */
let title = document.getElementById("title");
console.log(title);
title.textContent="운동2";

let items = document.getElementsByClassName("item");
console.log(items);
console.log(items[0]);

let liList = document.getElementsByTagName("li");
console.log(liList);

/* 2)Dom 요소 쿼리 */ 

let h2 = document.querySelector("#title");
console.log('h2 : ', h2);

// let item = document.querySelector('.item');
let item = document.querySelectorAll('.item');
console.log('query : ' , item)