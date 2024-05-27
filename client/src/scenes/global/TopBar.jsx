import { Box, Typography } from "@mui/material";

const TopBar = () => {
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Typography variant="h5" color="primary">
        City Life
      </Typography>
    </Box>
  );
};

export default TopBar;
