import { client } from "../../lib/client";
import type { About } from "./about.model";

export async function getAbout(): Promise<About> {
  const aboutContent = await client.getContent<About>({
    // TODO: IMPORTANT - PUT THE ID YOU HAVE IN YOUR INSTANCE
    // Of About in Content Island
    id: "685eb36e45767b0f312fce64",
    contentType: "About",
  });

  return aboutContent;
}
