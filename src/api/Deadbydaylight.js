 import axios from "axios";
 
export const fetchSurvivors = async () =>
{
    const survsResponse = await axios.get('https://thingproxy.freeboard.io/fetch/ https://dead-by-api.herokuapp.com/api/survs');
    
    return survsResponse.data.data;
}

export const fetchKillers = async () =>
{
    const killerResponse = await axios.get('https://dead-by-api.herokuapp.com/api/killers');
    return killerResponse.data.data;
}
