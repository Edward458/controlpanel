import { collection, deleteDoc, doc, getDoc, getDocs } from "firebase/firestore";
import { useLocation } from "react-router-dom";
import { db } from "../../other/firebase";

const SidebarDelete = () => {

    const location = useLocation();
    const { id } = location.state
    
    
    const yes = () => {
            getDocs(db, 'images').then((snapshot) => {
                    snapshot.forEach((doc) =>
                    {
                        if(doc.data().folder === id)
                        {
                            deleteDoc(doc(db,'images',doc.data().id))
                        }
                    })
            }
            );

            deleteDoc(doc(db,'sidebars',id)).then(() => {
                window.location.replace('/');
            }
            )
    };

    const no = () => {
        window.location.replace('/');
    }

    return(
        <div className='flex flex-col gap-y-4'>

            <button onClick={() => {
                 getDocs(collection(db, 'images')).then((currents) => {
                   currents.forEach((current) => {
                        
                        getDoc(doc(db,'sidebars',id)).then((sidebar) => {
                            console.log(sidebar.data());
                           // console.log(doc(db,'sidebars',id))
                        })
                   });
            }
            );
            }}>Test</button>

            <h1 className='font-bold text-3xl'>Delete This Sidebar?</h1>
            <div className='inline-flex justify-center gap-x-2'>
                <button onClick={yes} className='bg-red-700 hover:bg-red-500 text-white p-2 w-1/6'>Yes</button>
                <button onClick={no} className='bg-zinc-700 hover:bg-zinc-500 text-white p-2 w-1/6'>No</button>
            </div>
        </div>
    );
};

export default SidebarDelete;