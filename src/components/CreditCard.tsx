import Card from "@/components/Card";

export default function CreditCard() {
  return (
    <Card className="w-96 h-56 text-white bg-gradient-to-r from-purple-500 to-indigo-600 hover:shadow-md">
      <div className="flex flex-col justify-between h-full">
        {/* Card Header */}
        <div className="flex justify-between">
          <span className="font-semibold">Debit Card</span>
          <span className="font-semibold">Visa</span>
        </div>

        {/* Card Number */}
        <div className="text-lg font-mono tracking-widest">
          1234 5678 9101 1121
        </div>

        {/* Card Footer */}
        <div className="flex justify-between">
          <div>
            <div className="text-xs">Card Holder</div>
            <div className="font-semibold">John Doe</div>
          </div>
          <div>
            <div className="text-xs">Expires</div>
            <div className="font-semibold">12/25</div>
          </div>
        </div>
      </div>
    </Card>
  );
}
