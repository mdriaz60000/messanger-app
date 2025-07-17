import { FaFacebookMessenger, FaSearch, FaHome, FaUserFriends, FaCog, FaSignOutAlt } from 'react-icons/fa';
import Container from '../Container';

const Navbar = () => {
    return (
        <
        <nav className="bg-blue-500 text-white shadow-md">
            <Container>
                <div className="flex justify-between items-center p-4">
                    {/* Left side - Logo */}
                    <div className="flex items-center space-x-2">
                        <FaFacebookMessenger className="text-2xl" />
                        <span className="font-bold text-xl">Bytes</span>
                    </div>

                    {/* Middle - Search bar */}
                    <div className="flex-1 max-w-md mx-4">
                        <div className="relative">
                            <input 
                                type="text" 
                                placeholder="Search messages or people..." 
                                className="w-full py-2 px-4 pl-10 rounded-full bg-blue-400 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            />
                            <FaSearch className="absolute left-3 top-3 text-blue-200" />
                        </div>
                    </div>

                    {/* Right side - Navigation links */}
                    <ul className="flex items-center space-x-6">
                        <li className="hover:bg-blue-400 p-2 rounded-full cursor-pointer">
                            <FaHome className="text-xl" />
                        </li>
                        <li className="hover:bg-blue-400 p-2 rounded-full cursor-pointer">
                            <FaUserFriends className="text-xl" />
                        </li>
                        <li className="hover:bg-blue-400 p-2 rounded-full cursor-pointer">
                            <FaCog className="text-xl" />
                        </li>
                        <li className="hover:bg-blue-400 p-2 rounded-full cursor-pointer">
                            <FaSignOutAlt className="text-xl" />
                        </li>
                        <li>
                            <div className="w-8 h-8 rounded-full bg-blue-300 flex items-center justify-center font-semibold">
                                U
                            </div>
                        </li>
                    </ul>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;