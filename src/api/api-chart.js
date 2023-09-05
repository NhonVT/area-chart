import axios from "axios";

const chartApi = {
    async getChartData() {
        const url = "https://45.10.46.161:1994/api/moplan/4500";
        return await axios.get(url);
    },
};
export default chartApi;
