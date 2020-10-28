import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import {FormControl, MenuItem, Select, InputLabel} from '@material-ui/core'
import {InputGroupAddon, Button, Row, Col} from 'reactstrap'

export default function AddCountry() {

    const [countries,setCountries] = useState([]);
    const [query, setQuery] = useState('')

    const getData = async () => {
        const {data} = await Axios.get(`https://covid19.mathdro.id/api/countries/${query}`)
        console.log(data);
        const countries = data.countries;
        console.log("country Details : ",countries);
        setCountries(countries);
        console.log("Query :",query)
    }

    useEffect(() => {
        getData();
    }, [])
    

    return (
        <div  style={{display: 'flex', justifyContent: 'center', marginBottom:'20px'}}>
            <Row className='mb-4 mt-4 p-2'>
                <Col  md={6} lg={6} sm={6} xs={6}>
                    <FormControl variant="filled">
                    <InputLabel htmlFor="filled-age-native-simple">Countries</InputLabel>
                        <Select 
                        variant="outlined"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        style={{height:55, width:150}}>

                            {/* Loop Through the countries */}
                            <option aria-label="None" value="" />
                                {countries.map( country => (
                                <option value={country.name}>{country.name}</option>
                            ))  }                 
                        </Select>
                    </FormControl>          
                </Col>

                <Col md={6} lg={6} sm={6} xs={6}>
                    <InputGroupAddon addonType="append">
                     <Button onClick={getData} className="ml-4" style={{height:55, width:150}} color="primary">Add</Button>
                    </InputGroupAddon>  
                </Col>
            </Row>
        </div>

        
    )
}
