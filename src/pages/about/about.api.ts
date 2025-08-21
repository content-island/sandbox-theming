import { client } from "../../lib/client";
import type { About } from "./about.model";

export async function getAbout(): Promise<About> {
  const aboutContent = await client.getContent<About>({
    // TODO: IMPORTANT - PUT THE ID YOU HAVE IN YOUR INSTANCE
    // Of About in Content Island
    id: "6889fee44e051d2bea7eaecb",
    contentType: "About",
  });

  return aboutContent;
}
