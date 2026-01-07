import BuilderClient from "../components/testbuilder/BuilderClient";

export default function BuilderPage() {
  return (
    <div className="min-h-screen bg-cover bg-center">
      <div className="mx-auto max-w-[1400px] px-6">
        <BuilderClient />
      </div>
    </div>
  );
}
