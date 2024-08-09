import AllUsersTables from "@/components/dashboard_components/tables/AllUsersTables";
import { Button } from "@/components/ui/button";
import { Box } from "@mui/material";
import { RiUserAddFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Users = () => {
  return (
    <div>
      <Box>
        <Box>
          <Link to="/dashboard/add-user">
            <Button variant="icon">
              <RiUserAddFill size={15} className="text-secondary font-bold" />
              <span
                className="text-black font-bold text-xs uppercase text-secondary"
                style={{ fontFamily: "eczar" }}>
                Add Users
              </span>
            </Button>
          </Link>
        </Box>
        <Box className="mt-5 border-gray-200 shadow-md border p-5 rounded-lg sm:overflow-x-auto overflow-x-scroll">
          <AllUsersTables />
        </Box>
      </Box>
    </div>
  );
};

export default Users;
