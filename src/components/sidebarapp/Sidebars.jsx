import React, { useState } from "react";
import { Link } from "react-router-dom";
const Sidebars = (props) => {

    const [open, setOpen] = useState(false);
    

    return(
        
        <div className='flex flex-col items-center'>
        <button onClick={() => {setOpen(!open)}} className='text-[#28282880] hover:text-[#282828] text-base'>{props.children}</button>
           
            { open &&
                <ul className='
          w-1/6
          bg-white 
          text-base
          z-50 
          py-2
          rounded-lg
          shadow-lg
          mt-1 
          m-0
          bg-clip-padding
          border-none'>

                <li><Link to={{
                    pathname:'/sidebar/edit',
                    state:{
                        id:props.id,
                        name:props.name,
                        is_adult:props.is_adult,
                        is_drop_down:props.is_drop_down
                    }
                }}>Edit Sidebar</Link></li>
                <li><Link to={{
                    pathname:'/sidebar/delete',
                    state:{
                        id:props.id
                    }
                }}>Delete Sidebar</Link></li>
                <li><Link to={{
                    pathname:'/sidebar/editimg',
                    state:{
                        id:props.id
                    }
                    }}>Edit Images</Link></li>
          </ul>
          }
          

        </div>
    );
    
};

export default Sidebars;