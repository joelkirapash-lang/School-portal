
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function Dashboard() {
  return (

    <div className='layout'>

      <Sidebar />

      <div className='main-content'>

        <Navbar />

        <div className='page-content'>

          <h1>Dashboard</h1>

          <p>
            Welcome to the School Portal
          </p>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;