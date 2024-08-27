import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ButtonSpinners from "@/helpers/ButtonSpinners";
import useSendComplaintForm from "@/hooks/form-hooks/useSendComplaintForm";
import { TbMessage2Up } from "react-icons/tb";

export function ComplaintForm() {
  const { formik, isLoading } = useSendComplaintForm();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="icon">
          <TbMessage2Up size={15} className="text-secondary font-bold" />{" "}
          <span
            className="text-black font-bold text-xs uppercase text-secondary"
            style={{ fontFamily: "eczar" }}>
            Make a Complaint{" "}
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle style={{ fontFamily: "eczar" }}>
            Make a Complaint
          </DialogTitle>
          <DialogDescription>
            Enter the title and message of your complaint.
          </DialogDescription>
        </DialogHeader>
        <div className="items-center gap-4">
          <Label
            htmlFor="name"
            className="text-right"
            style={{ fontFamily: "eczar" }}>
            Title
          </Label>
          <Input
            id="title"
            name="title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="text-[12px] outline-none"
            placeholder="Please enter title of message"
          />
          {formik.touched.title && formik.errors.title ? (
            <div className="text-red-500 text-[10px]">
              {formik.errors.title}
            </div>
          ) : null}
        </div>
        <div className="items-center gap-4">
          <Label
            htmlFor="name"
            className="text-right"
            style={{ fontFamily: "eczar" }}>
            Message
          </Label>
          <textarea
            className="w-full border p-2 text-[12px] outline-none border-gray-300 rounded-md"
            rows={8}
            id="message"
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Please enter message here"
          />
          {formik.touched.message && formik.errors.message ? (
            <div className="text-red-500 text-[10px]">
              {formik.errors.message}
            </div>
          ) : null}
        </div>
        <DialogFooter>
          <Button
            onClick={() => formik.handleSubmit()}
            disabled={isLoading}
            type="submit"
            style={{ fontFamily: "eczar" }}>
            {isLoading ? <ButtonSpinners /> : " Send Complaint"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
