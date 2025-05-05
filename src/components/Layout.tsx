import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const Layout = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed bottom-8 right-8 z-50">
        <Navigation />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;