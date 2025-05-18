import { ExpandableText } from "./ExpandableText";
import { LinkButton } from "@/components/ui/LinkButton";
import { TimelineProps } from "@/types/timeline";

export const Content = ({
  year,
  title,
  institution,
  description,
  url,
  active = true,
}: TimelineProps) => {
  return (
    <div className="timeline-end mb-10 pl-2 flex flex-col gap-1">
      <p className="text-sm">{year}</p>
      <h4 className="text-lg font-medium">{title}</h4>
      <p>{institution}</p>
      <ExpandableText text={description} />
      <LinkButton href={url} disabled={!active} />
    </div>
  );
};
