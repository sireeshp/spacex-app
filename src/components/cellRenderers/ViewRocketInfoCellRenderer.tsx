import Button from '@mui/material/Button';
import { useAppDispatch } from '../../hooks/hook';
import { getRocketInfoAsync } from '../../reducers/rocketSlice';

const ViewRocketInfoCellRenderer = (props: any) => {
    const dispatch = useAppDispatch();
    const buttonClicked = () => {
        const rocketId: string = props.data.rocket;
        dispatch(getRocketInfoAsync(rocketId));
    };

    return (
        <Button size="small" variant="outlined" onClick={() => buttonClicked()}>View Rocket Info</Button>
    );
};

export default ViewRocketInfoCellRenderer;