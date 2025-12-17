import { db } from "@/lib/db";
import { products, labs, messages } from "@/lib/schema";

export default async function DashboardPage() {
  const productsCount = (await db.select().from(products)).length;
  const labsCount = (await db.select().from(labs)).length;
  const messagesCount = (await db.select().from(messages)).length;

  return (
    <div className="p-8">
      <div className="max-w-5xl">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Overview</h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Total Products</h3>
            <p className="text-3xl font-extrabold text-black">{productsCount}</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Lab Experiments</h3>
            <p className="text-3xl font-extrabold text-black">{labsCount}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Messages</h3>
            <p className="text-3xl font-extrabold text-black">{messagesCount}</p>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl">
          <h3 className="font-bold text-blue-900 mb-2">System Status</h3>
          <p className="text-sm text-blue-800">
            Database connected properly. You can manage your content using the sidebar menu on the left.
          </p>
        </div>
      </div>
    </div>
  );
}