import { Box, IconButton, Divider } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <Box display="flex" justifyContent="space-between" sx={{ pt: 5 }}>
      <Box
        bgcolor="white"
        borderRadius="25px"
        sx={{ paddingLeft: "20px", paddingRight: "20px" }}
        p={1}
        border={2}
        borderColor="black"
        display="flex"
        alignItems="center">
        <InputBase
          value="EURO 2024 Public Viewing"
          inputProps={{ "aria-label": "search" }}
          sx={{ width: "250px" }}
          disabled
        />
        <Divider
          orientation="vertical"
          flexItem
          sx={{ bgcolor: "lightgrey" }}
        />
        <InputBase
          value="Munich"
          inputProps={{ "aria-label": "location" }}
          sx={{ width: "250px", pl: 2, fontSize: "20px" }}
          disabled
        />
        <IconButton
          color="inherit"
          type="button"
          sx={{
            p: 1,
            bgcolor: "primary.main",
            color: "white",
            border: 2,
            borderColor: "black",
            '&:hover': {
                backgroundColor: 'darkred',
              },
          }}>
          <SearchIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SearchBar;
