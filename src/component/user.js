import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";

import { connect } from "react-redux";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

import Modal from "./modal";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

const InteractiveList = (props) => {
  const classes = useStyles();

  const [dense, setDense] = React.useState(false);

  const [list, setList] = useState([]);
  const [secondary, setSecondary] = React.useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [modal, setModal] = useState(false);
  const [itemIndex, setItemIndex] = useState(null);

  useEffect(() => {
    setList(props.list);
  }, [props.change]);

  useEffect(() => {
    setList(props.list);
  });

  const deleteItem = (index) => {
    let arr = props.list;
    arr.splice(index, 1);
    props.dispatch({
      type: "delete",
      payload: arr,
    });
  };

  const inputChange = (e, index) => {
    let arr = props.list(index);

    this.props.dispatch({
      type: "inputChange",
      payload: e.target.value,
    });
  };

  const editItems = (index) => {
    setFirstName(props.list[index].first_name);
    setLastName(props.list[index].last_name);
    setEmail(props.list[index].email);
    setItemIndex(index);
    setModal(true);
  };

  return (
    <div className={classes.root}>
      {modal == true && (
        <div>
          <Modal
            modal={modal}
            switchShow={(x) => setModal(x)}
            firstName={firstName}
            lastName={lastName}
            email={email}
            itemIndex={itemIndex}
          />{" "}
        </div>
      )}
      {props.list.map((value, index) => (
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className={classes.title}></Typography>
            <div className={classes.demo}>
              <List dense={dense}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar src="https://b7.pngbarn.com/png/574/369/avatar-computer-icons-user-random-icons-png-clip-art.png">
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={`${value.first_name} ${value.last_name}`}
                    secondary={value.email}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="edit">
                      <EditOutlinedIcon onClick={() => editItems(index)} />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon onClick={() => deleteItem(index)} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                ,
              </List>
            </div>
          </Grid>
        </Grid>
      ))}
    </div>
  );
};

let mapStateToProps = (state) => {
  console.log("mbcdhfbf", state.list.length);
  return {
    list: state.list,
    change: state.change,
    modal: state.modal,
  };
};

export default connect(mapStateToProps)(InteractiveList);
