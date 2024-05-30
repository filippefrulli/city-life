import React from "react";
import { CssBaseline } from "@mui/material";
import TopBar from "./scenes/global/TopBar";
import SearchBar from "./scenes/searchBar/SearchBar";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import EventList from "./scenes/eventList/EventList";

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff0000', // red
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <main
          className="content"
          style={{ paddingLeft: "80px", paddingRight: "80px" }}>
          <TopBar />
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <SearchBar />
            <EventList />
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;

{
  /* <div>
<Container>
  <CityLife />
  </Container>
</div> */
}
