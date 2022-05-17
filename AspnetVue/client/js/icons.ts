// Reduce dll size by importing only those icons which are actually being used:
// https://fontawesome.com/how-to-use/use-with-node-js

import { library, dom } from "@fortawesome/fontawesome-svg-core";

import {
    faEnvelope,
    faIdCard,
    faCalendarCheck,
    faCalendarAlt,
    faUsers,
    faCommentDots,
    faTrash,
    faSpinner,
    faSync,
    faPlusCircle,
    faAlignLeft,
    faBars,
    faInfoCircle,
    faTasks,
    faTrophy,
} from "@fortawesome/free-solid-svg-icons";

library.add(faEnvelope);
library.add(faIdCard);
library.add(faCalendarCheck);
library.add(faCalendarAlt);
library.add(faUsers);
library.add(faCommentDots);
library.add(faTrash);
library.add(faSpinner);
library.add(faSync);
library.add(faPlusCircle);
library.add(faAlignLeft);
library.add(faBars);
library.add(faInfoCircle);
library.add(faTasks);
library.add(faTrophy);

dom.watch();
