import { Box } from "@mui/material";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { Typography } from "antd";
import { addUsersInputs } from "@/utils/dashboardContents";
import useAddUserForm from "@/hooks/form-hooks/useAddUserForm";

const AddUserForm = () => {
  const { formik } = useAddUserForm();
  return (
    <Box className=" py-2">
      <form onSubmit={formik.handleSubmit}>
        {addUsersInputs?.map((item, index) => (
          <Box key={index}>
            <Label className="text-[11px] text-[#0009]" htmlFor={item.name}>
              {item?.label}
            </Label>
            <Input
              className={`text-[12px] ${
                formik.touched[item.name as keyof typeof formik.touched] &&
                formik.errors[item.name as keyof typeof formik.errors] &&
                "border-red-500 border"
              }`}
              id={item?.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type={item.type}
              placeholder={item?.placeholder}
            />
            <Box className="relative">
              {formik.touched[item.name as keyof typeof formik.touched] &&
                formik.errors[item.name as keyof typeof formik.errors] && (
                  <Typography className="text-[10px]  text-red-600 ">
                    {formik.errors[item.name as keyof typeof formik.errors]} (*)
                  </Typography>
                )}
            </Box>
          </Box>
        ))}
        <Box className="mt-5">
          <Button className="w-full" style={{ fontFamily: "eczar" }}>
            Add User
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AddUserForm;
