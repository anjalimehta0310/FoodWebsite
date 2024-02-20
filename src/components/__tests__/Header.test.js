import {render} from "@testing-library/react";
import Header from "../Header"
import {Provider} from "react-redux";
import { Store } from "../../Utilis/store";
import {StaticRouter} from "react-router-dom/server"
test("logo should load on rendering header",()=>{
    //load header
    const header=render(
    <StaticRouter>
        <Provider store={Store}><Header/></Provider>
    </StaticRouter>
    );
    console.log(header);
    //check if logo is loading
})