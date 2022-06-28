import clsx from 'clsx';
import { NavItem } from '@atoms';
import { AiFillBook, AiFillHome, AiFillSetting } from 'react-icons/ai';

interface Props {}

const topPages = [
  {
    label: 'Home',
    href: '/',
    icon: <AiFillHome />,
  },
  {
    label: 'Expenses',
    href: '/expenses',
    icon: <AiFillBook />,
  },
];

const bottomPages = [
  {
    label: 'Settings',
    href: '/settings',
    icon: <AiFillSetting />,
  },
];

const SideNav: React.FC<Props> = () => (
  <nav className={clsx('h-full')}>
    <ul className="flex flex-col gap-2 h-full">
      {topPages.map((page) => (
        <NavItem key={page.href} {...page} />
      ))}

      <div className="grow" />

      {bottomPages.map((page) => (
        <NavItem key={page.href} {...page} />
      ))}
    </ul>
  </nav>
);

export default SideNav;
