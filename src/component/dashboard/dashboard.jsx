import React, { useState } from "react";
import { Box, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import "./dashboard.scss";
import { Link } from "react-router-dom";
import logo from "../../assests/logoTeamWork.svg";
import Home from "../home/home";
import Client from "../client/client";
import Project from '../project/project';
import TimeSheet from '../timeSheet/timeSheet';
import ClientIcon from '../../assests/Client.svg'
import ProjectIcon from '../../assests/Project.svg'
import HomeIcon from '../../assests/home.svg'
import TimeSheetIcon from '../../assests/timeSheet.svg'


const Dashboard = () => {
  const [active, setActive] = useState("home");

  const handleActive = (item) => {
    setActive(item);
  };
  const menuArray=[
      {componentName: "home",menuName:"Home",icon:{HomeIcon}},
      {componentName: "timeSheet",menuName:"Timesheet",icon:{TimeSheetIcon}},
      {componentName: "client",menuName:"Client",icon:{ClientIcon}},
      {componentName: "project",menuName:"Project",icon:{ProjectIcon}},

  ]
  const componentMap = {
    home: <Home />,
    timeSheet: <TimeSheet />,
    client: <Client />,
    project: <Project />,
  };
  const ListBtnStyle ={
    padding:"10px 0",
    margin:"10px 0",

  }
  return (
    <Box className="dashboard-container" display={"flex"}>
      <Box className="sideNav" >
        <Box className="logo">
          <img src={logo} alt="logo" />
        </Box>
        <Box className="menu">
          
          <List className="list">
            <ListItemButton onClick={() => handleActive("home")} className={active === "home" ? "active" : ""} sx={ListBtnStyle}>
              <ListItemIcon className="listIcon" style={{minWidth:"35px"}}>
                <img src={HomeIcon} alt="" />
              </ListItemIcon>
              <ListItemText className="listText">
                <p>Home</p>
              </ListItemText>
            </ListItemButton>
            
            <ListItemButton onClick={() => handleActive("timeSheet")} className={active === "timeSheet" ? "active" : ""} sx={ListBtnStyle}>
              <ListItemIcon className="listIcon" style={{minWidth:"35px"}}>
             <img src={TimeSheetIcon} alt="" />
              </ListItemIcon>
              <ListItemText className="listText">
                <p>Timesheet</p>
              </ListItemText>
            </ListItemButton>
            <ListItemButton onClick={() => handleActive("client")} className={active === "client" ? "active" : ""} sx={ListBtnStyle}>
              <ListItemIcon className="listIcon" style={{minWidth:"35px"}}>
              <img src={ClientIcon} alt="" />
              </ListItemIcon>
              <ListItemText className="listText">
                <p>Client</p>
              </ListItemText>
            </ListItemButton>
            <ListItemButton onClick={() => handleActive("project")} className={active === "project" ? "active" : ""} sx={ListBtnStyle}>
              <ListItemIcon className="listIcon" style={{minWidth:"35px"}}>
              <img src={ProjectIcon} alt="" />
              </ListItemIcon>
              <ListItemText className="listText">
                <p>Project</p>
              </ListItemText>
            </ListItemButton>
            
          </List>
        </Box>
      </Box>
      <Box className="container">
        {componentMap[active]}
      </Box>
    </Box>
  );
};

export default Dashboard;
