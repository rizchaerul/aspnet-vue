import Vue from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Datepicker from "vuejs-datepicker";
import VeeValidate from "vee-validate";
import vSelect from "vue-select";
import { VueEditor } from "vue2-editor";
import { DateTime } from "luxon";
import Paginate from "vuejs-paginate";

import HelloWorld from "./components/HelloWorld.vue";

Vue.component("hello-world", HelloWorld);

new Vue().$mount("#app");
