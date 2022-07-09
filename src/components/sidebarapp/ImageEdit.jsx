import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { db } from '../../other/firebase';

const ImageEdit = () => {

    // get the id from link
    const location = useLocation();
    const { id } = location.state
 
    // declare useState hook
    const [images,setImages] = useState([]);

    // get the images
    getDocs(collection(db,'images')).then((snapshot) =>
        {
            snapshot.forEach((doc) => {
               if(doc.data().folder === id)
               {
                    setImages((images) => {
                        [...images,doc.data()]
                    });
               }
            });
        }
        

    )
};

export default ImageEdit;