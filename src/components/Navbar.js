import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { addTask } from "../actions";
import { useDispatch } from "react-redux";

export default function Navbar(props) {
  const [open, setOpen] = React.useState(false);
  const [task, setTask] = React.useState("");
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleAdd = () => {
    handleClose();

    if (task !== "") {
      // dispatch add new task action
      console.log(task);
      // props.addTask(task);

      dispatch(addTask(task));
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="nav">
      {true && (
        <div className="back">
          <span class="material-symbols-outlined">arrow_back</span>
        </div>
      )}
      <div className="heading-div">
        <div className="heading">Trackify@Habbit</div>
      </div>

      <div>
        <Button variant="contained" onClick={handleClickOpen}>
          Add New Task
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add New Task</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="New Task"
              type="email"
              fullWidth
              variant="standard"
              onChange={e => setTask(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleAdd}>Add</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
