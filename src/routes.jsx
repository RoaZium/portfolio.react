import { Admin01, Admin02, Admin03, Admin04 } from "./layouts/admin";
import {
  Visitor01,
  Visitor02,
  Visitor03,
  Visitor04,
  Visitor05,
} from "./layouts/visitors";
import Icon from "@mui/material/Icon";

import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import AccessibleIcon from "@mui/icons-material/Accessible";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import ElderlyIcon from "@mui/icons-material/Elderly";

const routes = [
  {
    type: "collapse",
    name: "Visitor01",
    key: "visitor01",
    icon: <AccessibilityNewIcon />,
    // component: <Visitor01 />,
  },
  {
    type: "collapse",
    name: "Visitor02",
    key: "visitor02",
    icon: <AccessibleIcon />,
    // component: <Visitor02 />,
  },
  {
    type: "collapse",
    name: "Visitor03",
    key: "visitor03",
    icon: <CoPresentIcon />,
    // component: <Visitor03 />,
  },
  {
    type: "collapse",
    name: "Visitor04",
    key: "visitor04",
    icon: <DirectionsRunIcon />,
    // component: <Visitor04 />,
  },
  {
    type: "collapse",
    name: "Visitor05",
    key: "visitor05",
    icon: <ElderlyIcon />,
    // component: <Visitor05 />,
  },
];

export default routes;
