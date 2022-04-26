import { Admin01, Admin02, Admin03, Admin04 } from "./layouts/admin";
import { Visitor01, Visitor02, Visitor03, Visitor04, Visitor05 } from "./layouts/visitors";
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Visitor01",
    key: "visitor01",
    icon: <Icon fontSize="small">visitor01</Icon>,
    component: <Visitor01 />,
  },
  {
    type: "collapse",
    name: "Visitor02",
    key: "visitor02",
    icon: <Icon fontSize="small">visitor02</Icon>,
    component: <Visitor02 />,
  },
  {
    type: "collapse",
    name: "Visitor03",
    key: "visitor03",
    icon: <Icon fontSize="small">visitor03</Icon>,
    component: <Visitor03 />,
  },
  {
    type: "collapse",
    name: "Visitor04",
    key: "visitor04",
    icon: <Icon fontSize="small">visitor04</Icon>,
    component: <Visitor04 />,
  },
  {
    type: "collapse",
    name: "Visitor05",
    key: "visitor05",
    icon: <Icon fontSize="small">visitor05</Icon>,
    component: <Visitor05 />,
  },
];

export default routes;
