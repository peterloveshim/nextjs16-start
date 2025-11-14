import Link from "next/link";
import Calculator from "./components/Calculator";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex h-screen w-full items-center justify-center p-4 bg-gray-200">
        <Calculator />
      </main>
    </div>
  );
}
