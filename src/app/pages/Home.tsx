import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { PartnersSection } from "../components/PartnersSection";
import { YouTubeSection } from "../components/YouTubeSection";
import { BooksSection } from "../components/BooksSection";
import { CounselingSection } from "../components/CounselingSection";
import { MediaPlayerTeaser } from "../components/MediaPlayerTeaser";

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <PartnersSection />
      <YouTubeSection />
      <MediaPlayerTeaser />
      <BooksSection />
      <CounselingSection />
    </>
  );
}