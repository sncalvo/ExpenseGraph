import clsx from 'clsx';
import Link from 'next/link';

interface Props {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const NavItem: React.FC<Props> = ({ icon, label, href }) => (
  <Link href={href}>
    <li
      className={clsx(
        'rounded-sm bg-cyan-500 px-4 py-2 gap-2 flex flex-row items-center justify-start',
        'dark:text-white dark:bg-cyan-700',
        'hover:bg-cyan-300 dark:hover:bg-cyan-500',
        'transition-all duration-200 ease-in-out'
      )}
    >
      {icon}
      <a>{label}</a>
    </li>
  </Link>
);

export default NavItem;
