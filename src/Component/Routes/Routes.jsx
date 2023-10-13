import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../../App";
import Main from "../AlldataCard/Main";



const router = createBrowserRouter([
{
    path:"/",
    element:<Main></Main>,
    children:[
        {
path:"/",
element:<App></App>,
loader:() => fetch('http://localhost:5000/totalProducts')
        }
    ]
}
])


export default router;