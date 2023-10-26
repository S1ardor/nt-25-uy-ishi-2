const data = [

    {
        name: 'Muhammadrasul',
        firstName: 'Nurmukhamedov',
        age: 23
    },
    {
        name: 'Sardor',
        firstName: 'Quvondiqov',
        age: 17
    },
    {
        name: 'Malika',
        firstName: 'Ochileva',
        age: 40
    },
    {
        name: 'Anvar',
        firstName: 'Tojiboyev',
        age: 18
    },
    {
        name: 'Axmat',
        firstName: 'Yoldashev',
        age: 26
    },
];

const form = document.querySelector('form'),
    searchinput = document.querySelector('.input'),
    inputs = document.querySelector('.inputs'),
    divContent = document.querySelector('.content');

const stordNames = JSON.parse(localStorage.getItem('info')) || [];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = searchinput.value.trim()
    const students = {
        name: name
    };
    if (name !== "") {
        stordNames.unshift(students);
        localStorage.setItem('info', JSON.stringify(stordNames))
    }

    form.reset();
    reanderList();
});

function reanderList() {
    divContent.innerHTML = '';

    stordNames.forEach((name, index) => {
        const wrapper = document.createElement('div')
        wrapper.classList.add('wrapper')

        const h4 = document.createElement('h4');
        h4.textContent = name.name;

        const button = document.createElement('button')
        button.textContent = 'delete';

        wrapper.appendChild(h4);
        wrapper.appendChild(button)


        button.addEventListener('click', () => {
            stordNames.splice(index, 1);
            localStorage.setItem('info', JSON.stringify(stordNames));
            reanderList()


        })


        divContent.appendChild(wrapper)
    });
}
reanderList()