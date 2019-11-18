import { connect } from 'react-redux';
import Showdown from 'showdown';
import format from 'html-format';
import copy from 'copy-to-clipboard';
import OutputUi from '../ui/OutputUi';
import action from '../../action/action';

const md2html = md => {
  let converter = new Showdown.Converter();
  return converter.makeHtml(md);
};

const Output = connect(
    state => ({
      html: md2html(state.md),
    }),
    dispatch => ({
      onClick: (event) => {
        // click 触发填充 state 中的 html
        let i = event;
        const htmlStr = document.getElementById('htmlDiv').outerHTML;
        dispatch(action.clickButtonAction(htmlStr));

        // 复制到剪贴板
        // alert(htmlStr);
        copy(htmlStr);
        alert('copy success!');
      },
    }),
    // null,
    // { withRef: true },
)(OutputUi);

export default Output;
