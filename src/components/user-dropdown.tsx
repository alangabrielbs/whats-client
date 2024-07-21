import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { auth } from "@/features/auth";
import {
  CreditCard,
  EllipsisVertical,
  Home,
  LogOut,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export const UserDropdown = async () => {
  const session = await auth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none w-full">
        <div className="flex gap-x-2 items-center justify-between w-full">
          <div className="flex gap-x-2 items-center">
            <Avatar>
              <AvatarImage src={session?.user?.image!} />
              <AvatarFallback>AG</AvatarFallback>
            </Avatar>

            <div className="flex flex-col items-start space-y-1">
              <p className="text-sm font-medium leading-none">
                {session?.user?.name}
              </p>
              <p className="text-xs font-normal leading-none text-muted-foreground">
                {session?.user?.email}
              </p>
            </div>
          </div>

          <Button variant="ghost" size="icon" className="ml-auto" asChild>
            <div>
              <EllipsisVertical className="h-4 w-4" />
            </div>
          </Button>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-72">
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-semibold leading-none">
              {session?.user?.name}
            </p>
            <p className="text-xs font-normal leading-none text-muted-foreground">
              {session?.user?.email}
            </p>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Link href="/" className="flex items-center">
            <Settings className="h-4 w-4 mr-2" />
            Configurações
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Link href="/" className="flex items-center">
            <CreditCard className="h-4 w-4 mr-2" />
            Assinatura
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Link href="/api/auth/signout" className="flex items-center">
            <LogOut className="h-4 w-4 mr-2" />
            Sair
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
