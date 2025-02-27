import Content from "./Content";

const techs = [
  {
    name: "HTML",
    filename: "html5",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    filename: "css3",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    filename: "javascript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "React",
    filename: "react",
    url: "https://reactjs.org/",
  },
  {
    name: "Redux",
    filename: "redux",
    url: "https://redux.js.org/",
  },
  {
    name: "Node.js",
    filename: "nodejs",
    url: "https://nodejs.org/",
  },
  {
    name: "Express",
    filename: "express",
    url: "https://expressjs.com/",
  },
  {
    name: "PostgreSQL",
    filename: "postgresql",
    url: "https://www.postgresql.org/",
  },
  {
    name: "Tailwind ",
    filename: "tailwindcss",
    url: "https://tailwindcss.com/",
  },
  {
    name: "PHP",
    filename: "php",
    url: "https://www.php.net/",
  },
  {
    name: "WordPress",
    filename: "wordpress",
    url: "https://wordpress.org/",
  },
  {
    name: "React Native",
    filename: "react",
    url: "https://reactnative.dev/",
  },
  {
    name: "Git",
    filename: "git",
    url: "https://git-scm.com/",
  },
  {
    name: "Postman",
    filename: "postman",
    url: "https://www.postman.com/",
  },
  {
    name: "SASS",
    filename: "sass",
    url: "https://sass-lang.com/",
  },
];

const Tech = () => {
  return (
    <div id="tech" className="scroll-mt-[5rem] text-gray-800 bg-white p-6">
      <Content>
        <h1 className="text-3xl pb-4">Technologies</h1>
        <p className="pb-2">
          This list is not exhaustive, but features most of the technologies
          I've used, either in a professional or educational setting.
        </p>
        <ul className="flex flex-wrap">
          {techs.map((tech, index) => (
            <li className="p-2 flex-3-col md:flex-7-col" key={index}>
              <a
                href={tech.url}
                target="_blank"
                className="flex flex-col items-center"
              >
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.filename}/${tech.filename}-original.svg`}
                  height="48"
                  width="48"
                  alt={tech.name}
                  className="hover:drop-shadow-[2px_2px_20px_theme(colors.blue.500)] transition-all duration-[300ms]"
                  loading="lazy"
                />
                <div>{tech.name}</div>
              </a>
            </li>
          ))}
        </ul>
      </Content>
    </div>
  );
};

export default Tech;
