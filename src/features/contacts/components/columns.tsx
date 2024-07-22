"use client";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { phoneMask } from "../utils";
import { DataTableColumnHeader } from "./data-table-column-header";

export type Contact = {
  id: string;
  name: string;
  phone: string;
  createdAt: string;
};

export const columnsLabel = {
  name: "Nome",
  phone: "Telefone",
  createdAt: "Data de inscrição",
};

export const columns: ColumnDef<Contact>[] = [
  {
    accessorKey: "name",
    cell({ row }) {
      return <span className="font-medium">{row.original.name}</span>;
    },
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nome" />
    ),
  },
  {
    accessorKey: "phone",
    header: "Telefone",
    cell({ row }) {
      return <span>{phoneMask(row.original.phone)}</span>;
    },
  },
  {
    accessorKey: "createdAt",
    header: "Data de inscrição",
    cell({ row }) {
      return (
        <span>
          {format(
            new Date(row.original.createdAt),
            "dd/MM/yyyy 'às' hh:mm:ss",
            {
              locale: ptBR,
            }
          )}
        </span>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    size: 40,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <div className="text-right">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Abrir menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Ações</DropdownMenuLabel>

              <DropdownMenuItem>Ver usuário</DropdownMenuItem>
              <DropdownMenuItem>Atribuir a mim</DropdownMenuItem>
              <DropdownMenuItem>Atribuir a um atendente</DropdownMenuItem>
              <DropdownMenuItem>Ir para o chat</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
