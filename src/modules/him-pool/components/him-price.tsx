import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { get } from 'lodash';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { formatEpochTime } from '../../../utils';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom' as const,
        },
        title: {
            display: false,
        },
    },
};

const HIMPriceHistory = () => {

    const himPoolConfig = useSelector(state => get(state, 'himPool.himPoolConfig', null));

    const [data, setData] = useState<any>({
        labels: [],
        datasets: []
    });

    useEffect(() => {
        if (himPoolConfig) {
            let tempLabels = [];
            let tempDatasets: any = {
                label: 'Price',
                data: [],
                backgroundColor: '#e6007a',
                borderRadius: 10

            };
            for (let i = 0; i < himPoolConfig[0].length; i++) {
                if (himPoolConfig[3][i]) {
                    tempLabels.push(formatEpochTime(himPoolConfig[0][i], himPoolConfig[1][i]));
                    tempDatasets.data.push(Number(himPoolConfig[2][i]) / 10 ** 2);
                }
            }
            setData({ labels: tempLabels, datasets: [tempDatasets] });
        }
    }, [himPoolConfig]);

    return <div className="hb-price-history">
        <div className="hb-sect-title">HIM Price Roadmap</div>
        <div>
            {data && data?.labels && data?.datasets &&
                <Bar options={options} data={data} />
            }
        </div>
    </div>
}
export default HIMPriceHistory;