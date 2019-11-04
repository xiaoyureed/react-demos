import React from 'react';
import Todo from './Todo';
import TabSelectorSample from './TabSelector';
import Default from './Default';
import Clock from './Clock';
import SnapshotSample from './SnapshotSample';
import FunctionAsSonComponent from './FunctionAsSonComponent';
import LocaleSample from './LocaleSample';
import AdvancedTabSelectorSample from './TabSelectorAdv';
import PureRedux from './PureRedux';
import CounterSample from './Counter';
import RouterSample from './RouterSample';
import RouterParams from './RouterParams';
import CommentBoard from './CommentBoard';
import FormSubmit from './FormSubmit';
import FormSubmitAntd from './FormSubmitAntd';
import HorizontalLogin from './Antd';
import './index.css';
import "antd/dist/antd.css";
import LayoutCustom from './LayoutCustom';
import LayoutCustom2 from './LayoutCustom2';
import LayoutCustom3 from './LayoutCustom3';
import PortalSample from './PortalSample';
import PortalAntd from './PortalAntd';
import RefSample from './RefSample';
import DragSample from './DragSample';

const routeMap = {
  'todo': Todo,
  "tab-selector": TabSelectorSample,
  "clock": Clock,
  "snapshot-sample": SnapshotSample,
  'function-as-son-component': FunctionAsSonComponent,
  'tab-selector-adv': AdvancedTabSelectorSample,
  'locale-sample': LocaleSample,
  'pure-redux': PureRedux,
  'counter-sample': CounterSample,
  'router-sample': RouterSample,
  'router-params': RouterParams,
  'comment-board': CommentBoard,
  'form-submit': FormSubmit,
  'form-submit-antd': FormSubmitAntd,
  'horizontal-login': HorizontalLogin,
  'layout-custom': LayoutCustom,
  'layout-sider': LayoutCustom2,
  'layout-resize': LayoutCustom3,
  'portal-sample': PortalSample,
  'portal-antd': PortalAntd,
  'ref-sample': RefSample,
  'drag-sample': DragSample,
};

export default class App extends React.PureComponent {
  handleLinkClick(key) {
    // window.location.hash = `#${key}`;
    // 等同于
    window.history.pushState(null, "", `/#/${key}`); // 向 history 中添加当前页的记录
    this.forceUpdate(); // react 强制刷新
  }

  render() {
    const currentHash = document.location.hash.replace(/#\/?/, "");
    let CurrentComponent = routeMap[currentHash] || Default;
    if (currentHash.match(/user\/\w+|list-page/)) {
      // CurrentPage = ListSample;
    }
    if (currentHash.match(/wizard\/step\/\w+/)) {
      // CurrentPage = WizardSample;
    }
    return (
      <div className="">
        <ul className="menu-list">
          {Object.keys(routeMap).map(key => (
            <li key={key}
              className={key === currentHash ? 'is-active' : ''}
              style={{ listStyle: "none" }}
            >
              <span className="link" onClick={() => this.handleLinkClick(key)}>{key}</span>
            </li>
          ))}
        </ul>
        <div className="component">
          <CurrentComponent />
        </div>
      </div>
    )
  }
}
