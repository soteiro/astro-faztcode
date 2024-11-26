import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Button() {
    const [subcribe, setSubcribe] = useState(false);

    return (
        <button 
        onClick={() => {
            toast.success("suscrito"),
            setSubcribe(!subcribe)
        }}
        >
            {
                subcribe ? "ya estas subcrito" : "subscribete"
            }
            
            
        </button>
    )
}

export default Button;