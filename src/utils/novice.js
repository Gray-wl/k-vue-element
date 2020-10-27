import Notice from '../components/Notice.vue'
import { create } from "./create";

function install(_Vue) {
  _Vue.prototype.KNotice = props => {
    const notice = create(_Vue, Notice, props);
    notice.show();
  };
}

export default install;
