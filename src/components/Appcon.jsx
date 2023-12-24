import React,{useState} from 'react'
import Carosoul from './Carosoul'
import AppCard from './AppCard'
import appsData from "./data";
import './styles/Appcon.css';

const Appcon = () => {

    const [selectedApp, setSelectedApp] = useState(null);

  const handleDownload = (app) => {
    setSelectedApp(app);
  };
  
  return (
    <div className='Appcon' >
        <div className="slider">
         
        <Carosoul/>
        </div>
        {appsData.map((app) => (
          <AppCard key={app.id} app={app} onDownload={handleDownload} />
        ))}
        
      {/* <div className="Appcon">
        {appsData.map((app) => (
          <AppCard key={app.id} app={app} onDownload={handleDownload} />
        ))}
      </div> */}
        {selectedApp && (
       
       <div className="blur" onClick={() => setSelectedApp(null)}>k</div>
        
       
      )}
      {selectedApp && (
       
         <div className="appEx">
          <img src={selectedApp.icon} alt="icon" />
          <div className='dsec'>
          <h2>{selectedApp.name}</h2>
          <p> <span>Size:</span>{selectedApp.size}</p>
          <p> <span>Version:</span> {selectedApp.version}</p>
          <p><span>Genre:</span> {selectedApp.genre}</p>
          <p className='exp'><span>Description: </span>{selectedApp.description}</p>
          {/* Add more details as needed */}
          <button className='ldown'>Download</button>
          </div>
        </div>
        
       
      )}
    
    
    
        {/* <div className="apx">
            <img src=".\icons\ff.png" alt="" />
           <h1>Free fire</h1>
           <div className="text">
            <h2>Action</h2> <p>*</p>
            <h3>Original</h3>
           </div>
           <button>Download</button>
        </div>
     */}
   

    </div>
  )
}

export default Appcon