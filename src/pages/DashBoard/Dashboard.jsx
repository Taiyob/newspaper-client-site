import { Helmet } from "react-helmet-async";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="max-w-screen-3xl mx-auto p-5 sm:p-10 md:p-16 grid grid-cols-12">
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <aside className="w-full p-6 sm:w-60 dark:bg-gray-900 dark:text-gray-100 col-span-2">
        <nav className="space-y-8 text-sm">
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracki uppercase dark:text-gray-400">
              <Link to="/dashboard">Getting Started</Link>
            </h2>
            <div className="flex flex-col space-y-1">
              <Link to="/dashboard/approve-article" rel="noopener noreferrer">
                All Articles
              </Link>
              <Link rel="noopener noreferrer">Plugins</Link>
              <a rel="noopener noreferrer" href="#">
                Migrations
              </a>
              <a rel="noopener noreferrer" href="#">
                Appearance
              </a>
              <a rel="noopener noreferrer" href="#">
                Mamba UI
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracki uppercase dark:text-gray-400">
              Dashboard
            </h2>
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#">
                Header
              </a>
              <a rel="noopener noreferrer" href="#">
                Drawer
              </a>
              <a rel="noopener noreferrer" href="#">
                Page Title
              </a>
              <a rel="noopener noreferrer" href="#">
                Menus
              </a>
              <a rel="noopener noreferrer" href="#">
                Sidebar
              </a>
              <a rel="noopener noreferrer" href="#">
                Footer
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracki uppercase dark:text-gray-400">
              Pages
            </h2>
            <div className="flex flex-col space-y-1">
              <Link to="/" rel="noopener noreferrer">
                Homepage
              </Link>
              <a rel="noopener noreferrer" href="#">
                Users
              </a>
              <a rel="noopener noreferrer" href="#">
                Tools
              </a>
              <a rel="noopener noreferrer" href="#">
                Settings
              </a>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracki uppercase dark:text-gray-400">
              Misc
            </h2>
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#">
                Tutorials
              </a>
              <a rel="noopener noreferrer" href="#">
                Changelog
              </a>
            </div>
          </div>
        </nav>
      </aside>
      <div className="w-full p-6 sm:w-60 md:w-5/6 col-span-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
