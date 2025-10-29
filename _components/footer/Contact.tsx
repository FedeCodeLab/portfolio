import { Button } from "../ui/Button";

export const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:justify-start text-center lg:text-start gap-6 flex-1 max-w-[400px]">
      <div className="flex flex-col">
        <div className="h-[40px]">
          <h4 className="text-[1.1rem] font-[600] dark:text-gray-400">
            ¿Tienes un proyecto?
          </h4>
        </div>

        <div className="flex flex-col gap-3">
          <p>¡Hablemos y hagámoslo realidad!</p>
          <Button className="text-white">Comenzar proyecto</Button>
        </div>
      </div>
    </div>
  );
};
