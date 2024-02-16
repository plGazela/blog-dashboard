import Logo from '../Logo';
import Menu from './Menu';

export default function Navbar() {
  return (
    <nav className='py-6 flex justify-between items-center'>
      <Logo />
      <Menu />
    </nav>
  );
}