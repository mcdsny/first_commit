import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ShareIcon from "@material-ui/icons/Share";

const useStyles = makeStyles(() => {
  return {
    image: {
      width: "100%",
      height: "auto"
    },
    card: {
      margin: "0 auto",
      width: "70%"
    },
    cardContent: {
      textAlign: "left"
    }
  };
});

const RenderCard = ({ index }) => {
  const swipeState = useSelector(state => state.swipe);
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {swipeState.initial[index]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={swipeState.officialNames[swipeState.index]}
        subheader={swipeState.categories[swipeState.index]}
      />
      <img
        alt={swipeState.officialNames[swipeState.index]}
        className={classes.image}
        src={swipeState.images[index]}
      />
      <CardContent className={classes.cardContent}>
        <React.Fragment>
          {swipeState.contentTexts.map(text => (
            <Typography variant="body2" color="textSecondary" component="p">
              {text}
            </Typography>
          ))}
        </React.Fragment>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        <IconButton>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default RenderCard;
