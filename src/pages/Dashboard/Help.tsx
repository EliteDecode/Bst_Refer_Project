import { ComplaintForm } from "@/components/dashboard_components/forms/ComplaintForm";
import Faqs from "@/components/home_components/Faq";
import { Box } from "@mui/material";
import React from "react";

const Help = () => {
  return (
    <Box>
      <Box>
        <ComplaintForm />
      </Box>
      <Faqs />
    </Box>
  );
};

export default Help;
