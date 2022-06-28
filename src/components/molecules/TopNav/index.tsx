import { Button } from '@atoms';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AiFillCaretRight, AiOutlineMenu } from 'react-icons/ai';

const TopNav: React.FC = () => {
  const router = useRouter();

  // Get paths for breadcrumps
  const paths = router.asPath.split('/').filter(Boolean);
  const breadcrumps = paths.map((path, index) => {
    const href = `/${paths.slice(0, index + 1).join('/')}`;
    return {
      label: path,
      href,
    };
  });

  return (
    <nav className={clsx('w-full items-center bg-cyan-500', 'dark:bg-cyan-700 p-2 rounded-b-sm')}>
      <div className="flex items-center gap-3">
        <Button onClick={() => {}} outline>
          <AiOutlineMenu />
        </Button>

        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          {breadcrumps.map((breadcrump, index) => (
            <li
              key={breadcrump.href}
              className="inline-flex items-center"
              aria-current={index + 1 === paths.length ? 'page' : undefined}
            >
              <Link href={breadcrump.href}>
                <a className="text-white hover:text-gray-300 inline-flex items-center capitalize">
                  {breadcrump.label}
                  {index + 1 !== paths.length && <AiFillCaretRight />}
                </a>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default TopNav;
