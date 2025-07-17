import { FaPaperclip, FaSmile, FaMicrophone } from 'react-icons/fa';

const ChatArea = () => {
  return (
    <div className="flex-1 flex flex-col">
      {/* Chat Header */}
      <div className="p-4 border-b border-gray-300 flex items-center">
        <div className="w-10 h-10 rounded-full bg-blue-300 mr-3 flex items-center justify-center font-semibold">
          F
        </div>
        <div>
          <h2 className="font-semibold">Friend Name</h2>
          <p className="text-xs text-gray-500">Online</p>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        {[...Array(15)].map((_, i) => (
          <div key={i} className={`flex mb-4 ${i % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${i % 2 === 0 ? 'bg-blue-500 text-white' : 'bg-white border border-gray-200'}`}>
              Message {i + 1} - {i % 2 === 0 ? 'You sent this' : 'Friend sent this'}
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-gray-300 bg-white">
        <div className="flex items-center">
          <FaPaperclip className="text-gray-500 mx-3 cursor-pointer" />
          <input
            type="text"
            placeholder="Type a message"
            className="flex-1 py-2 px-4 rounded-full bg-gray-100 focus:outline-none"
          />
          <FaSmile className="text-gray-500 mx-3 cursor-pointer" />
          <FaMicrophone className="text-gray-500 ml-3 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ChatArea;