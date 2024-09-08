import Content from "./Content";

const Tech = () => {
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
      name: "Tailwind CSS",
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
  ];

  return (
    <div id='tech' className='scroll-mt-[5.75rem] bg-gray-800 text-white p-6'>
      <Content>
        <h1 className='text-3xl pb-4'>Technologies I have used</h1>
        <div className='flex flex-wrap justify-center'>
          {techs.map((tech) => {
            return (
              <div className='p-2'>
                {/* https://devicon.dev/ */}
                <a href={tech.url} target='blank' className='flex flex-col items-center'>
                  <img
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.filename}/${tech.filename}-original.svg`}
                    height='48'
                    width='48'
                  />
                  <label htmlFor={tech.filename}>{tech.name}</label>
                </a>
              </div>
            );
          })}
        </div>
      </Content>
    </div>
  );
};

export default Tech;
