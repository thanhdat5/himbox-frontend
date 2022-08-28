import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const HIMPriceHistory = () => {
    const labels = ['Q4/2022 - Q2/2023', 'Q3/2023', 'Q4/2023', 'Q1/2024', 'Q2/2024', 'Q3/2024', '2025', '2026'];
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
    const data = {
        labels,
        datasets: [
            {
                label: 'Price',
                data: [1, 3, 5, 10, 20, 50, 80, 150],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderRadius : 10 
            },
            {
                label: 'Users',
                data: [1, 2, 5, 10, 25, 50, 100, 200],
                backgroundColor: '#e6007a',
                borderRadius : 10 
            },
        ],
    }

    return <div className="hb-price-history">
        <div className="hb-section-title">HIM Price History</div>
        <div>
            <Bar options={options} data={data} />
        </div>
    </div>
}
export default HIMPriceHistory;