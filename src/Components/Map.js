import React from 'react'
import {Map as LeafletMap, TileLayer, CircleMarker, Tooltip} from 'react-leaflet'
import data from '../Data/Cities'
import {Row,Col,Container} from 'reactstrap'
import '../App.css'

export default function Map({center, zoom}) {
    return (
        <div className="map container mb-4 ">
            {/*  Center - load at the centre of the map  */}
            
            <LeafletMap center={center} zoom={zoom} >
                <Container >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                </Container>
              

                {data.city.map((city) => {
            return (
              <CircleMarker
                center={[city["coordinates"][0], city["coordinates"][1]]}
                radius={20}
                fillOpacity={0.5}
                color='#3d7ea6'
              >
                <Tooltip direction="top" opacity={1}>
                  <span>
                    <strong>{city["name"]}</strong>
                      <p> {"    Cases : "  +  city["Cases"] }       <br></br>
                          {"Recovered : "  +  city["Recovered"] }   <br></br>
                          {"   Deaths : "  +  city["Deaths"] }
                      </p>
                  </span>
                </Tooltip>
              </CircleMarker>)
          })
          }

              </LeafletMap>
      </div>
    )
}
