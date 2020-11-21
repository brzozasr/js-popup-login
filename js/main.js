import { popupLoginHiding } from "./popup.js";
import {archive} from "./archive.js";

popupLoginHiding.logButtonAddListener();
popupLoginHiding.regButtonAddListener();
popupLoginHiding.logoutButtonAddListener();

archive.addArchiveEventListener();