import React, { Component } from "react";
import HocNodeFlowMenu from "../HocUI/HocNodeFlowMenu";
import {Icon} from "antd";

/**
 * 拖拽画布节点：服务任务
 * 对应css类名: viso-end-drop
 */
@HocNodeFlowMenu("viso-assigned-activity-drop")
export default class ServiceTask extends Component {
    render() {
        const { info } = this.props;
        return (
            <div>
                <div style={{height: `${(info.height - 5)}px`}}>
                    <Icon type="customer-service" className="viso-name-icon" key={info.name + 'icon'}/>
                    <span className="viso-name align-item-name" key={info.name}>
                          {info.name}
                    </span>
                    <span className="align-item" key={info.name + info.name}></span>
                </div>
            </div>
        )
    }
}