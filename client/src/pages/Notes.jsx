import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function Notes() {
  return (

    <div className='layout'>

      <Sidebar />

      <div className='main-content'>

        <Navbar />

        <div className='page-content'>

          <h1>Lesson Notes</h1>

        </div>

      </div>

    </div>
  );
}

export default Notes;