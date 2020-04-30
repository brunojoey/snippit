import React from "react";
import { Signup, Login, Nav } from "../components"

function LoginPage() {
    const [user, setUser] = useState({ status: false });
    useEffect(() => {
        async function fetchData() {
            let { data } = await status();
            setUser(data);
        }
        fetchData();
    }, []);
    // const logoutUser = () => {
    //   logout(); // from API 
    // }
    const renderBody = () => {
        if (user.status === false) {
            return <p>You are not logged in.</p>
        } else {
            return <p>You are logged in!</p>
        }
    };

    return (
        <div>
            <Nav />
            <div className="row">
                <div className="col s6">
                    <Signup />
                </div>
                <div className="col s6">
                    <Login />
                </div>
            </div>
        </div>
    );
}

export default LoginPage;