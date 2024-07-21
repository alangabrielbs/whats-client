import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { UserDropdown } from "@/components/user-dropdown";
import {
  ArrowLeftRight,
  BookCopy,
  BookUser,
  LayoutGrid,
  LifeBuoy,
  MessageSquareDot,
  MessageSquareShare,
  MessagesSquare,
  Settings,
  SidebarIcon,
  Tags,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
        title: "Central de ajuta",
        icon: LifeBuoy,
        link: "/central-de-ajuda",
      },
      {
        title: "Falar com suporte",
        icon: MessagesSquare,
        link: "/usuarios",
      },
    ],
  },
];

export const Sidebar = () => {
  const isActive = false;

  return (
    <aside className="border-r h-full w-full">
      <header className="flex items-center justify-between p-4 border-b">
        <Image src="/logo.svg" alt="Logo" width={150} height={28} />

        <Button variant="ghost" size="icon">
          <SidebarIcon className="size-4 text-muted-foreground" />
        </Button>
      </header>

      <ScrollArea className="h-[calc(100%-146px)]">
        <nav className="py-4 px-2">
          {menuItems.map(({ title, items }, index) => (
            <ul key={index} className="flex flex-col">
              {title && (
                <>
                  <Separator className="-ml-2 w-[calc(100%+16px)] mt-2" />
                  <small className="ml-2 text-muted-foreground text-xs mt-4 mb-3">
                    {title}
                  </small>
                </>
              )}

              {items.map(({ title, icon: Icon, link }) => (
                <li key={title}>
                  <Button
                    variant="ghost"
                    className="w-full rounded-lg justify-start font-medium text-slate-600 p-0"
                  >
                    <Link
                      href={link}
                      className="flex items-center gap-x-2 w-full px-4 py-2"
                    >
                      {Icon && <Icon className="size-4" />}
                      <span>{title}</span>
                    </Link>
                  </Button>
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
