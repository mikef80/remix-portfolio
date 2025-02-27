import Content from "./Content";

const Socials = () => {
  const socials: {
    name: string;
    filename: string;
    url: string;
  }[] = [
    {
      name: "GitHub",
      filename: "github",
      url: "https://github.com/mikef80",
    },
    {
      name: "LinkedIn",
      filename: "linkedin",
      url: "https://www.linkedin.com/in/mpfrancis/",
    },
  ];

  return (
    <div
      id="socials"
      className="scroll-mt-[5rem] tex-gray-800 bg-white pb-6 md:pb-4"
    >
      <div className="flex justify-center">
        <Content extraClasses="">
          <ul className="flex  gap-2">
            {socials.map((social, index) => (
              <li className="p-2" key={index}>
                <a
                  href={social.url}
                  target="_blank"
                  className="flex flex-col items-center"
                >
                  <img
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${social.filename}/${social.filename}-original.svg`}
                    height="32"
                    width="32"
                    alt={social.name}
                    /* className="hover:drop-shadow-[2px_2px_20px_theme(colors.black)] transition-all duration-[300ms]" */
                    loading="lazy"
                  />
                </a>
              </li>
            ))}
          </ul>
        </Content>
      </div>
    </div>
  );
};

export default Socials;
