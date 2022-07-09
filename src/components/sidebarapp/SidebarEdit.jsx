import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { db } from "../../other/firebase";

const SidebarEdit = () => {

    const location = useLocation();
    const {id,name,is_adult,is_drop_down} = location.state;

    const [title,setTitle] = useState(name);
    const [isAdult,setIsAdult] = useState(is_adult);
    const [isDropDown,setIsDropDown] = useState(is_drop_down);

    // update documents
    const sendUpdate = () => {
        updateDoc(doc(db, 'sidebars', id),{
                name:title,
                is_adult:isAdult,
                is_drop_down:isDropDown
        }).then(() => {window.location.replace('/')});
    };

    return(
        <div className='flex flex-col gap-y-4 items-center'>
            <label>
               Name: <input className='border-black border-solid border-[.1px]'defaultValue={title} onChange={(e) => {setTitle(e.target.value)}} type='text'/>
            </label>

            <label>
                Adult Content: <input defaultChecked={isAdult} onChange={() => setIsAdult(!isAdult)} type='checkbox'/>
            </label>

            <label>
              DropDown:  <input defaultChecked={isDropDown} onChange={() => setIsDropDown(!isDropDown)} type='checkbox' />
            </label>

            <button onClick={sendUpdate} className='bg-zinc-700 hover:bg-zinc-500 p-2 text-white w-1/6'>Save</button>
        </div>

        
    )
};

export default SidebarEdit;