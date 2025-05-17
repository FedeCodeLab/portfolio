import { Experience } from "@/types/experience";

export const ExperienceCard = ({
  title,
  company,
  content,
  type,
}: Experience) => {
  return (
    <article className="relative overflow-hidden rounded-lg p-12">
      <div className="absolute inset-0 bg-neutral-900 opacity-50 backdrop-blur-xl z-0" />

      <div className="flex flex-col gap-1 border-l-2 border-emerald-900 pl-6 relative z-10">
        <div className="">
          <p className="text-lg">{title}</p>
          <p className="text-sm text-gray-400">{type}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-base font-semibold text-gray-200">{company}</p>
          <p className="text-gray-400">{content}</p>
        </div>
      </div>
    </article>
  );
};
