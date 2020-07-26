import react from "react";
import Store from "../state/store";

let value = {
  firstName: "",
  lastname: "",
  email: "",
  list: [],
  change: false,
};
let reducer = (state = value, action) => {
  let stateCopy = { ...state };
  switch (action.type) {
    case "delete":
      stateCopy.list = action.payload;
      stateCopy.change = stateCopy.change ? false : true;
      return stateCopy;

    case "changeItem":
      let data = {
        first_name: action.payload.firstName,
        last_name: action.payload.lastName,
        email: action.payload.email,
      };
      let arr = stateCopy.list;
 arr[action.payload.itemIndex] = data;
      stateCopy.list = [...arr];
      stateCopy.change = stateCopy.change ? false : true;
      return stateCopy;

    case "upload":
      stateCopy.list = action.payload;
    default:
      return stateCopy;
  }
};
export default reducer;
