import React from "react";
import "./sideBar.css";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { TextField, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #000",
    boxShadow: theme.shadows[5],
    padding: "1rem",
    width: "50%",
  },
  textField: {
    width: "100%",
  },
}));

export default () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [openModal, setOpenModal] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <div className="side-bar-wrapper">
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              User Management
            </ListSubheader>
          }
          className={classes.root}
        >
          <ListItem
            button
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <ListItemIcon>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary="Add new User" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Drafts" />
          </ListItem>
          <ListItem button onClick={handleClick}>
            <ListItemText primary="Inbox" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Starred" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <div className={classes.paper}>
            <h3 id="transition-modal-title">Enter your email to invite</h3>
            <div className="search-input">
              <TextField
                label="Email"
                className={classes.textField}
              ></TextField>
              <Button className="search__button">
                <i class="fas fa-user-plus"></i>
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </React.Fragment>
  );
};
