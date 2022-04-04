import "./home.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <div className="Home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        home container
      </div>
    </div>
  );
};

export default Home;
