import { CertifiedButton } from "@/_components/ui/CertifiedButton";
import { ExpandableText } from "./ExpandableText";
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
    <div className="timeline-end mb-10 pl-2 flex flex-col gap-6 text-neutral-800 dark:text-neutral-200">
      <div className="pt-4">
        <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
          {year}
        </p>
        <h4 className="text-lg font-medium">{title}</h4>
        <p className="text-gray-600 dark:text-gray-300 font-semibold text-[14px]">
          {institution}
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <ExpandableText text={description} />
        <CertifiedButton href={url} disabled={!active} />
      </div>
    </div>
  );
};
