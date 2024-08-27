import { Box } from "@mui/material";
import TitleText from "../common/TitleText";

const HowMuchYouCanEarn = () => {
  return (
    <Box className="bg-white   " id="Earn">
      <Box className="custom-c border-b p-5 sm:py-16 py-8 relative rounded-md">
        <TitleText
          title="See how much you could earn"
          description="The larger the prospect, the larger your  chances of rewards! (Numbers are illustrative)"
        />{" "}
        <Box className="mt-10">
          <Box className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Box>
              <Box className="text-center space-y-1">
                <h3 className="text-lg font-bold">2-Person Plus Earnings </h3>
                <p className="text-sm text-[#0009]">2 x ₦10,000</p>
                <p className="text-[#0009]">You get paid ₦20, 000.</p>
              </Box>
            </Box>
            <Box className="sm:border-l sm:border-r border-t border-b sm:border-t-0 sm:border-b-0 py-4 sm:py-0">
              <Box className="text-center space-y-1">
                <h3 className="text-lg font-bold">5-Person Plus Earnings </h3>
                <p className="text-sm text-[#0009]">5 x ₦10,000</p>
                <p className="text-[#0009]">You get paid ₦50, 000.</p>
              </Box>
            </Box>
            <Box>
              <Box className="text-center space-y-1">
                <h3 className="text-lg font-bold">10-Person Plus Earnings </h3>
                <p className="text-sm text-[#0009]">10 x ₦10,000</p>
                <p className="text-[#0009]">You get paid ₦100, 000.</p>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>{" "}
    </Box>
  );
};

export default HowMuchYouCanEarn;
