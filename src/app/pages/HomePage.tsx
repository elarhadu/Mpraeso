import { Hero } from '../components/Hero';
import { VisualShowcase } from '../components/VisualShowcase';
import { About } from '../components/About';
import { SubTowns } from '../components/SubTowns';
import { News } from '../components/News';
import { Tourism } from '../components/Tourism';
import { Projects } from '../components/Projects';
import { Events } from '../components/Events';
import { Churches } from '../components/Churches';
import { Diaspora } from '../components/Diaspora';
import { Gallery } from '../components/Gallery';

export function HomePage() {
  return (
    <>
      <Hero />
      <VisualShowcase />
      <About />
      <SubTowns />
      <News />
      <Tourism />
      <Projects />
      <Events />
      <Churches />
      <Diaspora />
      <Gallery />
    </>
  );
}
