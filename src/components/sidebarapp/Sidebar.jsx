import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from '../../other/firebase';
import Sidebars from "./Sidebars";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SidebarEdit from "./SidebarEdit";
import SidebarDelete from "./SidebarDelete";
import ImageEdit from "./ImageEdit";

const Sidebar = () => {
    let num = 1;
    const [sidebars, setSidebars] = useState([]);

useEffect(() => {

    if(num === 1)
    getDocs(collection(db,'sidebars')).then((docs) => {
        docs.forEach((doc) => {
            setSidebars(sidebars => [...sidebars,{...doc.data(),id:doc.id}])
        });
    },

    num++
    );
},[]);
         
    return(
        <Router>
            <div>
    {                sidebars.map((sidebar) => (
                            <Sidebars key={sidebar.id} id={sidebar.id} name={sidebar.name} is_adult={sidebar.is_adult} is_drop_down={sidebar.is_drop_down}>{sidebar.name}</Sidebars>
                    ))}
            </div>

            <Switch>
                <Route exact path='/sidebar/edit'>
                    <SidebarEdit/>
                </Route>
                <Route exact path='/sidebar/delete'>
                    <SidebarDelete/>
                </Route>
                <Route exact path='/sidebar/editimg'>
                    <ImageEdit/>
                </Route>
            </Switch>

        </Router>
    );
};



export default Sidebar;