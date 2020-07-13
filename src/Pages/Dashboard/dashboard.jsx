import React from "react";
import data from "../../Data/dashboard.json";
import DashBoardData from "../../Components/DashBoard/DashBoardData/dashBoardData";
import { Auth } from "../../Context/auth";
import { Redirect } from "react-router-dom";
import DashLeftSideBar from "../../Components/DashBoard/LeftSideBar/leftSideBar";
import DashRightSideBar from "../../Components/DashBoard/RightSideBar/rightSideBar";

const Dashboard = (props) => {
  const [auth] = React.useContext(Auth);
  const { match } = props;
  const UserName =
    match.params.userid[0].toUpperCase() + match.params.userid.slice(1);
  const dashdata = data.filter((list) => list.name === UserName);
  if (!dashdata[0]) return <p>there is no data available</p>;
  if (auth.data.name !== UserName)
    return <Redirect to={{ pathname: "/user/" + auth.data.name }} />;
  return (
    <div>
      <DashLeftSideBar user={auth.data} data={dashdata[0].repository}/>
      <DashRightSideBar suggestion={dashdata[0].suggestions} />
      <DashBoardData data={dashdata[0].data} />
    </div>
  );
};
export default Dashboard;
