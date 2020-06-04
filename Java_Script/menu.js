const menuItems = [
    { title: 'Home', link: '/' },
    { title: 'Charlettes Blogs', link: '/Character_Blogs/indext.html' },
    { title: 'Web Desiner Blogs', link: '/Blogs/Designer_Posts_About.html' },
    { title: 'About', link: '/' },
];
const initialiseMenu = () => {
    const nav = document.querySelector('nav');

    const ul = document.createElement('ul');

    for(let item of menuItems) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.innerText = item.title;
        a.href = item.link;
        li.appendChild(a);
        ul.appendChild(li);
    }
    nav.appendChild(ul);
};
document.addEventListener('DOMContentLoaded', () => initialiseMenu());