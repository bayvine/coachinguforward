

import { repositoryName } from "@/prismicio";
import { components } from "@/slices";
import { createClient } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import React from "react";

export default async function Home() {
  const client = createClient(repositoryName);
  const home = await client.getSingle("home")
  
  return <SliceZone slices={home.data.slices} components={components} />;
}
