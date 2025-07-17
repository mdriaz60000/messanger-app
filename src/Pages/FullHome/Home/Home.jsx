import ChatArea from "../../../Components/ChatAria/ChatAria";
import Container from "../../../Components/Shared/Container";
import Sidebar from "../../../Components/SideBar/Sidebar";


const Home = () => {
    return (
       <Container>
       <div className="flex flex-1 h-full overflow-hidden">
        <Sidebar />
        <ChatArea />
        </div>
       </Container>

    );
};

export default Home;