import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { SaleSuccess } from "types/sale";
import { round } from "utils/format";
import { BASE_URL } from "utils/requests";

type ChartData = {
    labels: {
        categories: string[],
    },
    series: [
        {
            name: "% Sucesso",
            data: number[]
        }
    ]
}

function BarChart() {

    const [chartData, setChartData] = useState<ChartData>({
        labels: {
            categories: [],
        },
        series: [
            {
                name: "% Sucesso",
                data: []
            }
        ]
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/sale-success-by-seller`)
            .then((response) => {

                const data = response.data as SaleSuccess[];
                const myLabelCategories = data.map(x => x.sellerName);
                const mySeriesData = data.map(x => round(100 * x.deals / x.visited, 1) );
                
                setChartData({
                    labels: {
                        categories: myLabelCategories,
                    },
                    series: [
                        {
                            name: "% Sucesso",
                            data: mySeriesData
                        }
                    ]
                });

            });

    }, []);

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

    return (
        <Chart
            options={{ ...options, xaxis: chartData.labels }}
            series={chartData.series}
            type="bar"
            height="240"
        />
    );

}
export default BarChart;