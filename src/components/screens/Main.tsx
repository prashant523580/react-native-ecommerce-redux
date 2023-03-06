import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Loader from '../Modal/loader'
import Banner from '../Banner';
import CustomFlatlist from '../customFlatlist';
import { ProductTypes } from '../../types/product';
import Header from '../Header';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux-store/store';
import { getProducts } from '../../redux-store/actions/product.action';

export default function MainComponent({products}:any) {
  // const [products, setProducts] = React.useState<any>([]);
  const [loading, setLoading] = React.useState(false);

  const [mensCloth, setMensCloth] = React.useState<any>([]);
  const [womensCloth, setWomensCloth] = React.useState<any>([]);
  const [electronics, setElectronics] = React.useState<any>([]);
  const [jeweleries, setJeweleries] = React.useState<any>([]);
  const [categories,setCategoies] = React.useState([]);
  // const {products} = useSelector((state:RootState) => state.products);
  let dispatch = useDispatch<any>();

  React.useEffect(() => {
      dispatch(getProducts())
  },[])
  React.useEffect(() => {
    let menCloth: any = []
    let womenCloth: any = []
    let electronic: any = []
    let jewelery: any = []
    products.filter((product: ProductTypes) => {

      // women's clothing
      // electronics
      // jewelery
      if (product.category == "men's clothing") {
        menCloth.push(product)
      }
      if (product.category == "women's clothing") {
        womenCloth.push(product)
      }
      if (product.category == "electronics") {
        electronic.push(product)
      }
      if (product.category == "jewelery") {
        jewelery.push(product)
      }
    })
    // console.log(menCloth)
    setMensCloth(menCloth)
    setWomensCloth(womenCloth)
    setElectronics(electronic)
    setJeweleries(jewelery)

   let category = products.reduce((values:any,currentValue: any) => (
    values.includes(currentValue.category) ? values : [...values, currentValue.category]
   ),[])
    // console.log(category)
    setCategoies(category)
  }, [products]);
  
  return (
    <View style={styles.mainContainer}>
      <Header/>
      <Banner img={require("../../images/banner/b1.jpg")} />
{ loading ?
      <Loader modalVisible={loading} />
      :
      <View style={{
        paddingHorizontal:10,
        paddingVertical:10
      }}>
        <FlatList
        horizontal
        
        showsHorizontalScrollIndicator={false}
          data={categories}
          keyExtractor={(key) => key}
          style={{
            // marginHorizontal:10
          }}
          renderItem={({item}) => {
            return(
              <TouchableOpacity style={{
                backgroundColor:"white",
                borderWidth:1,
                borderColor:"black",
                marginHorizontal:5,
                paddingHorizontal: 10,
                paddingVertical :5,
                borderRadius: 20,
  
              }}>
                <Text style={{
                  // color: "white",
                  fontSize: 17,
                  textTransform:"capitalize"
                }}>{item}</Text>
              </TouchableOpacity>
            )
          }}
        />

      <CustomFlatlist title="Products For You" data={products}/>
      <CustomFlatlist title="Electronics" data={electronics}/>
      <CustomFlatlist title="Jewelery" data={jeweleries}/>
      <CustomFlatlist title="women's Clothings" data={womensCloth}/>
      <CustomFlatlist title="Men's Clothings" data={mensCloth}/>
      </View>
}
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,

  },
 
})