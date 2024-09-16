import React from "react";
import { Container, Grid, Link } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import { Typography } from "antd";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer: React.FC = () => {
  return (
    <footer className="bg-tetiary text-dark py-10">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Typography className="text-[20px]" style={{ fontWeight: "bold" }}>
              About Babtech
            </Typography>
            <Typography className="text-[#0009] text-[12px]">
              Babtech School of Technology offers comprehensive courses in
              various fields such as Software Engineering, Web Development, Data
              Science, Digital Marketing, and more. Our mission is to empower
              individuals with the skills they need to excel in the tech
              industry.
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography className="text-[20px]" style={{ fontWeight: "bold" }}>
              Contact Us
            </Typography>
            <Typography className="text-[#0009] text-[12px]">
              Email: info@babtech.com
            </Typography>
            <Typography className="text-[#0009] text-[12px]">
              Phone: +234 123 456 7890
            </Typography>
            <Typography className="text-[#0009] text-[12px]">
              Address: 123 Tech Avenue, Lagos, Nigeria
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography className="text-[20px]" style={{ fontWeight: "bold" }}>
              Quick Links
            </Typography>
            <ul className="list-none p-0">
              <li>
                <AnchorLink
                  offset="100"
                  href="#Courses"
                  color="inherit"
                  className="text-[12px] text-[#0009]">
                  <span className="text-[12px] text-[#0009]">Courses</span>
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  href="#How It Works"
                  color="inherit"
                  className="text-[12px] text-[#0009]">
                  <span className="text-[12px] text-[#0009]">How it Works</span>
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  href="#Earn"
                  color="inherit"
                  className="text-[12px] text-[#0009]">
                  <span className="text-[12px] text-[#0009]">Earn</span>
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  href="#FAQs"
                  color="inherit"
                  className="text-[12px] text-[#0009]">
                  <span className="text-[12px] text-[#0009]">Faq</span>
                </AnchorLink>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography className="text-[20px]" style={{ fontWeight: "bold" }}>
              Follow Us
            </Typography>
            <ul className="flex space-x-4 p-0 list-none">
              <li>
                <Link
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit">
                  <Facebook className="text-[#0009]" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit">
                  <Twitter className="text-[#0009]" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit">
                  <Instagram className="text-[#0009]" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit">
                  <LinkedIn className="text-[#0009]" />
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>
        <div className="text-center mt-10">
          <Typography className="text-[#0009] text-[12px]">
            &copy; {new Date().getFullYear()} Babtech School of Technology. All
            rights reserved.
          </Typography>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
