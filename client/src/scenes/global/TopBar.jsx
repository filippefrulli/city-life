import {
  Box,
  Typography,
  Button,
  Modal,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState, useCallback } from "react";
import {
  DatePicker,
  TimePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import CountrySelect from './countrySelect';
import { createEvent } from "../../api/events";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { Event } from "../../models/Event";

const TopBar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setSelectedTitle("");
  };

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedHomeCountry, setSelectedHomeCountry] = useState(null);
  const [selectedAwayCountry, setSelectedAwayCountry] = useState(null);

  const handleSaveEvent = (e) => {
    e.preventDefault();
  
    const event = new Event('', selectedTitle, 1, selectedHomeCountry, selectedAwayCountry, selectedDate, selectedTime);
  
    createEvent(event);
  };

  const handleHomeCountryChange = (newValue) => {
    setSelectedHomeCountry(newValue);
  };

  const handleAwayCountryChange = (newValue) => {
    setSelectedAwayCountry(newValue);
  };

  const handleDateChange = useCallback((event) => {
    setSelectedDate(event.target.value);
  }, []);

  const handleTimeChange = useCallback((event) => {
    setSelectedTime(event.target.value);
  }, []);

  const handleCategoryChange = useCallback((event) => {
    setSelectedCategory(event.target.value);
  }, []);

  const handleTitleChange = useCallback((event) => {
    setSelectedTitle(event.target.value);
  }, []);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Typography variant="h5" color="primary">
        City Life
      </Typography>
      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleOpen}
          sx={{
            bgcolor: "#FFFF99", // Light yellow
            color: "black",
            border: 2,
            borderColor: "black",
            borderRadius: "15px",
            marginRight: "10px",
            "&:hover": {
              backgroundColor: "gold",
            },
          }}>
          Add Event
        </Button>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            bgcolor: "#99CC99", // Light green
            color: "black",
            border: 2,
            borderColor: "black",
            borderRadius: "15px",
            "&:hover": {
              backgroundColor: "green",
            },
          }}>
          Add Location
        </Button>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="add-event-modal"
        style={{ backdropFilter: "blur(5px)" }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Box
          sx={{
            bgcolor: "white",
            border: 2,
            borderColor: "black",
            borderRadius: "15px",
            p: 2,
            minWidth: "500px",
          }}>
          <Typography sx={{ marginBottom: "20px" }} variant="h6" component="h2">
            Add an event
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="select-label">Category</InputLabel>
            <Select
              labelId="select-label"
              value={selectedCategory}
              onChange={handleCategoryChange}
              id="simple-select"
              label="Category">
              <MenuItem value={1}>Public Viewing</MenuItem>
            </Select>
            <CountrySelect label="Choose home country" onCountryChange={handleHomeCountryChange}/>
            <CountrySelect label="Choose away country" onCountryChange={handleAwayCountryChange}/>
            <TextField
              label="Title"
              variant="outlined"
              value={selectedTitle}
              onChange={handleTitleChange}
              margin="normal"
            />

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Date"
                sx={{ marginTop: "10px" }}
                inputFormat="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                minDate={new Date()}
                renderInput={(params) => (
                  <TextField {...params} variant="outlined" margin="normal" />
                )}
              />

              <TimePicker
                sx={{ marginTop: "20px" }}
                label="Time"
                value={selectedTime}
                onChange={handleTimeChange}
                ampm={false}
                renderInput={(params) => (
                  <TextField {...params} variant="outlined" margin="normal" />
                )}
              />
            </LocalizationProvider>
          </FormControl>
          <Box display="flex" justifyContent="flex-end">
            <Button
              disabled={
                !selectedCategory ||
                !selectedTitle ||
                !selectedDate ||
                !selectedTime
              }
              onClick={handleSaveEvent}
              variant="outlined"
              color="secondary"
              sx={{
                mt: 2,
                bgcolor: "#FFFF99",
                color: "black",
                border: 2,
                borderColor: "black",
                borderRadius: "10px",
                "&:hover": {
                  bgcolor: "gold",
                  border: 2,
                  borderColor: "black",
                },
              }}>
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default TopBar;
