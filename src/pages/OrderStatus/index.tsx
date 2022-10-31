import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Waitting from './Waitting';
import Done from './Done';
import Delivering from './Delivering';
import Cannel from './Cancel';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {/* box nhận  */}
      {value === index && (
        <div className=''>
              <Box sx={{ p: 4 }}>
          <Typography>{children}</Typography>
        </Box>
        </div>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function OrderStatus() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className='pt-[20px] max-w-[1342px] m-[auto] h-[500px] '>
          <Box sx={{ width: '100%',}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Chờ xác nhận" {...a11yProps(0)} />
          <Tab label="Đang giao hàng" {...a11yProps(1)} />
          <Tab label="Đã giao hàng" {...a11yProps(2)} />
          <Tab label="Đã hủy" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Waitting/>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Delivering/>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Done/>
      </TabPanel>

      <TabPanel value={value} index={3}>
       <Cannel/>
      </TabPanel>
    </Box>
    </div>

  );
}

