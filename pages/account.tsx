import * as React from 'react';
import Layout from '../components/Layout';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


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
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
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

 const  Account = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Layout
    title='Account'
    >
    <Box sx={{ width: '100%', margin: '3em 0px' }}>
      <Box sx={{ borderColor: 'divider', width:'fit-content', margin:'auto' }}>
        <Tabs
         value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab sx={{textTransform: 'capitalize', fontWeight: '700', fontSize: '15px'}}  label="Open Fundraisers" {...a11yProps(0)} />
          <Tab sx={{textTransform: 'capitalize', fontWeight: '700', fontSize: '15px'}} label="Fundraiser History" {...a11yProps(1)} />
          <Tab sx={{textTransform: 'capitalize' ,fontWeight: '700', fontSize: '15px'}} label="NFT Bagdes" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {/* <span>
          <h1 className='title text-[#1F1F1F] font-bold text-lg'>My Fundraisers</h1>
          <span> */}
            cards
          {/* </span>
        </span> */}
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
    </Layout>
  );
}

export default Account;






