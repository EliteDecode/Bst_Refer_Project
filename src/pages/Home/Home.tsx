import Hero from "@/components/home_components/Hero";

import Courses from "@/components/home_components/Courses";
import Globe from "@/components/home_components/Globe";
import Testimonials from "@/components/home_components/Testimonials";
import HowItWorks from "@/components/home_components/HowItWorks";
import HowMuchYouCanEarn from "@/components/home_components/HowMuchYouCanEarn";
import Faqs from "@/components/home_components/Faq";
import Footer from "@/components/home_components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Courses />
      <HowItWorks />
      <Globe />
      <HowMuchYouCanEarn />
      <Testimonials />
      <Faqs />
      <Footer />
    </>
  );
};

export default Home;
