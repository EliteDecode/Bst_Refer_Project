import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MdDeleteOutline } from "react-icons/md";
import useDeleteReferral from "@/hooks/form-hooks/useDeleteReferral";
import ButtonSpinners from "@/helpers/ButtonSpinners";

const ReferralDetails = () => {
  const { singleReferral } = useSelector((state: any) => state.referral);
  const { handleDelete, isLoading } = useDeleteReferral();

  const referralDetails = [
    {
      key: "Fullname",
      value: singleReferral?.fullname,
    },
    {
      key: "Email",
      value: singleReferral?.email,
    },
    {
      key: "Phone",
      value: singleReferral?.phone,
    },
    {
      key: "Course",
      value: singleReferral?.course,
    },
    {
      key: "Address",
      value: singleReferral?.address,
    },
  ];

  return (
    <Box>
      <Box className="space-y-2 mt-5">
        {referralDetails?.map((item, index) => (
          <Box key={index} className="flex justify-between gap-2">
            <span className="text-[13px]">{item.key}:</span>
            <span className="text-[13px] font-bold">{item.value}</span>
          </Box>
        ))}
        <Box className="flex justify-between gap-2">
          {" "}
          {/* Changed classname to className */}
          <span className="text-[13px]">Match Status:</span>
          {singleReferral?.isMatch ? (
            <span className="text-green-500 bg-green-200 border p-2 rounded-md text-[11px] ">
              Successful
            </span>
          ) : (
            <span className="text-orange-500 bg-orange-200 border px-2 py-0 rounded-md text-[11px] ">
              Pending
            </span>
          )}
        </Box>

        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="destructive"
              size="sm"
              className="flex justify-between">
              <MdDeleteOutline size={15} />
              <span className="text-[12px]">Delete Referral</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle style={{ fontFamily: "eczar" }}>
                Delete Account
              </DialogTitle>
              <DialogDescription>
                Are you sure you want to delete this referral? This action
                cannot be undone
              </DialogDescription>
            </DialogHeader>

            <DialogFooter>
              <Button
                disabled={isLoading}
                variant="destructive"
                onClick={handleDelete}
                type="submit"
                style={{ fontFamily: "eczar" }}>
                {isLoading ? <ButtonSpinners /> : "Delete Account"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Box>
    </Box>
  );
};

export default ReferralDetails;
