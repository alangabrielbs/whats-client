"use client";

import { columns } from "@/features/contacts/components/columns";
import { DataTable } from "@/features/contacts/components/data-table";
import { mockContacts } from "@/features/contacts/mock-table";
import { PageHeader } from "@/features/dashboard/components/page-header";

export default function ContactsPage() {
  return (
    <div className="h-full">
      <PageHeader>
        <h4 className="scroll-m-20 text-xl font-medium tracking-tight text-slate-800">
          Contatos
        </h4>
      </PageHeader>

      <main className="px-4">
        <DataTable columns={columns} data={mockContacts} />
      </main>
    </div>
  );
}
