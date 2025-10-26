export const LeftNav = () => {
  return (
    <div className=" w-[135px]">
      <h1
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="font-pixelifySans heading-5 inline text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-700 hover:from-pink-700 hover:to-blue-400 cursor-pointer transition-colors duration-300"
      >
        FedeCodeLab
      </h1>
    </div>
  );
};
