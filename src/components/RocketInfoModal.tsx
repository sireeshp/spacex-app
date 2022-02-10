import { useState, SyntheticEvent } from 'react';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Carousel from 'react-material-ui-carousel'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAppSelector, useAppDispatch } from '../hooks/hook';
import { toggleModal } from '../reducers/rocketSlice';
import { BootstrapDialog, BootstrapDialogTitle } from './BootstrapDialog';
import { TabPanel, a11yProps } from './TabPanel';
const RocketInfoDialog = () => {
    const { showModal, error, rocketInfo } = useAppSelector(state => state.rocket);
    const dispatch = useAppDispatch();

    const handleClose = () => {
        dispatch(toggleModal());
    };
    const [value, setValue] = useState(0);

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const TableRowSx = { '&:last-child td, &:last-child th': { border: 0 } };
    return (
        <div>
            {error && <Alert severity="error">{error}</Alert>}
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={showModal}>
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {rocketInfo?.name}
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <div className='carouselDiv'>
                        {rocketInfo?.flickr_images && <Carousel>
                            {rocketInfo.flickr_images.map(imgUrl => <img key={imgUrl}
                                className='response-img' src={imgUrl} alt="Images" />)}
                        </Carousel>}
                    </div>
                    <Typography gutterBottom>
                        {rocketInfo?.description}
                    </Typography>
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="Rocket Info Tabs">
                                <Tab label="Spec" {...a11yProps(0)} />
                                <Tab label="Engines" {...a11yProps(1)} />
                                <Tab label="First Stage" {...a11yProps(2)} />
                                <Tab label="Second Stage" {...a11yProps(3)} />
                                <Tab label="Pay Loads" {...a11yProps(4)} />

                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            <h4>Rocket Spec</h4>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="Rocket Spec table">
                                    <TableBody>
                                        <TableRow sx={TableRowSx}>
                                            <TableCell>Name</TableCell>
                                            <TableCell>{rocketInfo?.name}</TableCell>
                                        </TableRow>
                                        <TableRow sx={TableRowSx}>
                                            <TableCell>Type</TableCell>
                                            <TableCell>{rocketInfo?.type}</TableCell>
                                        </TableRow>
                                        <TableRow sx={TableRowSx}>
                                            <TableCell>Stages</TableCell>
                                            <TableCell>{rocketInfo?.stages}</TableCell>
                                        </TableRow>
                                        <TableRow sx={TableRowSx}>
                                            <TableCell>Boosters</TableCell>
                                            <TableCell>{rocketInfo?.boosters}</TableCell>
                                        </TableRow>
                                        <TableRow sx={TableRowSx}>
                                            <TableCell>Cost per Launch</TableCell>
                                            <TableCell>{rocketInfo?.cost_per_launch}</TableCell>
                                        </TableRow>
                                        <TableRow sx={TableRowSx}>
                                            <TableCell>Success Rate</TableCell>
                                            <TableCell>{rocketInfo?.success_rate_pct}</TableCell>
                                        </TableRow>
                                        <TableRow sx={TableRowSx}>
                                            <TableCell>First Flight</TableCell>
                                            <TableCell>{rocketInfo?.first_flight}</TableCell>
                                        </TableRow>
                                        <TableRow sx={TableRowSx}>
                                            <TableCell>Country</TableCell>
                                            <TableCell>{rocketInfo?.country}</TableCell>
                                        </TableRow>
                                        <TableRow sx={TableRowSx}>
                                            <TableCell>Company</TableCell>
                                            <TableCell>{rocketInfo?.company}</TableCell>
                                        </TableRow>
                                        <TableRow sx={TableRowSx}>
                                            <TableCell>Height</TableCell>
                                            <TableCell>{rocketInfo?.height.feet} ft</TableCell>
                                        </TableRow>
                                        <TableRow sx={TableRowSx}>
                                            <TableCell>Diameter</TableCell>
                                            <TableCell>{rocketInfo?.diameter.feet} ft</TableCell>
                                        </TableRow>
                                        <TableRow sx={TableRowSx}>
                                            <TableCell>Diameter</TableCell>
                                            <TableCell>{rocketInfo?.mass.kg} kg</TableCell>
                                        </TableRow>
                                        <TableRow sx={TableRowSx}>
                                            <TableCell>Landing Legs</TableCell>
                                            <TableCell>{rocketInfo?.landing_legs.number} </TableCell>
                                        </TableRow>
                                        <TableRow sx={TableRowSx}>
                                            <TableCell>Landing Legs Material</TableCell>
                                            <TableCell>{rocketInfo?.landing_legs.material} </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <h4>Rocket Engine info</h4>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="Rocket Engine table">
                                    <TableBody>
                                        <TableRow sx={TableRowSx}>
                                            <TableCell>Number</TableCell>
                                            <TableCell>{rocketInfo?.engines.number} </TableCell>
                                        </TableRow>
                                        <TableRow sx={TableRowSx}>
                                            <TableCell>Type</TableCell>
                                            <TableCell>{rocketInfo?.engines.type} </TableCell>
                                        </TableRow>
                                        <TableRow sx={TableRowSx}>
                                            <TableCell>Version</TableCell>
                                            <TableCell>{rocketInfo?.engines.version} </TableCell>
                                        </TableRow>
                                        <TableRow sx={TableRowSx}>
                                            <TableCell>Layout</TableCell>
                                            <TableCell>{rocketInfo?.engines.layout} </TableCell>
                                        </TableRow>
                                        <TableRow sx={TableRowSx}>
                                            <TableCell>Loss Max</TableCell>
                                            <TableCell>{rocketInfo?.engines.engine_loss_max} </TableCell>
                                        </TableRow>
                                        <TableRow sx={TableRowSx}>
                                            <TableCell>Propellant 1</TableCell>
                                            <TableCell>{rocketInfo?.engines.propellant_1} </TableCell>
                                        </TableRow>
                                        <TableRow sx={TableRowSx}>
                                            <TableCell>Propellant 2</TableCell>
                                            <TableCell>{rocketInfo?.engines.propellant_2} </TableCell>
                                        </TableRow>
                                        <TableRow sx={TableRowSx}>
                                            <TableCell>Thrust Sea Level </TableCell>
                                            <TableCell>{rocketInfo?.engines.thrust_sea_level.kN} kn </TableCell>
                                        </TableRow>
                                        <TableRow sx={TableRowSx}>
                                            <TableCell>Thrust vacuum </TableCell>
                                            <TableCell>{rocketInfo?.engines.thrust_vacuum.kN} kN </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <h4>Rocket First Stage</h4>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="Rocket Engine table">
                                    <TableBody>
                                        <TableRow sx={TableRowSx}>
                                            <TableCell>Reusable </TableCell>
                                            <TableCell><input type="checkbox" disabled checked={rocketInfo?.first_stage.reusable} /> </TableCell>
                                        </TableRow>
                                        <TableRow sx={TableRowSx}>
                                            <TableCell>Engines </TableCell>
                                            <TableCell>{rocketInfo?.first_stage.engines}</TableCell>
                                        </TableRow>
                                        <TableRow sx={TableRowSx}>
                                            <TableCell>Fuel Amount </TableCell>
                                            <TableCell>{rocketInfo?.first_stage.fuel_amount_tons} Tons</TableCell>
                                        </TableRow>
                                        <TableRow sx={TableRowSx}>
                                            <TableCell>Burn Time </TableCell>
                                            <TableCell>{rocketInfo?.first_stage.burn_time_sec} sec</TableCell>
                                        </TableRow>
                                        <TableRow sx={TableRowSx}>
                                            <TableCell>Thrust Sea Level </TableCell>
                                            <TableCell>{rocketInfo?.first_stage.thrust_sea_level.kN} kN</TableCell>
                                        </TableRow>
                                        <TableRow sx={TableRowSx}>
                                            <TableCell>Thrust Vacuum </TableCell>
                                            <TableCell>{rocketInfo?.first_stage.thrust_vacuum.kN} kN</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            <h4>Rocket Second Stage</h4>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="Rocket Engine table">
                                    <TableBody>
                                        <TableRow sx={TableRowSx}>
                                            <TableCell>Engines </TableCell>
                                            <TableCell>{rocketInfo?.second_stage.engines}</TableCell>
                                        </TableRow>
                                        <TableRow sx={TableRowSx}>
                                            <TableCell>Fuel Amount </TableCell>
                                            <TableCell>{rocketInfo?.second_stage.fuel_amount_tons} Tons</TableCell>
                                        </TableRow>
                                        <TableRow sx={TableRowSx}>
                                            <TableCell>Thrust </TableCell>
                                            <TableCell>{rocketInfo?.second_stage.thrust.kN} kN</TableCell>
                                        </TableRow>
                                        <TableRow sx={TableRowSx}>
                                            <TableCell>Payloads </TableCell>
                                            <TableCell>{rocketInfo?.second_stage.payloads.option_1} - {rocketInfo?.second_stage.payloads.option_2}</TableCell>
                                        </TableRow>
                                        <TableRow sx={TableRowSx}>
                                            <TableCell>Payloads Firing Height, Diameter </TableCell>
                                            <TableCell>{rocketInfo?.second_stage.payloads.composite_fairing.height.feet} ft , {rocketInfo?.second_stage.payloads.composite_fairing.diameter.feet} ft </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                            <h4>Rocket Payload Wights</h4>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="Rocket Engine table">
                                    <TableBody>
                                        {rocketInfo?.payload_weights && rocketInfo?.payload_weights.map(payload =>
                                            <TableRow sx={TableRowSx} key={payload.id}>
                                                <TableCell>{payload.name}</TableCell>
                                                <TableCell>{payload.kg} kg</TableCell>
                                            </TableRow>)}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </TabPanel>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Close
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}

export default RocketInfoDialog;