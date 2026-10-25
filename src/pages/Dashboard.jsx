import { LayoutDashboard } from "lucide-react";

export default function Dashboard() {
  return (
    <section>
      <div className="mb-6 flex items-center gap-3">
        <LayoutDashboard size={24} />

        <h1 className="text-2xl font-semibold tracking-tight">
          Dashboard
        </h1>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <article className="rounded-xl border bg-card p-6">
          <p className="text-sm text-muted-foreground">
            Total Revenue
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            $45,231.89
          </h2>
        </article>

        <article className="rounded-xl border bg-card p-6">
          <p className="text-sm text-muted-foreground">
            Active Users
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            2,350
          </h2>
        </article>

        <article className="rounded-xl border bg-card p-6">
          <p className="text-sm text-muted-foreground">
            Total Orders
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            1,247
          </h2>
        </article>
      </div>
    </section>
  );
}