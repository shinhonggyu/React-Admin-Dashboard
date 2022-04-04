import "./list.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

const List = () => {
  return (
    <div className="List">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        datatable
      </div>
    </div>
  );
};

export default List;
