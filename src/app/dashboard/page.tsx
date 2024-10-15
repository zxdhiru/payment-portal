import Card from "@/components/Card";
import CreditCard from "@/components/CreditCard";
import TransactionTable from "@/components/TransactionTable";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-5 p-2 sm:p-4 md:py-8 md:px-24 bg-gradient-to-r from-blue-700 to-blue-500">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold text-white">Dashboard</h1>
          <p className="text-white">Welcome back, John Doe!</p>
        </div>
        <div>
          <Image
            src="/favicon.ico"
            width={50}
            height={50}
            alt="Avatar"
            className="rounded-full"
          />
        </div>
      </div>

      {/* Balance Summary */}
      <div className="flex justify-between text-white gap-4">
        <Card className="w-1/2 p-4">
          <h2 className="text-lg">Total Balance</h2>
          <p className="text-2xl">$5,000.00</p>
        </Card>
        <Card className="w-1/2 p-4">
          <h2 className="text-lg">Pending Payments</h2>
          <p className="text-2xl">$300.00</p>
        </Card>
      </div>
      
      {/* Payment Methods Section */}
      <Card className="w-full p-2 sm:px-6 sm:py-5 text-white">
        <h3 className="mb-3 text-lg font-semibold tracking-wider text-center sm:text-left">
          Payment Methods
        </h3>
        <div className="flex gap-4 flex-wrap sm:flex-nowrap sm:flex-row">
          <CreditCard />
          <Card className="w-full sm:w-96 flex flex-col items-center justify-center text-white border-2 border-white border-dashed hover:shadow-md">
            <p className="text-blue-800 font-semibold">Add new card</p>
          </Card>
        </div>
      </Card>

      {/* Recent Activity Section */}
      <Card className="w-full p-4 text-white">
        <h3 className="text-lg">Recent Activity</h3>
        <ul className="mt-2">
          <li>Payment of $500 to ABC Corp. on 2024-10-02</li>
          <li>Scheduled payment of $100 on 2024-10-10</li>
        </ul>
      </Card>


      {/* Scheduled Payments Section */}
      <Card className="w-full p-4 text-white">
        <h3 className="text-lg">Scheduled Payments</h3>
        <ul className="mt-2">
          <li>Rent - $1200.00 on 2024-11-01</li>
          <li>Utilities - $150.00 on 2024-11-05</li>
        </ul>
      </Card>

      {/* Transaction Filters */}
      <div className="flex justify-between mb-4 flex-wrap gap-4">
        <input
          type="text"
          placeholder="Search transactions"
          className="flex-1 md:flex-none px-5 py-2 text-md rounded-full outline-none bg-inherit border-2 border-white border-dotted"
        />
        <select className="flex-1 md:flex-none rounded-full text-md bg-inherit border-2 border-white border-dotted px-5 py-2 outline-none">
          <option className="bg-purple-500">Filter by Date</option>
          <option className="bg-purple-500">Last 7 Days</option>
          <option className="bg-purple-500">Last Month</option>
        </select>
      </div>

      {/* Transaction Table */}
      <TransactionTable
        th={["S.No", "Date", "Description", "Amount"]}
        td={[
          ["2024-10-01", "Groceries", "$50.00"],
          ["2024-10-02", "Rent", "$1200.00"],
          ["2024-10-03", "Utilities", "$150.00"],
        ]}
      />

      {/* Security Settings Section */}
      <Card className="w-full p-4 text-white">
        <h3 className="text-lg">Security Settings</h3>
        <p>Two-factor authentication: Enabled</p>
        <p>Last login: 2024-10-14</p>
      </Card>

      {/* Help Section */}
      <div className="text-white">
        <Card className="w-full sm:w-52 h-max flex flex-col items-center justify-center text-blue-800 hover:text-white cursor-pointer hover:shadow-md">
            <p className="font-semibold">Contact support</p>
          </Card>
      </div>
    </div>
  );
}
