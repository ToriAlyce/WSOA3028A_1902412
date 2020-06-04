const menuItems = [
    { title: 'Home', link: 'torialyce.github.io/WSOA3028A_1902412'  }, 
    { title: 'Charlettes Blogs', link: 'torialyce.github.io/WSOA3028A_1902412/Character_Blogs/indext.html' },
    { title: 'Web Desiner Blogs', link: 'torialyce.github.io/WSOA3028A_1902412/Blogs/Designer_Posts_About.html' },
    { title: 'About', link: 'torialyce.github.io/WSOA3028A_1902412' },
];
const initialiseMenu = () => {
    const nav = document.querySelector('.menu');

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