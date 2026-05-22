import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function Reports() {
  return (

    <div className='layout'>

      <Sidebar />

      <div className='main-content'>

        <Navbar />

        <div className='page-content'>

          <h1>Weekly Reports</h1>

        </div>

      </div>

    </div>
  );
}

export default Reports;