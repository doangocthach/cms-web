import React from "react";
import "./userList.css";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import DraftsIcon from "@material-ui/icons/Drafts";
import ExpandMore from "@material-ui/icons/ExpandMore";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import InboxIcon from "@material-ui/icons/Inbox";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { TextField, Button } from "@material-ui/core";
export default () => {
  return (
    <React.Fragment>
      <div className="list-user-wrapper">
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
        </List>
      </div>
    </React.Fragment>
  );
};
