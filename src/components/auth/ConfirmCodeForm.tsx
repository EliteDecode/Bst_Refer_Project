import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";
import ButtonSpinners from "@/helpers/ButtonSpinners";
import useConfirmCodeForm from "@/hooks/form-hooks/useConfirmCodeForm";

export function ConfirmCodeForm() {
  const { formik, isLoading } = useConfirmCodeForm();

  return (
    <form onSubmit={formik.handleSubmit} className="mt-5 space-y-6">
      <div>
        <div className="mt-1 flex items-center justify-center">
          <InputOTP
            maxLength={5}
            value={formik.values.pin}
            onChange={(value) => formik.setFieldValue("pin", value)}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
            </InputOTPGroup>
          </InputOTP>
        </div>

        {formik.errors.pin && formik.touched.pin ? (
          <div className="text-red-600 text-[10px]  mt-1">
            {formik.errors.pin}
          </div>
        ) : null}
      </div>

      <div className="flex items-center justify-start">
        <Button type="submit" className="" size="sm" variant="outline">
          {isLoading ? <ButtonSpinners /> : "Verify"}
        </Button>
      </div>
    </form>
  );
}
