import Image from "next/image";
import Nav from '@/components/Nav'
import BannerContent from "@/components/BannerContent";
import AboutContent from "@/components/AboutContent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Nav />
      <BannerContent />
      <AboutContent />
    </main>
  );
}
