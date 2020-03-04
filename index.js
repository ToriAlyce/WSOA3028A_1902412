const button = document.querySelector('button');
const article = document.querySelector('article');

button.addEventListener('click', function(){
    const el = document.createElement('em'); //makes it italasised
    el.innerText = 'something';
    document.body.prepend(el);
})