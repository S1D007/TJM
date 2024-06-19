import { ParallaxScroll } from "@/components/ui/ParallaxScroll";
import React from "react";
import SimpleTextCard from "@/components/ui/Cards/SimpleTextCard";

function page() {
  return <ParallaxScroll components={Array(9).fill(<SimpleTextCard />)} />;
}

export default page;
