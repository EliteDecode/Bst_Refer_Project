import { ComplaintForm } from "@/components/dashboard_components/forms/ComplaintForm";
import Faqs from "@/components/home/Faq";
import { Box } from "@mui/material";

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
