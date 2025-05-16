import { Experience } from "@/types/experience";

export const ExperienceCard = ({
  title,
  company,
  content,
  type,
}: Experience) => {
  return (
    <article>
      <div>
        <div>
          <h4>{title}</h4>
          <p>{company}</p>
        </div>
        <p>{type}</p>
      </div>
      {content}
    </article>
  );
};
