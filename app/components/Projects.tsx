import Content from "./Content";
import Code from "/media/icons/code.png";
import Web from "/media/icons/world-wide-web.png";

const Projects = () => {
  return (
    <div id='projects' className='scroll-mt-[5rem] bg-gray-800 text-white p-6'>
      <Content>
        <h1 className='text-3xl pb-4'>Projects</h1>
        <p className='pb-2'>
          A selection of projects, both from self-driven and from my bootcamp.
        </p>
        <ul className='flex flex-wrap justify-center gap-2'>
          <li className='p-2'>
            <a href='' target='blank' className='flex flex-col items-center'>
              <img src='https://picsum.photos/800/450' alt='' />
              <h2 className='text-2xl'>Project</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
                praesentium officia iusto dolorem ipsum quisquam expedita minima fugiat
                excepturi veniam laborum, labore debitis rerum a soluta optio. Dicta deserunt
                exercitationem iusto perferendis nam consequatur doloribus quas sunt quos at
                voluptas rem dolores ut cumque, impedit, sint minus eaque architecto rerum?
              </p>
              <div className='flex gap-2'>
                <img
                  src={Code}
                  /* style={{
                    filter: "drop-shadow(0px 1000px 0 white)",
                    transform: "translateY(-1000px)",
                  }} */
                />
                <img
                  src={Web}
                  /* style={{
                    filter: "drop-shadow(0px 1000px 0 white)",
                    transform: "translateY(-1000px)",
                  }} */
                />
              </div>
            </a>
          </li>
          <li className='p-2'>
            <a href='' target='blank' className='flex flex-col items-center'>
              <img src='https://picsum.photos/800/450' alt='' />
              <h2 className='text-2xl'>Project</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
                praesentium officia iusto dolorem ipsum quisquam expedita minima fugiat
                excepturi veniam laborum, labore debitis rerum a soluta optio. Dicta deserunt
                exercitationem iusto perferendis nam consequatur doloribus quas sunt quos at
                voluptas rem dolores ut cumque, impedit, sint minus eaque architecto rerum?
              </p>
              <div className='flex gap-2'>
                <img
                  src={Code}
                  /* style={{
                    filter: "drop-shadow(0px 1000px 0 white)",
                    transform: "translateY(-1000px)",
                  }} */
                />
                <img
                  src={Web}
                  /* style={{
                    filter: "drop-shadow(0px 1000px 0 white)",
                    transform: "translateY(-1000px)",
                  }} */
                />
              </div>
            </a>
          </li>
        </ul>
      </Content>
    </div>
  );
};

export default Projects;
