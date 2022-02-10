import { RocketModel } from '../models/RocketModel';
const fetchRocketInfo = async (rocketId: string): Promise<RocketModel> => {
    try {
        const fetchResponse = await fetch(`https://api.spacexdata.com/v4/rockets/${rocketId}`);
        const response = await fetchResponse.json();
        if (fetchResponse.status === 200) {
            return response;
        }
        throw response.error;
    } catch (error:any) {
        throw new Error(error);
    }
}

export default fetchRocketInfo;