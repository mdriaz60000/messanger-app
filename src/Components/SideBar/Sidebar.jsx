import { FaUserPlus, FaComment, FaEllipsisH, FaSearch } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-80 bg-gray-100 border-r border-gray-300 flex flex-col">
      {/* Sidebar Header */}
      <div className="p-4 flex justify-between items-center border-b border-gray-300">
        <h2 className="text-xl font-semibold">Chats</h2>
        <div className="flex space-x-4">
          <FaUserPlus className="text-gray-600 cursor-pointer" />
          <FaComment className="text-gray-600 cursor-pointer" />
          <FaEllipsisH className="text-gray-600 cursor-pointer" />
        </div>
      </div>

      {/* Search */}
      <div className="p-3 border-b border-gray-300">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Messenger"
            className="w-full py-2 px-4 pl-10 rounded-lg bg-gray-200 focus:outline-none"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="p-3 flex items-center hover:bg-gray-200 cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-blue-300 mr-3 flex items-center justify-center font-semibold">
              {String.fromCharCode(65 + i)}
            </div>
            <div>
              <h3 className="font-medium">Friend {i + 1}</h3>
              <p className="text-sm text-gray-500">Last message preview...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;