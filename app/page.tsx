import Calculator from "./components/Calculator";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex h-screen w-full items-center justify-center p-4 xl:bg-gray-100">
        <Calculator />
      </main>
    </div>
  );
}
