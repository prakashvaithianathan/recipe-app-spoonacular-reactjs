import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { information, ingredients } from "../../../api/Information";
import { sendProduct } from "../../../Store/Action/Index";
import {API_KEY} from '../../../api/key'
import {
  Typography,
  Grid,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  TableBody,
  TableContainer,
} from "@material-ui/core";
import style from "./Information.module.css";

const Information = () => {
  const dispatch = useDispatch();

  const {
    products: { data, query },
  } = useSelector((data) => data);
  // console.log(products);

  const [info, setInfo] = useState([]);

  useEffect(() => {
    if (!data) {
      console.log("noe da");
      return <h1>No Information Found</h1>;
    }

    const sendInfo = async () => {
      try {
        const gettedInfo = await information(data.id);
        const gettedIngredient = await ingredients(data.id);

        const extractedData = {
          gettedInfo,
          gettedIngredient,
          query,
        };
        setInfo(extractedData);
      } catch (error) {
        console.log(error);
      }
    };
    sendInfo();

    dispatch(sendProduct(query));
  }, []);

  //  document.getElementById('summary').innerHTML =info.gettedInfo.summary;

  if (info.length === 0) {
    return <h1 className={style.loading}>Loading...</h1>;
  }

  return (
    <div className={style.infoContainer}>
      <h2 className={style.title}>{info.gettedInfo.title}</h2>
      <img className={style.mainImage} src={info.gettedInfo.image} alt={info.gettedInfo.title} />
      <h3>Ingredients: </h3>
      <div className={style.ingredientsContainer}>
      {info.gettedIngredient.ingredients.map((ingredients, index) => {
        return (

          
          <div key={index} className={style.ingredients}>
                <img
            src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredients.image}?apiKey=${API_KEY}`}
            alt={ingredients.name} className={style.image}
          />
          <h5>{ingredients.name}({ingredients.amount.metric.value}
            {ingredients.amount.metric.unit})</h5>
              
          </div>
        );
      })}
      </div>
      <h3>Instructions:</h3>
      <div className={style.instruction}
        dangerouslySetInnerHTML={{ __html: info.gettedInfo.instructions }}
      ></div>
      <h3>Additional Information: </h3>

      <div className={style.additional}>
        <div className={style.addInfo}>
          <h5>DishTypes:</h5>
          <span>{info.gettedInfo.dishTypes.join(",")}</span>
        </div>
        <div className={style.addInfo}>
          <h5>Diets:</h5>
          <span>{info.gettedInfo.diets.join(",")}</span>
        </div>
        <div className={style.addInfo}>
          <h5>Ready In Minutes:</h5>
          <span>{info.gettedInfo.readyInMinutes} min</span>
        </div>
        <div className={style.addInfo}>
          <h5>Health Score:</h5>
          <span>{info.gettedInfo.healthScore}/100 </span>
        </div>
        <div className={style.addInfo}>
          <h5>Cuisines:</h5>
          <span>
            {info.gettedInfo.cuisines.length > 1
              ? info.gettedInfo.cuisines
              : "No Cusines"}
          </span>
        </div>
      </div>

      <div>
        <h3>Nutritions: </h3>

        <Table aria-label="customized table" className={style.table}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Unit</TableCell>
              <TableCell align="right">Percent of Daily Needs</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {info.gettedInfo.nutrition.nutrients.map((nutrients, index) => {
              return (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {nutrients.name}
                  </TableCell>
                  <TableCell align="right">{nutrients.amount}</TableCell>
                  <TableCell align="right">{nutrients.unit}</TableCell>
                  <TableCell align="right">
                    {nutrients.percentOfDailyNeeds}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>

      <h3>Summary:</h3>
      <div className={style.summary} dangerouslySetInnerHTML={{ __html: info.gettedInfo.summary }}></div>
    </div>

    //     <Grid container item xs={12} justifyContent="center">
    //    <Typography>
    //         <Typography align="center" variant='h3'>{info.gettedInfo.title}</Typography>
    //         <Typography variant='h5'>Instructions:</Typography>
    //         {/* <Typography variant="subtitle1">{info.gettedInfo.instructions}</Typography> */}
    //         <div>
    //             {info.gettedInfo.instructions}
    //         </div>
    //         <Typography variant='h5'>Summary: </Typography>
    //         {/* <Typography variant='subtitle2'>{info.gettedInfo.summary}</Typography> */}
    //         <Typography variant='subtitle2'>{info.gettedInfo.summary}</Typography>

    //     </Typography>
    //     </Grid>
  );
};

export default Information;
