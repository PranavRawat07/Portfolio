// Skills Data
const skills = [
    " Python", "HTML", "CSS", "JavaScript", "SQL", "Artificial Intelligence", "Machine Learning",
    "OOP Conepts", "Data Structures & Algorithms(Basics)"
];

// Inject skills into HTML
const skillContainer = document.querySelector(".skill-grid");
skills.forEach(skill => {
    const div = document.createElement("div");
    div.className = "skill";
    div.textContent = skill;
    skillContainer.appendChild(div);
});

// Education Data
const education = [
    {
        degree: "Bachelor of Technology (B.Tech)",
        branch: "Computer Science & Engineering",
        year: "2022 - 2026",
        college: "Shivalik College of Engineering, Dehradun"
    },
    {
        degree: "Class 12th",
        branch: "Science Stream",
        year: "2022",
        college: "CST, Mussoorie"
    },
    {
        degree: "Class 10th",
        branch: "General",
        year: "2020",
        college: "CJM, Hampton Court, Mussoorie"
    }
];

const eduList = document.getElementById("education-list");

education.forEach(edu => {
    const card = document.createElement("div");
    card.className = "edu-card";
    card.innerHTML = `
    <h3>${edu.degree}</h3>
    <p>${edu.branch}</p>
    <p>${edu.college}</p>
    <p>${edu.year}</p>
  `;
    eduList.appendChild(card);
});

// Projects Data
const projects = [
    {
        title: "Spam Email Detection",
        desc: "Machine learning model to classify emails as spam or ham using NLP.",
        link: "#"
    },
    {
        title: "Weather Dashboard",
        desc: "Real-time weather dashboard using OpenWeatherMap API and charts.",
        link: "https://weather-dashboard-theta-ashen.vercel.app"
    },
    {
        title: "Portfolio Website",
        desc: "Interactive animated portfolio built with animations using HTML, CSS & JavaScript.",
        link: "#"
    }
];

const projectGrid = document.getElementById("projects-grid");

projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.desc}</p>
    <a href="${project.link}" class="project-link" target="_blank">View Project</a>
  `;
    projectGrid.appendChild(card);
});

// Footer Year
document.getElementById("year").textContent = new Date().getFullYear();
