const COMMANDS = [
  {
    command: "about",
    description: "About Me",
  },
  {
    command: "education",
    description: "My Education",
  },
  {
    command: "skills",
    description: "My Tech Skills",
  },
 /*  {
    command: "projects",
    description: "My Tech Projects",
  },
  {
    command: "contact",
    description: "Contact Me",
  }, */
  {
    command: "linktree",
    description: "Visit my linktree",
  },
  {
    command: "clear",
    description: "Clear terminal",
  },
];

const getProjects = async () => {
  const projects = await (await fetch("/api/projects")).json();
  const projectHTML =
    `<h3>My Projects (You can scroll)</h3>` +
    projects
      .map(
        (project) => `<div class="command">
        <a href="${project.link}" target="_blank"><b class="command">${
          project.name
        }</b></a> - <b>${project.stack.join(", ")}</b>
        <p class="meaning">${project.description}</p>
      </div>`
      )
      .join("");
  return projectHTML;
};

const getContacts = async () => {
  const contactMediums = await (await fetch("/api/contacts")).json();
  return contactMediums
    .map(
      (contact) => `<div style="display: flex; justify-content: space-between;">
      <p style="font-size: 15px">${contact.medium}</p>
      <a class="meaning" href="${contact.link}" target="_blank">${contact.username}</a>
    </div>`
    )
    .join("");
};

export const CONTENTS = {
  help: () =>
    COMMANDS.map(
      (command) => `<span style="display: flex; justify-content: space-between;">
        <p style="font-size: 15px">${command.command}</p>
        <p>${command.description}</p>
      </span>`
    ).join("") +
    `<br />
      <span class="command">Type one of the above to view. For eg. <span style="color: var(--secondary)">about</span></span>`,
  about: () => `<span>Hello and welcome! My name is Yajush,I'm ${getAge(
    "June 24, 2002"
  )} and a dedicated full-stack and frontend developer, I have a strong passion for Python.
    <br/><br/>
    I excel in creating captivating and user-friendly interfaces using HTML, CSS, and JavaScript. My expertise extends to backend technologies and frameworks, enabling me to develop robust and scalable applications.
    <br /><br />
    I am deeply interested in Python's versatility, from web development to data analysis and automation. With a commitment to continuous learning, I stay updated with the latest industry trends and best practices.My goal is to leverage my skills and knowledge to create innovative and efficient solutions that deliver exceptional user experiences.
    <br /><br />
    Thank you for taking the time to get to know me, and I look forward to working with you!
    <br /><br />
    Workspace
    <br />
    </span>
    <div style=" display: flex; flex-direction: row;">
      <img src="https://img.shields.io/badge/NVIDIA-GTX1060ti-76B900?style=for-the-badge&logo=nvidia&logoColor=white" />
      <img src="https://img.shields.io/badge/AMD-Ryzen_5_5600X-ED1C24?style=for-the-badge&logo=amd&logoColor=white" />
    </div>
  `,
  education:
    () => `<span>I am pursuing my Bachelor of Engineering (BE) degree in Computer Science with a specialization in Artificial Intelligence and Machine Learning at <a style="color:#5fdfff" href="https://www.cuchd.in/" target="_blank">Chandigarh University, Mohali</a></span>
    <br /><br />
    <span>I have completed my 12th from <a style="color:#5fdfff" href="https://theindianschool.in/" target="_blank">The Indian School, New Delhi</a></span>
    <br /><br />
    <span>I have completed my 10th from <a href="http://sssvjam.org/" target="_blank">Shree Satya Sai Vidyalaya, Jamnagar</a></span>
    `,
  skills: () => `
  <div style=" display: flex; flex-direction: row; gap: 0.2rem;">
      <img src="https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" />
      <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
      <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
      <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
      <img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white" />
      <img src="https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white" />
      <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" />
  </div>
  <div style=" padding-bottom: 4px;"></div>
  <div style=" display: flex; flex-direction: row; gap: 0.2rem;">
      <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
      <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
      <img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D" />
      <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
      <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" />
      <img src="https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white" />
  </div>
  <div style=" padding-bottom: 4px;"></div>
  <div style=" display: flex; flex-direction: row; gap: 0.2rem;">
      <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
      <img src="https://img.shields.io/badge/Adobe%20Photoshop-31A8FF?style=for-the-badge&logo=Adobe%20Photoshop&logoColor=black" />
      <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" />
      <img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" />
      <img src="https://img.shields.io/badge/iTerm2-000000?style=for-the-badge&logo=iterm2&logoColor=white" />
  </div>
  </br>
  `,
  projects: getProjects,
  contact: getContacts,
  error: (input) =>
    `<div class="help-command">sh: Unknown command: ${input}</div><div class="help-command">See \`help\` for info`,
  linktree: () => {
    window.open("https://linktr.ee/yajush", "_blank");
    return "";
  },
};

function getAge(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);

  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;

  return age;
}
