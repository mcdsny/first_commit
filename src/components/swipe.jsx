import React from "react";
// reduxのhookを使用（コード記述量削減のため）
import { useSelector, useDispatch } from "react-redux";
import SwipeableViews from "react-swipeable-views";
import { makeStyles } from "@material-ui/core/styles";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import RenderCard from "./card";

import { changeTab } from "../modules/";

const useStyles = makeStyles(() => {
  const baseStyle = {
    padding: "1em",
    color: "white"
  };
  const activeBaseStyle = {
    color: "white",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px"
  };

  return {
    slide0: {
      ...baseStyle,
      backgroundColor: "skyblue"
    },
    slide1: {
      ...baseStyle,
      backgroundColor: "orange"
    },
    slide2: {
      ...baseStyle,
      backgroundColor: "indianred"
    },
    active0: {
      ...activeBaseStyle,
      backgroundColor: "lightseagreen"
    },
    active1: {
      ...activeBaseStyle,
      backgroundColor: "yellowgreen"
    },
    active2: {
      ...activeBaseStyle,
      backgroundColor: "pink"
    }
  };
});

const Swipe = () => {
  const swipeState = useSelector(state => state.swipe);
  const dispatch = useDispatch();
  const [swipeableActions, setSwipeableActions] = React.useState();
  const classes = useStyles();

  React.useEffect(() => {
    swipeableActions && swipeableActions.updateHeight();
  });

  return (
    <React.Fragment>
      {/* 
        Reactのコンポーネントは"1つの要素しか返せない"という決まりがあるので
        React.Fragmentで全体をラップしてあげています
        <React.Fragment> は <> のように省略して記述することもできます
      */}
      <Tabs
        value={swipeState.index}
        onChange={(e, value) => dispatch(changeTab(value))}
        variant="fullWidth"
        indicatorColor="primary"
      >
        {swipeState.names.map((name, i) => (
          <Tab
            className={
              swipeState.index === i ? classes[`active${i}`] : classes.inactive
            }
            label={name}
            key={i}
          />
        ))}
      </Tabs>
      <SwipeableViews
        enableMouseEvents
        action={actions => setSwipeableActions(actions)}
        resistance
        animateHeight
        index={swipeState.index}
        onChangeIndex={index => dispatch(changeTab(index))}
      >
        {swipeState.names.map((name, index) => (
          <div key={index} className={classes[`slide${index}`]}>
            <RenderCard index={index} />
          </div>
        ))}
      </SwipeableViews>
    </React.Fragment>
  );
};
export default Swipe;
