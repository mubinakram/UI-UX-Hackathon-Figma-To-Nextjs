import Hero from "@/components/home/Hero";
import Section2 from "@/components/home/Section2";
import ProductGrid from "@/components/home/ProductGrid";
import RoomInspiration from "@/components/home/RoomInspiration";


export default function Home() {
  return (
    <div className="w-full">
        <Hero />
        <Section2 />
        <ProductGrid />
        <RoomInspiration />
    </div>
  );
}
