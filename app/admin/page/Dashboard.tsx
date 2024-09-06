import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Đăng ký các scale và thành phần cần thiết
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
        {
            label: 'Earnings',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgba(75,192,192,1)',
        },
        {
            label: 'Costs',
            data: [45, 39, 60, 51, 46, 45, 30],
            fill: false,
            borderColor: '#742774',
        },
    ],
};

const Dashboard = () => {
    return (
        <div className="p-4">
            {/* Biểu đồ */}
            <div className="mt-8">
                <div className="bg-white shadow p-4 rounded-lg">
                    <h2 className="text-lg font-bold mb-4">Sales Performance</h2>
                    <Line data={data} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
