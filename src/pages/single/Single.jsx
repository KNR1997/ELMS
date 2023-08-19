import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { db } from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const Single = () => {
  const [data, setData] = useState([]);
  const user = useContext(AuthContext);
  const usersCollectionRef = collection(db, "users");
  console.log(user);

  useEffect(() => {
    const getUser = async () => {
      const data = query(
        usersCollectionRef,
        where("email", "==", user.currentUser.email)
      );
      const querySnapshot = await getDocs(data);
      setData(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUser();
  }, []);

  console.log(data);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">
                  {data[0]?.firstName} {data[0]?.lastName}
                </h1>
                <div className="detailItem">
                  <span className="itemKey">UserName:</span>
                  <span className="itemValue">{data[0]?.username}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Role:</span>
                  <span className="itemValue">{data[0]?.role}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{data[0]?.email}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
