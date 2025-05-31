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
    <div className="timeline-end mb-10 pl-2 flex flex-col gap-6">
      <div className="pt-4">
        <p className="text-sm text-blue-400 font-semibold">{year}</p>
        <h4 className="text-lg font-medium">{title}</h4>
        <p className="text-gray-300 font-semibold">{institution}</p>
      </div>
      <div className="flex flex-col gap-6">
        <ExpandableText text={description} />
        <LinkButton href={url} disabled={!active} />
      </div>
    </div>
  );
};
