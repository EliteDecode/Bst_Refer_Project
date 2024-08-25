import UpdateReferralForm from "@/components/dashboard_components/forms/UpdateReferralForm";
import ReferralDetails from "@/components/dashboard_components/ReferralDetails";
import Loader from "@/helpers/Loader";
import { FetchSingleReferralDetails } from "@/services/features/referral/referralSlice";
import { AppDispatch } from "@/store";
import { Box } from "@mui/material";
import { Typography } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewReferral = () => {
  const { referralId } = useParams();

  const { isLoading, singleReferral } = useSelector(
    (state: any) => state.referral
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (referralId) dispatch(FetchSingleReferralDetails(referralId));
  }, []);

  return (
    <Box>
      {isLoading && !singleReferral ? (
        <Loader />
      ) : (
        <Box className="grid sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-2">
          <Box className="sm:w-[80%] w-full rounded-md shadow-md bg-white m-auto border p-5 mt-5 ">
            <Typography
              className="text-[17px] font-bold"
              style={{ fontFamily: "eczar" }}>
              Referral Details
            </Typography>
            <ReferralDetails />
          </Box>

          <Box className="sm:w-[80%] w-full rounded-md shadow-md bg-white m-auto border p-5 mt-5 ">
            <Typography
              className="text-[17px] font-bold"
              style={{ fontFamily: "eczar" }}>
              Edit Referral.
            </Typography>
            <Typography className="text-[12px] font-semibold -mt-1 text-[#acaba9]">
              Please enter referral details below to update
            </Typography>
            <Box>
              <UpdateReferralForm />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ViewReferral;
