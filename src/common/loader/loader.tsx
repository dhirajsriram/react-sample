import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

interface Styles {
    loader : string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loader: {
      margin: "auto",
      display:"block",
      width:"30%",
      marginTop:"8%"
    }
  }),
);

export default function Loader() {
  const classes:Styles = useStyles();

  return (
    <div>
      ...Loading</div>
  );
}