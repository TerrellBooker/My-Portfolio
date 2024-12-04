const toggleTheme = () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const projects = [
    { title: 'Project 1', description: 'A web app built with HTML, CSS, JavaScript.' },
    { title: 'Project 2', description: 'A React-based portfolio website.' },
    { title: 'Project 3', description: 'A dynamic to-do list app.' }
];

const projectGallery = document.querySelector('.project-gallery');
const projectSearchInput = document.getElementById('project-search');

function displayProjects(filteredProjects) {
    projectGallery.innerHTML = '';
    filteredProjects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project-item');
        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        projectGallery.appendChild(projectElement);
    });
}

projectSearchInput.addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredProjects = projects.filter(project => project.title.toLowerCase().includes(searchTerm));
    displayProjects(filteredProjects);
});

displayProjects(projects); 

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.querySelector('[name="name"]').value;
    const email = contactForm.querySelector('[name="email"]').value;
    const message = contactForm.querySelector('[name="message"]').value;

    if (name && email && message) {
        alert('Your message has been sent!');
    } else {
        alert('Please fill in all fields.');
    }
});

document.querySelector('#theme-toggle').addEventListener('click', toggleTheme);
