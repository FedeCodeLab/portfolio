export const LeftNav = () => {
  return (
    <div className=" w-[200px]">
      <h1
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="heading-5 inline text-slate-300 hover:text-white cursor-pointer transition-colors duration-300"
      >
        FedeCodeLab
      </h1>
    </div>
  );
};
