import ClientElement from "./right_client_element.js";
import { Context } from "../utils/store.js";

const e = React.createElement;

const Clients = (props) => {
  const { useEffect, useContext } = React;
  const [state, dispatch] = useContext(Context);

  let clientArray = [];
  // console.log(props.clients);
  for (let i = 0; i < state.clients.length; i++) {
    clientArray.push(
      e(ClientElement, {
        key: "clientElement" + i,
        ...state.clients[i],
      })
    );
  }

  // console.log(clientArray);

  // let lastDate = props.clients[0].period[1]
  //   ? new Date(props.clients[0].period[1])
  //   : new Date();

  // let firstDate = new Date(
  //   props.clients[props.clients.length - 1].period[0]
  // );

  // let experienceInYears = (lastDate - firstDate) / 31536000000;
  let experienceInYears = 1234;
  return e(
    "div",
    null,
    e(
      "div",
      { id: "intro" },
      // TODO: Change this to have months if below a year and maybe ceil it if above?
      // experienceInYears.toFixed(2) + ' years of work experience'
      // 'Over ' + Math.floor(experienceInYears) + ' years of work experience'
      state.personal_info.intro +
        " with over " +
        Math.floor(experienceInYears) +
        " years of work experience"
    ),
    clientArray
  );
};

export default Clients;
