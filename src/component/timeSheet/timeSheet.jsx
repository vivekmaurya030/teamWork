import { Box } from '@mui/material';
import React,{useState} from 'react'
import './timeSheet.scss'
import { styled } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import AllTime from './timeSheetcmp/allTime';
import Divider from '@mui/material/Divider';

const AntTabs = styled(Tabs)({
  borderBottom: '1px solid #e8e8e8',
  '& .MuiTabs-indicator': {
    backgroundColor: 'transparent',
  
  },
});

const AntTab = styled((props) => <Tab {...props} />)(({ theme }) => ({
  textTransform: 'none',
  minWidth: 0,
  [theme.breakpoints.up('sx')]: {
    minWidth: 0,
  },
  fontWeight: 400,
  marginRight: theme.spacing(0),
  fontSize:"1.5rem",
  color: '#000001',
  fontFamily: [
    "Open Sans"
  ].join(','),
  '&:hover': {
    color: '#3457CC',
    opacity: 1,
  },
  '&.Mui-selected': {
    color: '#3457CC',
    fontWeight: 600,
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
}));






const TimeSheet = () => {
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    
    <div style={{ width: "100%"}} className='timeSheet'>
    <TabContext value={value} style={{minWidth:"600px",overflow:"auto"}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider',}}>
        <AntTabs onChange={handleChange} aria-label="lab API tabs example">
          <span style={{padding:"0 2rem",fontSize:"1.875rem",fontWeight:"600"}}>Time</span>
          <Divider orientation="vertical" variant="middle" flexItem />
          <AntTab label="My timesheet" value="1" />
          <Divider orientation="vertical" variant="middle" flexItem />
          <AntTab label="All time" value="2" />
        </AntTabs>
      </Box>
      <div className='tabPanel'>
      <TabPanel value="1" style={{paddingBottom:"0",paddingRight:"0",}}></TabPanel>
      <TabPanel value="2" style={{paddingBottom:"0",paddingRight:"0",}}><AllTime/></TabPanel>
      </div>
    </TabContext>
  </div>
  )
}

export default TimeSheet;
