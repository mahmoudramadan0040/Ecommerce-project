import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Notification(props) {
    useEffect(() => {
        console.log("asdasd");
        toast.success(props.msg, {
            position: toast.POSITION.TOP_RIGHT
        })
    },[])
    return ( 
        <div>
            <ToastContainer />
        </div>
     );
}

export default Notification;