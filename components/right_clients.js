import ClientElement from "./right_client_element.js";
import { Context } from "../utils/store.js";

const e = React.createElement;

const Clients = (props) => {
  const { useEffect, useContext } = React;
  const [state, dispatch] = useContext(Context);

  let clientArray = [];
  for (let i = 0; i < state.clients.length; i++) {
    clientArray.push(
      e(ClientElement, {
        key: "clientElement" + i,
        ...state.clients[i],
      })
    );
  }

  return e(
    "div",
    null,
    e(
      "div",
      { id: "intro" },
      state.personal_info.intro +
        " with around " +
        Math.ceil(props["total_experience"] / 12) +
        " years of work experience"
    ),
    clientArray
  );
};

export default Clients;
