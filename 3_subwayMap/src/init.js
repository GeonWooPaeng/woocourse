import printStationList from "./station/printStationList.js";
import inputStationName from "./station/inputStation.js";
import printLineList from "./line/printLineList.js";
import inputLine from "./line/inputLine.js";
import makeSectionBtnToEdit from "./section/sectionTitle.js";


export default function init() {
    printStationList();
    inputStationName();
    printLineList();
    inputLine();
    makeSectionBtnToEdit();
    // localStorage.clear();
  }
