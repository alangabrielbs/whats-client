import { PanelRightClose } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useExpandedSidebar } from "@/features/dashboard/hooks/use-expanded-sidebar";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const PageHeader = ({
  children,
  className,
  ...rest
}: PageHeaderProps) => {
  const { isExpanded, toggleSidebar } = useExpandedSidebar();

  return (
    <header
      className={cn("h-[73px] border-b mb-4 p-4 flex items-center", className)}
      {...rest}
    >
      {!isExpanded && (
        <Button
          variant="ghost"
          size="icon"
          className="mr-2"
          onClick={() => toggleSidebar((isOpen) => !isOpen)}
        >
          <PanelRightClose className="size-4 text-slate-400" />
        </Button>
      )}

      {children}
    </header>
  );
};
