import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import {Grid, Col, Row} from 'react-flexbox-grid'
import './App.css';
import ForecastExtended from './components/ForecastExtended'
import LocationList from './components/WeatherLocation/LocationList'



const cities= ["Bogota, co", 
"Buenos Aires, ar",
"Bucaramanga, co", 
"Auckland, NZ", "Lima, pe",
 "Montréal, CA", 
 "Moscow, RU",
]
class App extends Component {

  constructor(){
    super()
    this.state ={
      city: 'nueva ciudad'
    };
  }
  handleSelectionLocation = city =>{
    this.setState({
      city,
    })
    console.log(`handelselectionlocation ${city}`)
  }
  render(){
    const { city } = this.state
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='title' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs ={12} md= {6}>
            <LocationList 
              cities= {cities}
              onSelectedLocation={this.handleSelectionLocation}
            />
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className= "datails">
                <ForecastExtended city ={city}></ForecastExtended>
              </div>
            </Paper>
            
          </Col>
        </Row>
        
      </Grid>
    );
  }
  
}

export default App;
