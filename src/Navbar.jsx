import { PenLine } from 'lucide-react';

const Navbar = () => {
    

  return (
      <nav className="navbar flex justify-between items-center p-4">
          <h1 className="text-xl font-bold">Xblog</h1>
          <div className="flex items-center space-x-4">
             
              <a href="/" className="hover:text-gray-400">Home</a>
            
                  <button href="/create"
                      className="flex py-2 pl-3 pr-3 rounded transition"
                  > <PenLine className='mr-2 w-5' />
                      New Blog
                  </button>
              
          </div>
      </nav>
  );
};

export default Navbar;
