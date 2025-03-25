import NavLink from './nav-link';
import NavSearch from './nav-search';

export default function Navbar() {
  console.log('navbar');

  return (
    <div>
      <h1>Navbar</h1>
      <NavLink />
      <NavSearch />
    </div>
  );
}
