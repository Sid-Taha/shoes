import HelloNikeApp from "@/components/HelloNikeApp";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-[99px]">
      <HelloNikeApp/>

      <div className="px-[48px]">
        <Hero/>
        <CardSection/>

      </div>
    </div>
  );
}
