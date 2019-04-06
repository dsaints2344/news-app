import React, { Component } from "react";
import { Tabs, Button } from "antd";
import Start from "./Start";
import ProfileLogin from "./Profile";
import Favorites from "./Favorites";


const TabPane: any = Tabs.TabPane;




interface ITabProps{
  email: string;
}

interface ITabState {
  componentKey: string;
  Log: boolean;
  email: string;
}



export default class NavTabs extends React.Component<ITabProps, ITabState> {
    constructor(props: ITabProps){
        super(props);
        this.state = {
            componentKey: "1",
            Log: false,
            email: this.props.email
        }
    }

    public startLogin = () => {
      if (this.state.Log === false) {
        this.setState({
          Log: true
        })
      }
    }


  extraActions = <Button onClick={this.startLogin}>Login</Button>

  public render() {
    return (
      <div>
        <div>
          <Tabs tabBarExtraContent={this.extraActions} defaultActiveKey="1" onChange={this.handleKeys}>
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
    if (this.state.componentKey === "1" && this.state.Log === false) {
      return <Start/>
    } else if (this.state.componentKey === "2" && this.state.Log === false){
      return <Favorites/>
    } else if (this.state.Log === true){
      return <ProfileLogin/>
    }
  };

}
