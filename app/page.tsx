import siteData from "@/data/appData";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{siteData.name}</h1>
    </main>
  );
}
