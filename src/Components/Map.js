import React from 'react'
import {Map as LeafletMap, TileLayer} from 'react-leaflet'
import {Row,Col,Container} from 'reactstrap'
import '../App.css'
// import { showDataOnMap } from "./util";

export default function Map({center, zoom}) {
    return (
        <div className="map container mb-4">
            {/*  Center - load at the centre of the map  */}
            
              <LeafletMap center={center} zoom={zoom} >
                <Container >
                <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
                </Container>
              
              </LeafletMap>
            
      </div>
    )
}
