import React, { Component } from "react";
import { API, API_KEY, DEFAULT } from "../routes/NewsAPI";
import { any } from "prop-types";
import {Card, Col, Row} from 'antd';

export default class Start extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      results: [],
      error: null,
      isLoaded: false
    };
  }



  public componentDidMount() {
      fetch(API + DEFAULT + '&apiKey=' + API_KEY).then(res => res.json()).then((response) => {
        this.setState({results: response.articles})
        console.log(response.articles);
      },
      (error) => {
        this.setState({isLoaded: true, error: error})
      }
      )
    }

  public render() {
    const{error, isLoaded, results} = this.state;
    if (error) {
      return <div><h2>Error: {error.message}</h2></div>
    } else if (!isLoaded) {
      return <div><h2>Loading...</h2></div>
    } else {
      return(
        <div>
          {results.map((result: any) => (
            <div>result</div>
          ))}
        </div>
      );
    }
  }
}
