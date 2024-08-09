import { WithdrawalForm } from "@/components/dashboard_components/forms/WithdrawalForm";
import TransactionTable from "@/components/dashboard_components/tables/TransactionTable";
import WalletCardDisplay from "@/components/dashboard_components/WalletCardDisplay";
import { Box, Grid } from "@mui/material";

const Wallet = () => {
  return (
    <Box>
      <Box className="mb-5">
        <WithdrawalForm />
      </Box>
      <Grid container spacing={4}>
        <Grid item sm={12} md={9}>
          <Box className=" border-gray-200 shadow-md border px-5 rounded-lg sm:overflow-x-auto overflow-x-scroll">
            <TransactionTable />
          </Box>
        </Grid>
        <Grid item sm={12} md={3}>
          <WalletCardDisplay />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Wallet;
