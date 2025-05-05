import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  const links = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT' },
    { path: '/career', label: 'CAREER' },
    { path: '/works', label: 'WORKS' },
    { path: '/information', label: 'INFORMATION' }
  ];

  return (
    <nav className="flex flex-col items-end space-y-4">
      {links.map(({ path, label }) => (
        <Link
          key={path}
          to={path}
          className={`text-sm tracking-wider transition-colors ${
            location.pathname === path
              ? 'text-blue-400'
              : 'text-white/70 hover:text-white'
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;