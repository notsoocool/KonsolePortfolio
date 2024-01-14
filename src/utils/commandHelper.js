const COMMANDS = [
  {
    command: "about",
    description: "About Me",
  },
 /*  {
    command: "education",
    description: "My Education",
  }, */
  {
    command: "skills",
    description: "My Tech Skills",
  },
  {
    command: "projects",
    description: "My Tech Projects",
  }, 
  {
    command: "contact",
    description: "Contact Me",
  },
  {
    command: "linktree",
    description: "Visit my linktree",
  },
  {
    command:
      // 'clear <span style="color: var(--primary)">(Ctrl+L shortcut)</span>',
      "clear",
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
        <a " target="_blank"><b class="command">${
          project.name
        }</b></a> - <b>${project.stack.join(", ")}</b>
        <p class="meaning">${project.description}</p>
        <br />
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
      <p style="font-size: 12px">${contact.medium}</p>
      <a class="meaning" href="${contact.link}" target="_blank">${contact.username}</a>
    </div>`
    )
    .join("");
};

export const CONTENTS = {
  help: () =>
    COMMANDS.map(
      (command) => `<div style="display: flex; justify-content: space-between;">
        <p style="font-size: 12px">${command.command}</p>
        <p>${command.description}</p>
      </div>`
    ).join("") +
    `<br />
      <div class="command">Type one of the above to view. For eg. <span style="color: var(--secondary)">about</span></div>`
      ,
      Help: () =>
    COMMANDS.map(
      (command) => `<div style="display: flex; justify-content: space-between;">
        <p style="font-size: 12px">${command.command}</p>
        <p>${command.description}</p>
      </div>`
    ).join("") +
    `<br />
      <div class="command">Type one of the above to view. For eg. <span style="color: var(--secondary)">about</span></div>`
      ,
  about: () => `Hey there, I\'m Yajush, a ${getAge(
    "June 24, 2002"
  )}-year-old web wizard! Crafting digital wonders, blending code with creativity to redefine what's possible.Let\'s turn dreams into pixels and make the web a cooler place!
    <br/><br/>
    Passionate web and machine learning developer with expertise in modern technologies. Specializing in both frontend and backend development, I create user-centric web applications emphasizing performance. Committed to delivering efficient and visually appealing solutions.
    <br/><br/>
    Additionally, proficient in machine learning algorithms and data analysis, I contribute to innovative project development. Experienced in dynamic ML environments, I provide impactful algorithmic solutions, continuously advancing my expertise for project excellence.
    <br /><br />
    Workspace
    <br />
    <div style=" display: flex; flex-direction: row;">
      <img src="https://img.shields.io/badge/NVIDIA-GTX1060ti-76B900?style=for-the-badge&logo=nvidia&logoColor=white" />
      <img src="https://img.shields.io/badge/AMD-Ryzen_5_5600X-ED1C24?style=for-the-badge&logo=amd&logoColor=white" />
    </div>
  `,
  About: () => `Hey there, I\'m Yajush, a ${getAge(
    "June 24, 2002"
  )}-year-old web wizard! Crafting digital wonders, blending code with creativity to redefine what's possible.Let\'s turn dreams into pixels and make the web a cooler place!
    <br/><br/>
    Passionate web and machine learning developer with expertise in modern technologies. Specializing in both frontend and backend development, I create user-centric web applications emphasizing performance. Committed to delivering efficient and visually appealing solutions.
    <br/><br/>
    Additionally, proficient in machine learning algorithms and data analysis, I contribute to innovative project development. Experienced in dynamic ML environments, I provide impactful algorithmic solutions, continuously advancing my expertise for project excellence.
    <br /><br />
    Workspace
    <br />
    <div style=" display: flex; flex-direction: row;">
      <img src="https://img.shields.io/badge/NVIDIA-GTX1060ti-76B900?style=for-the-badge&logo=nvidia&logoColor=white" />
      <img src="https://img.shields.io/badge/AMD-Ryzen_5_5600X-ED1C24?style=for-the-badge&logo=amd&logoColor=white" />
    </div>
  `,
 /*  education:
    () => `I am a Freshman student at <a href="https://www.sheridancollege.ca/" target="_blank">Sheridan College, Oakville</a>
    <br />
    `, */
  skills: () => `
  languages
  <div style=" display: flex; flex-direction: row; flex-wrap: wrap; gap: 0.2rem;">
      <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" />
      <img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white" />
      <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" />
      <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
      <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" />
      <img src="https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" />
      <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
      <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" />
      <img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" />
      <img src="https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white" />
  </div>
      <br />
  frameworks
  <div style=" display: flex; flex-direction: row; gap: 0.2rem;">
      <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
      <img src="https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white" />
      <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" />
  </div>
  <br />
  design
  <div style=" padding: 0px 0px 10px; display: flex; flex-direction: row; gap: 0.2rem;">
      <img src="https://img.shields.io/badge/Adobe%20Photoshop-31A8FF?style=for-the-badge&logo=Adobe%20Photoshop&logoColor=black" />
      <img src="https://img.shields.io/badge/Canva-%2300C4CC.svg?&style=for-the-badge&logo=Canva&logoColor=white" />
      <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" />
      <img src="https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue" />
  </div>

  `,
  Skills: () => `
  languages
  <div style=" display: flex; flex-direction: row; flex-wrap: wrap; gap: 0.2rem;">
      <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" />
      <img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white" />
      <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" />
      <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
      <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" />
      <img src="https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" />
      <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
      <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" />
      <img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" />
      <img src="https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white" />
  </div>
      <br />
  frameworks
  <div style=" display: flex; flex-direction: row; gap: 0.2rem;">
      <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
      <img src="https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white" />
      <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" />
  </div>
  <br />
  design
  <div style=" padding: 0px 0px 10px; display: flex; flex-direction: row; gap: 0.2rem;">
      <img src="https://img.shields.io/badge/Adobe%20Photoshop-31A8FF?style=for-the-badge&logo=Adobe%20Photoshop&logoColor=black" />
      <img src="https://img.shields.io/badge/Canva-%2300C4CC.svg?&style=for-the-badge&logo=Canva&logoColor=white" />
      <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" />
      <img src="https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue" />
  </div>

  `,
  projects: getProjects,
  Projects: getProjects,
  Contact: getContacts,
  contact: getContacts,
  error: (input) =>
    `<div class="help-command">sh: Unknown command: ${input}</div><div class="help-command">See \`help\` for info`,
  Linktree: () => {
    window.open("https://linktr.ee/yajush", "_blank");
    return "";
  },
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
