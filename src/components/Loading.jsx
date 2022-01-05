import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Loading = () => {
    return (
        <div>
          <Loader 
           type="Puff"
           color="#00BFFF"
           height={400}
           width={100}
           timeout={3000} 
          />  
        </div>
    )
}

export default Loading
