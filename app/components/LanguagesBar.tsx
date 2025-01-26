export type Languages = {
  [key: string]: number; // Allows dynamic keys for language names
  total: number;
};

const LanguagesBar = ({ languages }: { languages: Languages }) => {
  enum Colours {
    JavaScript = "bg-yellow-400",
    TypeScript = "bg-blue-500",
    HTML = "bg-red-500",
    CSS = "bg-purple-600",
    SCSS = "bg-pink-400",
    Java = "bg-orange-400",
    Default = "bg-blue-400",
  }

  const keys = Object.keys(languages);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="mb-2 text-sm italic">
        {keys.map((language, i) => {
          if (language === "total") return null;

          return (
            <span key={i}>
              {language}
              {i < keys.length - 2 ? " | " : ""}
            </span>
          );
        })}
      </div>
      <div className="w-full flex mb-3">
        {keys.map((language, i) => {
          if (language === "total") return null;

          const percentage =
            (languages[language] / languages.total) * 100 + "%";
          const colour =
            Colours[language as keyof typeof Colours] || Colours.Default;

          return (
            <div
              key={i}
              className={`h-1 ${colour}`}
              style={{ width: percentage }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default LanguagesBar;
