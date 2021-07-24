import React,{useState,useEffect} from 'react'
import {useSelector } from 'react-redux'
import {getProducts } from '../../api/Products'
import style from './Product.module.css';
import {
    Card,
    Grid,
    CardContent,
    Typography,
    CardActionArea,
    CardMedia,
    
  } from "@material-ui/core";
  import {Link} from 'react-router-dom'
  import {sendInformation} from '../../Store/Action/Index'
  import {useDispatch} from 'react-redux'

const Products = () => {

    

    const products = useSelector(data=>data.products)
  

    const [product, setProduct] = useState([])

   

   //!this method is easy method to get data from LINK 
    // const { data } = props.location
    // console.log(!data);

  const dispatch = useDispatch()

    useEffect(()=>{
       
      
        const get = async()=>{
            try {
                const data = await getProducts(products)
                setProduct([data])
               
                // console.log(data.searchResults[0]);
                
            } catch (error) {
                console.log(error);
            }
        }
    get()
    },[])

   
    


//  const handleChange=(data)=>{
//     const info={data:data,query:product[0].query}
//     console.log(info);
//  }


   
    
    
    const handleClick=(data)=>{

        const info={data:data,query:product[0].query}
       
 dispatch( sendInformation(info))
    }


    if(product.length===0){
        return(
            <h1 className={style.loading}>Loading...</h1>
        )
    }

    if(!products){
        return(
            <h1 className={style.loading}>No Products Found</h1>
        )
    }


    return (

        

        <Grid container item justifyContent="center" xs={12}  className={style.grid}>
            {
              
          product[0].searchResults[0].results.map((data,index)=>{
           
           return(
            // <div></div>
            
            
           <Link to='/products/information' onChange={()=>handleChange(data)}  key={index} >
              <Card className={style.card} onClick={()=>handleClick(data)} key={index}>
      <CardActionArea>
        <CardMedia>
        <img src={data.image} alt={data.name} className={style.image} />
        </CardMedia>
        <CardContent>
          <Typography  variant="h5" className={style.cardTitle} >
            {data.name}
          </Typography>
         
        </CardContent>
      </CardActionArea>
      
    </Card></Link>
   
           )
            })
            }
            </Grid>
            
        
    ) 
}

export default Products
