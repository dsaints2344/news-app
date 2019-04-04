import React, { Component } from "react";
import { Tabs } from "antd";
import Start from "./Start";
import Favorites from "./Favorites";

const TabPane: any = Tabs.TabPane;

interface ITabProps{

}

interface ITabState {
  componentKey: string;
}
export default class NavTabs extends React.Component<ITabProps, ITabState> {
    constructor(props: ITabProps){
        super(props);
        this.state = {
            componentKey: "1"
        }
    }

  public render() {
    return (
      <div>
        <div>
          <Tabs defaultActiveKey="1" onChange={this.handleKeys}>
            <TabPane tab="All News" key="1" />
            <TabPane tab="Favorites" key="2" />
          </Tabs>
        </div>
        {this.renderComponent()}
      </div>
    );
  }

  public handleKeys = (key: string) => {

    this.setState({ componentKey: key });
  };

  public renderComponent = () => {
    switch (this.state.componentKey) {
      case "1":
        return <Start />;
      case "2":
        return <Favorites />;
    }
  };
}
