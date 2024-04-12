import { useContext } from "react"
import { context } from "../../main"
import { Navigate, Outlet } from "react-router-dom"
import { observer } from "mobx-react-lite"

export const PrivateRoutes = observer(() => {
    
    const {store} = useContext(context)

    return(
        <div>
            {
                store.isAuth ? <Outlet/> : <Navigate to="/login"/>
            }
        </div> 
    )
})