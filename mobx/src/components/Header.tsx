import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { context } from "../main.tsx";
import { Link } from "react-router-dom";
import { getAuthToken } from "../utils/session/sessionStorega.ts";

const Header = observer(() => {

    const { store } = useContext(context)

    useEffect(() => {
        if (getAuthToken()) {
            store.getUserInfo("/auth_me")
        }
    })

    return (
        <div>
            <ul>
                <li><Link to="/">Main</Link></li>
                <li><Link to="/about">About</Link></li>
                {store.isAuth ?
                    <>
                        <li>
                            {store.user}
                        </li>
                        <li>
                            <button onClick={() => store.logOut()}>logout</button>
                        </li>
                    </>
                    : <>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/reg">Reg</Link>
                        </li>
                    </>}
            </ul>
        </div>
    );
});

export default Header;