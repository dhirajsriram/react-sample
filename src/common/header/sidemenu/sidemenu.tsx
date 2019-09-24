import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 250,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

interface Props {
  toggleDrawer : Function
}

export default function SideMenu(props:Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}
    role="presentation"
      onClick={props.toggleDrawer(false)}
      onKeyDown={props.toggleDrawer(false)}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <Link to="/" className="default-text">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </Link>
        </ListItem>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <a href="https://github.com/dhirajsriram" className="default-text">
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About" /></a>
        </ListItem>
      </List>
    </div>
  );
}