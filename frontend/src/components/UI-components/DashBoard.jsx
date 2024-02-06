import AppBar from "../small-components/AppBar";
import Balance from "../small-components/Balance"
import Users from "../small-components/Users";

function DashBoard() {
    return <div className="h-screen ">
        <AppBar />
        <Balance value={"10,000"} />
        <Users />
    </div>;
}
export default DashBoard;