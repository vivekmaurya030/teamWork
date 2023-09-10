import CloseIcon from "@mui/icons-material/Close";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import moment from "moment";
import dayjs from "dayjs";
import dateFormat from 'dateformat';
import React, { useState, useEffect } from "react";
import "./allTime.scss";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  FormControl,
  MenuItem,
  Select,
  TableContainer,
} from "@mui/material";
import ArrowRight from "../../../assests/arrowright2.svg";
import Sort from "../../../assests/sort.svg";
import More from "../../../assests/more.svg";
import Timer from "../../../assests/timer1.svg";
import LogTimer from "../../../assests/logtimer1.svg";
import Lock from "../../../assests/lock1.svg";


const AllTime = () => {
  const [startTime, setStartTime] = useState(dayjs());
  const [endTime, setEndTime] = useState(dayjs());
  const [spentHours, setSpentHours] = useState(null);
  const [spentMinutes, setSpentMinutes] = useState(null);
  const [open, setOpen] = useState(false);
  const [openTask, setOpenTask] = useState(false);
  const [newProjectList, setNewProjectList] = useState([]);
  const [projectList, setProjectList] = useState({
    project: "",
    date: "",
    startTime: startTime,
    endTime: endTime,
    hours: spentHours,
    minutes: spentMinutes,
    descrip: "",
    task:"",
    billable:true,
  });

  const clearProjectList =()=>{
    setProjectList({})
  }
  const handleAdd = () => {
    const newList = [...newProjectList, projectList];
    setNewProjectList(newList);
    console.log(newProjectList);
    
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpenTask = () => {
    setOpenTask(true);
  };

  const handleCloseTask = () => {
    setOpenTask(false);
    setProjectList((arg)=>(arg.task===""))
  };

  const handleTaskSubmit = () =>{
    setOpenTask(false)
  }
  function calculateTimeSpent() {
    if (startTime && endTime) {
      const startMillis = startTime.$d.getTime();
      const endMillis = endTime.$d.getTime();
      const timeDifferenceMillis = endMillis - startMillis;

      // Convert timeDifferenceMillis to hours and minutes
      const hours = Math.floor(timeDifferenceMillis / (1000 * 60 * 60));
      const minutes = Math.floor(
        (timeDifferenceMillis % (1000 * 60 * 60)) / (1000 * 60)
      );
      setSpentHours(hours);
      setSpentMinutes(minutes);
      console.log(`Time spent: ${hours} hours and ${minutes} minutes`);
      return { hours, minutes };
    } else {
      console.log("Please select both start and end times.");
    }
  }

  useEffect(() => {
    console.log(projectList);
    calculateTimeSpent();
  }, [startTime, endTime]);

  const TableHeadCellStyle = {
    color: "rgba(0, 0, 0, 0.70)",
    textAlign: "left",
    fontFamily: "Open Sans",
    fontSize: ".9rem",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "1.25rem",
  };

  const TableBodyCellStyle = {
    color: "rgba(0, 0, 0, 0.70)",
    textAlign: "left",
    fontFamily: "Open Sans",
    fontSize: ".9rem",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "1.25rem",
  };
  const Data = [
    
    {
      day: "Tuesday",
      date: "13June",
      Project: "Domino(Bytive)",
      who: "Shristi",
      Descrip: "Test Lorem Ipsum is dummy text",
      taskList: "My List",
      start: "3:47PM",
      end: "6:17PM",
      billable: true,
      billed: false,
      time: "2h30m",
      hours: 2.5,
    },
    {
      day: "Tuesday",
      date: "13June",
      Project: "Domino(Bytive)",
      who: "Shristi",
      Descrip: "Test Lorem Ipsum is dummy text",
      taskList: "My List",
      start: "3:47PM",
      end: "6:17PM",
      billable: true,
      billed: false,
      time: "2h30m",
      hours: 2.5,
    },
    {
      day: "Tuesday",
      date: "13June",
      Project: "Domino(Bytive)",
      who: "Shristi",
      Descrip: "Test Lorem Ipsum is dummy text",
      taskList: "My List",
      start: "3:47PM",
      end: "6:17PM",
      billable: false,
      billed: false,
      time: "2h30m",
      hours: 2.5,
    },
    {
      day: "Tuesday",
      date: "13June",
      Project: "Domino(Bytive)",
      who: "Shristi",
      Descrip: "Test Lorem Ipsum is dummy text",
      taskList: "My List",
      start: "3:47PM",
      end: "6:17PM",
      billable: true,
      billed: false,
      time: "2h30m",
      hours: 2.5,
    },
  ];
  return (
    <div className="allTime">
      <div className="allTimeContainer">
        <div className="allTime-row1">
          <span className="arrow">
            <img src={ArrowRight} alt="" />
          </span>
          <span className="subHeading">
            <h3>All time</h3>
          </span>
          <span className="btns">
            <button className="btn">
              <span className="btn-inner">
                <img src={Sort} alt="" />
              </span>
            </button>
            <button
              className="btn"
              style={{ color: "white", background: "#3457CC" }}
            >
              <span className="btn-inner">
                <img src={Timer} alt="" />
                <p style={{ color: "#fff" }}>Start timer</p>
              </span>
            </button>
            <button className="btn" onClick={handleClickOpen} >
              <span className="btn-inner">
                <img src={LogTimer} alt="" />
                <p>Log time</p>
              </span>
            </button>
            <button className="btn">
              <span className="btn-inner">
                <img src={More} alt="" />
              </span>
            </button>
          </span>
        </div>
        <div className="allTime-row2">
          <span className="row2-col">Filtered Totals:</span>
          <span className="row2-col">Logged:6h 55m</span>
          <span className="row2-col">Billable:6h 55m</span>
          <span className="row2-col">Billed:6h 55m</span>
        </div>
        <div className="allTime-row3">
          {Data.map((item, index) => (
            <div>
              <div className="tab-row-date">
                <h1>
                  {item.day}, {item.date}
                </h1>
              </div>
              <TableContainer >
              <Table sx={{ width: "100%" }} className="table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      style={{ ...TableHeadCellStyle, padding: "1rem 0" }}
                    >
                      Project
                    </TableCell>
                    {[
                      "Who",
                      "Description",
                      "Task List",
                      "Start",
                      "End",
                      "Billable",
                      "Billed",
                      "Time",
                      "Hours",
                    ].map((item) => (
                      <TableCell style={TableHeadCellStyle}>{item}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow sx={{ width: "100%" }}>
                    <TableCell
                      style={{ ...TableBodyCellStyle, padding: "1rem 0" }}
                    >
                      {item.Project}
                    </TableCell>
                    <TableCell style={TableBodyCellStyle}>{item.who}</TableCell>
                    <TableCell style={TableBodyCellStyle}>
                      {item.Descrip}
                    </TableCell>
                    <TableCell style={TableBodyCellStyle}>
                      {item.taskList}
                    </TableCell>
                    <TableCell style={TableBodyCellStyle}>
                      {item.start}
                    </TableCell>
                    <TableCell style={TableBodyCellStyle}>{item.end}</TableCell>
                    <TableCell>
                      <p style={{ textAlign: "center" }}>
                        {item.billable ? (
                          <span className="ifTrue">
                            <CheckCircleOutlineOutlinedIcon />
                          </span>
                        ) : (
                          <span className="ifFalse">
                            <CancelOutlinedIcon />
                          </span>
                        )}
                      </p>
                    </TableCell>
                    <TableCell>
                      <p style={{ textAlign: "center" }}>
                        {item.billed ? (
                          <span className="ifTrue">
                            <CheckCircleOutlineOutlinedIcon />
                          </span>
                        ) : (
                          <span className="ifFalse">
                            <CancelOutlinedIcon />
                          </span>
                        )}
                      </p>
                    </TableCell>
                    <TableCell style={TableBodyCellStyle}>
                      {item.time}
                    </TableCell>
                    <TableCell style={TableBodyCellStyle}>
                      ({item.hours})
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              </TableContainer>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                  border: "none",
                  textAlign: "right",
                  padding: "1rem 0",
                }}
              >
                <span style={{ marginLeft: "1rem" }}>
                  <b>Total: </b>
                  {item.time} ({item.hours})
                </span>
                <span style={{ marginLeft: "1rem" }}>
                  <b>Billable Time: </b>
                  {item.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Dialog
        open={open}
        // onClose={handleClose}
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "1150px", // Set your width here
            },
          },
          // top: "-40%",
          // right:"-10%"
        }}
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{
            borderBottom: ".75px solid grey",
            margin: "1rem 2.5rem",
            padding: "1rem 0",
          }}
          className="DialogTitle"
        >
          <span>
            <h1>Quickly Add Time Across All Your Project</h1>
          </span>
          <span>
            <CloseIcon onClick={handleClose} style={{ cursor: "pointer" }} />
          </span>
        </DialogTitle>
        <DialogContent>
          <div className="dialog-row1">
            <div className="dialog-row1-col">
              <span className="dialog-row1-col-head">Project</span>
              <span className="dialog-row1-col-box">
                <FormControl
                  size="large"
                  fullWidth
                  sx={{ minWidth: "120px", padding: "0", margin: "0" }}
                >
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    onChange={(e) =>
                      setProjectList((prev) => ({
                        ...prev,
                        project: e.target.value,
                      }))
                    }
                    placeholder="Select project"
                    sx={{
                      padding: "0",
                      maxWidth: "150px",
                    }}
                  >
                    {["Project1", "Project2", "Project3"].map((item) => (
                      <MenuItem value={item}>{item}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </span>
            </div>
            <div className="dialog-row1-col">
              <span className="dialog-row1-col-head">Date</span>
              <span className="dialog-row1-col-box">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    sx={{ padding: "0" }}
                    components={["DatePicker"]}
                  >
                    <DatePicker
                      slotProps={{
                        inputAdornment: {
                          position: "start",
                        },
                        textField: {
                          fullWidth: true,
                        },
                        
                      }}
                      formatDate={(date) => moment(date).format('DD/MM/YYYY')}
                      inputFormat="dd/MM/yyyy"
                      onChange={(e) =>
                        setProjectList((prev) => ({
                          ...prev,
                          date: moment(e.$d).format(),
                        }))
                        
                      }
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </span>
            </div>
            <div className="dialog-row1-col">
              <span className="dialog-row1-col-head">Start time</span>
              <span className="dialog-row1-col-box">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    sx={{ padding: "0" }}
                    components={["TimePicker"]}
                  >
                    <TimePicker
                      slotProps={{
                        inputAdornment: {
                          position: "start",
                        },
                      }}
                      viewRenderers={{
                        hours: renderTimeViewClock,
                        minutes: renderTimeViewClock,
                        seconds: renderTimeViewClock,
                      }}
                      onChange={(newStartTime) => {
                        setStartTime(newStartTime);
                        calculateTimeSpent();
                      }}
                      
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </span>
            </div>
            <div className="dialog-row1-col">
              <span className="dialog-row1-col-head">End time</span>
              <span className="dialog-row1-col-box">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    sx={{ padding: "0" }}
                    components={["TimePicker"]}
                  >
                    <TimePicker
                      slotProps={{
                        inputAdornment: {
                          position: "start",
                        },
                        textField: {
                          fullWidth: true,
                        },
                      }}
                      viewRenderers={{
                        hours: renderTimeViewClock,
                        minutes: renderTimeViewClock,
                        seconds: renderTimeViewClock,
                      }}
                      onChange={(newEndTime) => {
                        setEndTime(newEndTime);
                        calculateTimeSpent();
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </span>
            </div>
            <div className="dialog-row1-col">
              <span className="dialog-row1-col-head">Time Spent</span>
              <span className="dialog-row1-col-box">
                <span className="timeSpent-box">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    helperText="hours"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </span>
                <span className="timeSpent-box">
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                    helperText="minutes"
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </span>
              </span>
            </div>
            <div
              className="dialog-row1-col"
              style={{
                width: "100px",
                padding: "0 .5vw",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img src={Lock} alt="" />
            </div>
          </div>
          <div className="dialog-row2">
            <span className="dialog-row2-col-head">Description</span>
            <span className="dialog-col2-body">
              <TextField
                id="outlined-basic"
                variant="outlined"
                multiline
                rows={3.5}
                fullWidth
                style={{ paddingTop: ".5rem" }}
                onChange={(e) =>
                  setProjectList((prev) => ({
                    ...prev,
                    descrip: e.target.value,
                  }))
                }
              />
            </span>
          </div>
          <div className="dialog-row3">
            <button className="add-btn" onClick={handleAdd}>
              Add
            </button>
          </div>
          {newProjectList.length!==0 && <div className="dialog-row4">
            <Table sx={{ width: "100%" }}>
              <TableHead>
                <TableRow>
                  <TableCell
                    style={{ ...TableHeadCellStyle, padding: "1rem 0" }}
                  >
                    Project
                  </TableCell>
                  {[
                    "Date",
                    "Start Time",
                    "Hours",
                    "Minutes",
                    "Description",
                    "Task",
                    "Billable",
                    "End",
                  ].map((item) => (
                    <TableCell style={TableHeadCellStyle}>{item}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {newProjectList.map((item,index)=>(
                  <TableRow sx={{ width: "100%" }}>
                  <TableCell
                    style={{ ...TableBodyCellStyle, padding: "1rem 0" }}
                  >
                    {item.project}
                  </TableCell>
                  <TableCell style={TableBodyCellStyle}>
                  {dateFormat(item?.date,"dd/mm/yyyy")}
                  </TableCell>
                  <TableCell style={TableBodyCellStyle}>
                    {item.startTime.$d.getTime()}
                  </TableCell>
                  <TableCell style={TableBodyCellStyle}>
                    {item.hours}
                  </TableCell>
                  <TableCell style={TableBodyCellStyle}>
                    {item.minutes}
                  </TableCell>
                  <TableCell style={TableBodyCellStyle}>
                    {item.descrip}
                  </TableCell>{" "}
                  <TableCell style={TableBodyCellStyle}>
                    {item.task === "" ? <span style={{color:"rgba(0, 10, 255, 0.70)",cursor:"pointer"}} onClick={handleOpenTask}>Choose Task</span >: item.task}
                  </TableCell>
                  <TableCell style={TableBodyCellStyle}>
                    {item.billable ? "Billable":"Not Billable"}
                  </TableCell>
                  <TableCell style={{...TableBodyCellStyle,color: "red",textDecoration:"underline", cursor:"pointer"}}>
                    Delete
                  </TableCell>
                </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>}
        </DialogContent>
        <DialogActions
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "1rem 2rem",
            paddingBottom: "2rem",
          }}
        >
          <span onClick={handleClose} className="close-btn">
            Close
          </span>
          <span>
            <span
              style={{
                fontSize: ".875rem",
                fontWeight: "400",
                paddingRight: "1rem",
                color: "#000",
                fontFamily: "Open Sans",
              }}
            >
              0min
            </span>
            <span className="dialog-btns">
              <button className="btn" onClick={handleOpenTask}>Log these time entries</button>
            </span>
          </span>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openTask}
        // onClose={handleClose}
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "600px", // Set your width here
            },
          },
          top: "-20vh",
          // right:"-10%"
        }}
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{
            borderBottom: ".75px solid grey",
            margin: "1rem 2.5rem",
            padding: "1rem 0",
          }}
          className="DialogTitle"
        >
          <span>
            <h1>Choose an Existing Task</h1>
          </span>
          <span>
            <CloseIcon onClick={handleCloseTask} style={{ cursor: "pointer" }} />
          </span>
        </DialogTitle>
        <DialogContent>
          <div className="dialog-row1">
              <span className="dialog-row1-col-head">Project</span>
              <span className="dialog-row1-col-box" style={{width:"100%"}}>
                <FormControl
                  size="small"
                  fullWidth
                  sx={{ minWidth: "120px", padding: "0", margin: "0" }}
                >
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    onChange={(e) =>
                      setProjectList((prev) => ({...prev, task: e.target.value}))
                    }
                    placeholder="Choose a project..."
                    sx={{
                      padding: "0",
                      maxWidth: "100%",
                    }}
                  >
                    {["Task1", "Task2", "Task3"].map((item) => (
                      <MenuItem value={item}>{item}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </span>
            </div>
        </DialogContent>
        <DialogActions
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "1rem 2rem",
            paddingBottom: "2rem",
          }}
        >
          <span onClick={handleCloseTask} className="close-btn">
            Close
          </span>
          <span>
            <span className="dialog-btns">
              <button className="btn" onClick={handleTaskSubmit}>Select Task</button>
            </span>
          </span>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AllTime;
