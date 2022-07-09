import { doc, getDoc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from '../../other/firebase';
import { otherID } from '../../other/ids';


const Title = () => {
    const titleRef = doc(db, 'other', otherID); 
    // logic of the title component
    const [title, setTitle] = useState('');


    useEffect(() => {
        getDoc(titleRef).then((doc) => {
                    setTitle(doc.data().title);

        });
    },[]);

     return (
    <div className='inline-flex'>
        {/* Building title component */}
    <input type='text' defaultValue={title} onChange={(e) => {setTitle(e.target.value)}} className='font-bold text-3xl border-solid border-black border-[.1px] w-1/2'/>
    <button onClick={() => {
      updateDoc(titleRef,{
            title:title
      });
    }} className='bg-zinc-700 hover:bg-zinc-500 text-white p-2'>Change</button>
  </div>)
};

export default Title;