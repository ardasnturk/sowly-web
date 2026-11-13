import { Features } from "./home/Features";
import { Hero } from "./home/Hero";
import { How } from "./home/How";
import { CallToAction, Faq, Privacy, Pro } from "./home/Rest";

export function Home() {
  return (
    <>
      <Hero />
      <How />
      <Features />
      <Pro />
      <Privacy />
      <Faq />
      <CallToAction />
    </>
  );
}
