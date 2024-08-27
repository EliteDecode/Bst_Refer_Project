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
import useWithdrawalForm from "@/hooks/form-hooks/useWithdrawalForm";
import { PiHandWithdraw } from "react-icons/pi";

export function WithdrawalForm() {
  const { formik, isLoading } = useWithdrawalForm();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="icon">
          <PiHandWithdraw size={15} className="text-secondary font-bold" />{" "}
          <span
            className="text-black font-bold text-xs uppercase text-secondary"
            style={{ fontFamily: "eczar" }}>
            Withdrawal{" "}
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle style={{ fontFamily: "eczar" }}>
            {" "}
            Withdraw Account
          </DialogTitle>
          <DialogDescription>
            Enter the amount you want to withdraw from your account.
          </DialogDescription>
        </DialogHeader>
        <div className="items-center gap-4">
          <Label
            htmlFor="name"
            className="text-right"
            style={{ fontFamily: "eczar" }}>
            Amount
          </Label>
          <Input
            id="name"
            onChange={formik.handleChange("amount")}
            onBlur={formik.handleBlur("amount")}
            placeholder="Please enter amount"
          />
          {formik.touched.amount && formik.errors.amount ? (
            <div className="text-red-500 text-[10px]">
              {formik.errors.amount}
            </div>
          ) : null}
        </div>
        <DialogFooter>
          <Button
            disabled={isLoading}
            type="submit"
            style={{ fontFamily: "eczar" }}
            onClick={() => formik.handleSubmit()}>
            {" "}
            {isLoading ? <ButtonSpinners /> : "     Withdraw"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
