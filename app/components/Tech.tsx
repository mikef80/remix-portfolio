import Content from "./Content";

const Tech = () => {
  const techs = [
    {
      name: "HTML",
      filename: "html5",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      uuid: "cc14cc11-fdec-4d54-aea3-9c2f5910ab59",
    },
    {
      name: "CSS",
      filename: "css3",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      uuid: "114fcf18-958f-4106-9404-10b86cf5d0e0",
    },
    {
      name: "JavaScript",
      filename: "javascript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      uuid: "eb5d253c-48b3-4d9d-9a9d-c280645dfc41",
    },
    {
      name: "React",
      filename: "react",
      url: "https://reactjs.org/",
      uuid: "c9594d27-1e4e-481a-b1de-fb35d8997853",
    },
    {
      name: "Redux",
      filename: "redux",
      url: "https://redux.js.org/",
      uuid: "0155c63c-6f50-4217-8d4a-1e80fc14f93c",
    },
    {
      name: "Node.js",
      filename: "nodejs",
      url: "https://nodejs.org/",
      uuid: "e1e8637a-0ff8-4c4f-aed4-6c0c3ffa36b7",
    },
    {
      name: "Express",
      filename: "express",
      url: "https://expressjs.com/",
      uuid: "0a238e20-7e9f-4653-8d3c-cd19e074a75b",
    },
    {
      name: "PostgreSQL",
      filename: "postgresql",
      url: "https://www.postgresql.org/",
      uuid: "dd5b7c96-ff54-4244-b35f-f44ff359e7d1",
    },
    {
      name: "Tailwind CSS",
      filename: "tailwindcss",
      url: "https://tailwindcss.com/",
      uuid: "2203e932-3a6f-4da6-bdcb-3744f7af863b",
    },
    {
      name: "PHP",
      filename: "php",
      url: "https://www.php.net/",
      uuid: "feb5e262-77c1-4d3e-806c-877b7872b34b",
    },
    {
      name: "WordPress",
      filename: "wordpress",
      url: "https://wordpress.org/",
      uuid: "50636fa1-7f53-406b-8fb8-e4e15d89fbfa",
    },
    {
      name: "React Native",
      filename: "react",
      url: "https://reactnative.dev/",
      uuid: "983cc057-3abe-421f-8128-ca1da6162d9c",
    },
    {
      name: "Git",
      filename: "git",
      url: "https://git-scm.com/",
      uuid: "71b8eb31-5fe2-4b27-8dcf-888945b580f1",
    },
    {
      name: "Postman",
      filename: "postman",
      url: "https://www.postman.com/",
      uuid: "d1814109-fbf1-4a58-9d95-17c1825f6b19",
    },
  ];
  

  return (
    <div id='tech' className='scroll-mt-[5rem] bg-gray-800 text-white p-6'>
      <Content>
        <h1 className='text-3xl pb-4'>Technologies</h1>
        <p className="pb-2">This list is not exhaustive, but features most of the technologies I've used, either in a professional or educational setting.</p>
        <ul className='flex flex-wrap justify-center gap-2'>
          {techs.map((tech) => {
            return (
              <li className='p-2' key={tech.uuid}>
                {/* https://devicon.dev/ */}
                <a href={tech.url} target='blank' className='flex flex-col items-center'>
                  <img
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.filename}/${tech.filename}-original.svg`}
                    height='48'
                    width='48'
                  />
                  <label htmlFor={tech.filename}>{tech.name}</label>
                </a>
              </li>
            );
          })}
        </ul>
      </Content>
    </div>
  );
};

export default Tech;
