import React, {useState,useContext} from 'react'
import AddCountry from '../Components/AddCountry';
import Map from '../Components/Map'
import { Redirect } from "react-router-dom";

// import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css"
import India from '../Components/India';
import World from '../Components/World';
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';
import { UserContext } from "../Context/UserContext";


export default function Home() 
{
  
const [mapCenter, setMapCenter] = useState({lat:23.490731,lng: 77.688121})
const [mapZoom, setMapZoom] = useState(3)
const context = useContext(UserContext)

  // If no user direct to signin page.
  if(!context.user?.uid)
  {
      return <Redirect to="/sin"></Redirect>
  }
    return (
    <div className="mainapp">
        <AddCountry></AddCountry>
        <World title="World"></World>
        <India title="India"></India>
        <Map
        center={mapCenter}
        zoom={mapZoom}
        >
        </Map>      
    </div>
    )
}
