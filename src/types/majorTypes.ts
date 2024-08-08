// Navbar Types

export type NavbarLinksProps = {
  title: string;
};

export type NavbarMiniLinksProps = {
  title: string;
  path: string;
};

//Testimonials types

export type TestimonialsProps = {
  name: string;
  position: string;
  testimonial: string;
  companyName: string;
  aboutProject: string;
  companyLocation: string;
  image: string;
};

//How it Works Types
export type HowItWorksProps = {
  title: string;
  description: string;
  image: string;
};

//Faqa
export type FaqProps = {
  question: string;
  answer: string;
};

//Services Rendered
export type ServicesProps = {
  title: string;
  description: string;
  icon: string;
  abbr?: string;
};

//Dashboard Navbar Props
export type DashboardNavbarProps = {
  setIsSidebar: (value: boolean) => void;
  isSidebar: boolean;
};
