import { type NextPageProps } from "@/types";
import DashboardCard from "@/components/dashboard-card";

const Page = ({}: NextPageProps) => {
  return (
    <>
      <h2 className="p-3 text-3xl font-semibold tracking-tight">Dashboard</h2>
      <div className="space-y-3 p-3">
        <DashboardCard
          description="In total"
          title="Recipes"
          href="app/recipes"
        >
          692
        </DashboardCard>
        <DashboardCard description="Average/recipe" title="Rating" href="/app">
          3.9
        </DashboardCard>
      </div>
    </>
  );
};

export default Page;
