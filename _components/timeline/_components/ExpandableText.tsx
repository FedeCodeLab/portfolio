"use client";
import { useState } from "react";

export const ExpandableText = ({ text }: { text: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const previewText = text.length > 200 ? text.slice(0, 200) + "..." : text;

  return (
    <div className="flex flex-col gap-2">
      <p className="text-neutral-800 dark:text-neutral-400 max-w-2xl">
        {isExpanded ? text : previewText}
      </p>
      {text.length > 100 && (
        <span
          onClick={toggleReadMore}
          className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer underline"
        >
          {isExpanded ? " Ver menos" : " Ver más"}
        </span>
      )}
    </div>
  );
};
