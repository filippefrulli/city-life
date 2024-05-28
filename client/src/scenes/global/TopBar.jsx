import {
  Box,
  Typography,
  Button,
  Modal,
  TextField,
  FormControl,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState, useCallback } from "react";
// "Pro Plan"
import {
  DatePicker,
  TimePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";

const TopBar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());

  const handleDateChange = useCallback((newDate) => {
    setSelectedDate(newDate);
  }, []);

  const handleTimeChange = useCallback((newTime) => {
    setSelectedTime(newTime);
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
            minWidth: "300px",
          }}>
          <Typography variant="h6" component="h2">
            Add an event
          </Typography>
          <FormControl fullWidth>
            <TextField label="Title" variant="outlined" margin="normal" />

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

            <TextField
              label="Description"
              variant="outlined"
              margin="normal"
              multiline
              rows={4}
            />
          </FormControl>
          <Box display="flex" justifyContent="flex-end">
            <Button
              variant="outlined"
              color="secondary"
              sx={{
                mt: 2,
                bgcolor: "yellow",
                color: "black",
                border: 2,
                borderColor: "black",
                borderRadius: "10px",
                "&:hover": {
                  bgcolor: "yellow",
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
