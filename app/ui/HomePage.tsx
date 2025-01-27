import Head from "next/head";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import FeaturedProjects from "../components/FeaturedProjects";
import TrustBadges from "../components/TrustBadges";

const Home = () => {
  return (
    <>
      <Head>
        <title>Electric Installations | Powering Buildings</title>
        <meta
          name="description"
          content="Leading electrical installation services for residential, commercial, and industrial buildings with over 30 years of expertise."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Add more meta tags as needed */}
      </Head>
      <main>
        <Hero />
        <Stats />
        <FeaturedProjects />
        <TrustBadges />
      </main>
    </>
  );
};

export default Home;
