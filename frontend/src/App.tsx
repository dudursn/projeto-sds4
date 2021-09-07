import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import Navbar from "components/Navbar";

function App() {
    return (
        <>
            <Navbar />
            <div className="container">

                <h1 className="text-primary py-3">Dashboard de Vendas!</h1>

                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Porcentagem de Sucesso nas Vendas</h5>
                        <BarChart />
                    </div>
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Porcentagem de Vendas</h5>
                        <DonutChart />
                    </div>
                </div>

                <div className="py-3">
                    <h5 className="text-secondary">Todas as Vendas</h5>
                    <DataTable />
                </div>
                
            </div>
            <Footer />
        </>
    );
}

export default App;
