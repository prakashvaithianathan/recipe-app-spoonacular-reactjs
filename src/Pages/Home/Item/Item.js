import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
} from "@material-ui/core";
import style from "./Item.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sendProduct } from "../../../Store/Action/Index";

const linkHover = (data) => {
  document.querySelector(`#${data}`).style.color = "red";
};

const linkOut = (data) => {
  console.log(data);
  document.querySelector(`#${data}`).style.color = "blue";
};

const Item = ({ link, cardTitle }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(sendProduct(cardTitle));
  };

  return (
    //   This method is used to send data to LINK tag in TO parameter
    // to={{pathname:'/products',data:cardTitle}}

    <Link
      to="/products"
      onMouseOverCapture={() => linkHover(cardTitle)}
      onMouseOutCapture={() => linkOut(cardTitle)}
    >
      <Card className={style.card} onClick={handleClick}>
        <CardActionArea>
          <CardMedia>
            <img src={link} alt={cardTitle} className={style.image} />
          </CardMedia>
          <CardContent>
            <Typography variant="h4" className={style.cardTitle}>
              {cardTitle}
            </Typography>
            <Typography
              variant="body1"
              className={style.learnMore}
              id={cardTitle}
            >
              Learn More &gt;
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default Item;
