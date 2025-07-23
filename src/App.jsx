import React, { Suspense, lazy } from 'react';
import { useInView } from 'react-intersection-observer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy-loaded components
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Gallery = lazy(() => import('./components/Gallery'));
const GetInTouch = lazy(() => import('./components/GetInTouch'));

// Memoized SkeletonLoader
const SkeletonLoader = React.memo(({ height = 200 }) => (
  <div
    className="w-11/12 max-w-5xl mx-auto bg-gray-300 dark:bg-gray-700 rounded-md animate-pulse my-10"
    style={{ height }}
  />
));

// Lazy-loaded section wrapper
const SectionLazy = ({ id, LazyComponent, skeletonHeight = 300 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id={id} ref={ref}>
      <Suspense fallback={<SkeletonLoader height={skeletonHeight} />}>
        {inView && <LazyComponent />}
      </Suspense>
    </section>
  );
};

function App() {
  return (
    <div className="bg-backgroundLight dark:bg-backgroundDark text-textMainLight dark:text-textMainDark">
      <Navbar />
      <main className="pt-20">
        <section id="home">
          <Home />
        </section>

        <SectionLazy id="about" LazyComponent={About} skeletonHeight={350} />
        <SectionLazy id="skills" LazyComponent={Skills} skeletonHeight={300} />
        <SectionLazy id="projects" LazyComponent={Projects} skeletonHeight={400} />
        <SectionLazy id="gallery" LazyComponent={Gallery} skeletonHeight={300} />
        <SectionLazy id="contact" LazyComponent={GetInTouch} skeletonHeight={250} />
        <SectionLazy id="footer" LazyComponent={Footer} skeletonHeight={100} />
      </main>
    </div>
  );
}

export default App;
