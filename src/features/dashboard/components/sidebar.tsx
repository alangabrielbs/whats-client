"use client";

import {
  ArrowLeftRight,
  BookCopy,
  BookUser,
  LayoutGrid,
  LifeBuoy,
  MessageSquareDot,
  MessageSquareShare,
  MessagesSquare,
  PanelRightOpen,
  Settings,
  Tags,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { UserDropdown } from "@/components/user-dropdown";
import { useExpandedSidebar } from "@/features/dashboard/hooks/use-expanded-sidebar";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";

const menuItems = [
  {
    items: [
      {
        title: "Visão Geral",
        icon: LayoutGrid,
        link: "/dashboard",
      },
      {
        title: "Chat",
        icon: MessageSquareDot,
        link: "/chat",
      },
      {
        title: "Contatos",
        icon: BookUser,
        link: "/contatos",
      },
      {
        title: "Departamentos",
        icon: BookCopy,
        link: "/departamentos",
      },
      {
        title: "Tags",
        icon: Tags,
        link: "/tags",
      },
      {
        title: "Respostas Rápidas",
        icon: MessageSquareShare,
        link: "/respostas-rapidas",
      },
    ],
  },
  {
    title: "Administração",
    items: [
      {
        title: "Conexões",
        icon: ArrowLeftRight,
        link: "/conexoes",
      },
      {
        title: "Usuários",
        icon: Users,
        link: "/usuarios",
      },
      {
        title: "Configurações",
        icon: Settings,
        link: "/configuracoes",
      },
    ],
  },
  {
    title: "Ajuda",
    items: [
      {
        title: "Central de Ajuda",
        icon: LifeBuoy,
        link: "/central-de-ajuda",
      },
      {
        title: "Falar com Suporte",
        icon: MessagesSquare,
        link: "/usuarios",
      },
    ],
  },
];

export const Sidebar = () => {
  const { isExpanded, toggleSidebar } = useExpandedSidebar();

  const search = useSearchParams();
  const query = search ? `?${search.toString()}` : "";

  const logoUrl = isExpanded ? "/logo.svg" : "/icon.svg";

  return (
    <aside className="border-r h-full">
      <header
        className={cn("flex items-center justify-between p-4 border-b", {
          "flex-col gap-y-2 h-[73px] justify-center": !isExpanded,
        })}
      >
        <Image
          src={logoUrl}
          alt="Logo"
          {...(isExpanded
            ? { width: 150, height: 28 }
            : { width: 32, height: 19 })}
        />

        {isExpanded && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => toggleSidebar((isOpen) => !isOpen)}
          >
            <PanelRightOpen className="size-4 text-slate-400" />
          </Button>
        )}
      </header>

      <ScrollArea className="h-[calc(100%-146px)]">
        <nav className="py-4 px-2">
          {menuItems.map(({ title, items }, index) => (
            <ul key={index} className="flex flex-col">
              {title && (
                <>
                  <Separator
                    className={cn("-ml-2 w-[calc(100%+16px)] mt-2", {
                      "mb-2": !isExpanded,
                    })}
                  />
                  {isExpanded && (
                    <small className="ml-2 text-muted-foreground text-xs mt-4 mb-3">
                      {title}
                    </small>
                  )}
                </>
              )}

              {items.map(({ title, icon: Icon, link }) => (
                <li key={title}>
                  <Hint
                    label={title}
                    side="right"
                    sideOffset={5}
                    disabled={isExpanded}
                  >
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full rounded-lg justify-start font-medium text-slate-600 p-0",
                        {
                          "w-min": !isExpanded,
                        }
                      )}
                    >
                      <Link
                        href={`${link}${query}`}
                        className="flex items-center gap-x-2 w-full px-4 py-2"
                      >
                        {Icon && <Icon className="size-4" />}
                        {isExpanded && <span>{title}</span>}
                      </Link>
                    </Button>
                  </Hint>
                </li>
              ))}
            </ul>
          ))}
        </nav>
      </ScrollArea>

      <div className="mt-auto border-t py-4 px-3">
        <UserDropdown />
      </div>
    </aside>
  );
};
