import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import TitleText from "../common/TitleText";
import { FAQs } from "@/utils/contents";

export default function Faqs() {
  return (
    <div>
      <Box className="bg-white mt-10" id="FAQs">
        <Box className="custom-c border-t border-b px-5 py-16 relative rounded-md">
          <TitleText title="Frequently Asked Questions" />
          <Box className="mt-10 space-y-2">
            {FAQs?.map((item, index) => (
              <Accordion
                key={index}
                className=" shadow-none"
                style={{
                  boxShadow: "none",
                  borderRadius: "0px",
                }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className="text-black" />}
                  aria-controls="panel1-content"
                  id="panel1-header">
                  {item?.question}
                </AccordionSummary>
                <AccordionDetails>{item?.answer}</AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Box>
    </div>
  );
}
