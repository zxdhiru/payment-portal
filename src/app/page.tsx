import CustomButton from "@/components/CustomButton";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <CustomButton href="/dashboard" className="bg-blue-500 text-white px-5 py-3 rounded-3xl font-semibold hover:bg-blue-700">
        Go to dashboard
      </CustomButton>
    </div>
  );
}
