import Hero from "@/components/home/Hero";

import Courses from "@/components/home/Courses";
import Globe from "@/components/home/Globe";
import Testimonials from "@/components/home/Testimonials";
import HowItWorks from "@/components/home/HowItWorks";
import HowMuchYouCanEarn from "@/components/home/HowMuchYouCanEarn";
import Faqs from "@/components/home/Faq";
import Footer from "@/components/home/Footer";

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
