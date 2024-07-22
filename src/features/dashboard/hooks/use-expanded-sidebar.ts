import { parseAsBoolean, useQueryState } from "nuqs";

export const useExpandedSidebar = () => {
  const [isExpanded, toggleSidebar] = useQueryState("s", {
    ...parseAsBoolean,
    defaultValue: true,
  });

  return {
    isExpanded,
    toggleSidebar,
  };
};
