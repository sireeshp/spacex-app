import { LaunchModel } from '../models/LaunchModel';
const fetchLaunches = async (): Promise<Array<LaunchModel>> => {
    try {
        const fetchResponse = await fetch('https://api.spacexdata.com/v5/launches');
        const results: Array<LaunchModel> = await fetchResponse.json();
        if (results) {
            results.forEach((element: any) => {
                if (element.date_utc) {
                    element.date_utc = new Date(element.date_utc);
                }
            });
            results.sort((a, b) => b.date_utc.valueOf() - a.date_utc.valueOf());
            return results.slice(0, 50);
        }
        return [];
    } catch (error: any) {
        throw new Error(error);
    }
}

export default fetchLaunches;