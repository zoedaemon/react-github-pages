import React from 'react';
import './App.css';
import { getDataFurnitureSaga } from './saga';
import { Grid, Button, IconButton, Tooltip } from '@material-ui/core';

class App extends React.Component {
  _isMounted = false;
  state = {
    loading : true,
    errorMessage: '',
    dataFurnitureStyles: [],
    dataProduct: [],
    dataChoosenStyles: [],
    dataListProduct: [],
  }

  componentDidMount(){
    this._isMounted = true;
    this.getDataFurniture();
  }

  

  getDataFurniture = async function() {
    const param = {}

    const data = await getDataFurnitureSaga(param)
    
    if(data){
      
      if(!data.error){
        const dataFurniture = data.furniture;

        const dataFurnitureStyles = dataFurniture && dataFurniture.furniture_styles;
        const dataProduct = dataFurniture && dataFurniture.products;

        this.setState({dataFurnitureStyles, dataProduct})
      }else{
        this.setState({errorMessage:data.error, loading:false})
      }
    }
  }

  refreshDataFurniture = () => {
    const dataListProduct = [];
    const dataProduct = this.state.dataProduct;
    const deliveryTime = this.state.deliveryTime;
    const searchFurniture = this.state.searchFurniture;
    const furnitureStyle = this.state.furnitureStyle;

    for(const key in dataProduct) {
      if(
        dataProduct[key].name.toString().toLowerCase().includes(searchFurniture.toString().toLowerCase())
      ) {
        dataListProduct.push(dataProduct[key])
      }
    }

    this.setState({dataListProduct})
  }

  render() {
    
    return (
      
      <Grid container>
        <Grid item xs={12} sm={12} style={{backgroundColor:'blue'}}>
          <Grid container>
            <Grid item xs={12} sm={12}>
              <p>Hello World</p>
            </Grid>

            <Grid item xs={6} sm={6}>
              <p>Hello World</p>
            </Grid>

            <Grid item xs={6} sm={6}>
              <p>Hello World</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
 
  }
}

export default App;


