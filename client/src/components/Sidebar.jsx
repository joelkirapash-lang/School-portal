import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className='sidebar'>

      <h2>Menu</h2>

      <ul>

        <li>
          <Link to='/dashboard'>
            Dashboard
          </Link>
        </li>

        <li>
          <Link to='/notes'>
            Notes
          </Link>
        </li>

        <li>
          <Link to='/reports'>
            Reports
          </Link>
        </li>

      </ul>

    </aside>
  );
}

export default Sidebar;