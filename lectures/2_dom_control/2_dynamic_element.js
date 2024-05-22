// let li = document.createElement('li');
// let ul = document.querySelector('ul');
// li.textContent = '딥스';
// ul.appendChild(li);
let front_button = document.getElementById('prev');
let back_button = document.getElementById('back');
let remove_button = document.getElementById('target-remove');
let input = document.querySelector('input');

let remove_li = document.querySelector('.remove-btn');

back_button.addEventListener('click', function () {
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  li.textContent = input.value;

  let button = document.createElement('button');
  button.textContent = 'X';
  // button.setAttribute('class', 'remove-button');
  button.classList.add('remove-btn');
  button.addEventListener('click', function (event) {
    console.log(event.target);
    console.log(event.target.parentNode);
    event.target.parentNode.remove();
  });

  li.appendChild(button);
  ul.appendChild(li);

  input.value = '';
  input.focus();
});

front_button.addEventListener('click', function () {
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  let targetSelector = document.querySelector('li#target');
  li.textContent = input.value;
  //(추가할 요소 , 추가 위치 )
  ul.insertBefore(li, targetSelector);
});

remove_button.addEventListener('click', function () {
  let target = document.querySelector('li#target');
  target.remove();
});

// remove_li.addEventListener('click', function (event) {
//   console.log(event.target);
//   console.log(event.target.parentNode);
//   event.target.parentNode.remove();
// });

remove_li.addEventListener('click', removeParentNode);

function removeParentNode(event) {
  console.log(event.target);
  console.log(event.target.parentNode);
  event.target.parentNode.remove();
}
