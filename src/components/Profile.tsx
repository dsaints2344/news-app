import React, {Component} from 'react';
import {
    Button, Modal, Form, Input, Radio,
  } from 'antd';
  import NavTabs from './NavTabs';




 class Profile extends React.Component<any, any>{
    constructor(props: any){
        super(props);
        this.state = {
            email: "",
            password: "",
            idUserArticle: ""
        }
    }
    public render(){
        const{getFieldDecorator} = this.props.form;

        return(
            <div>
               <Form layout={"vertical"}>
                    <Form.Item label="Email">
                        {getFieldDecorator('Email', {
                            rules: [{required: true, message: 'Please input the user email'}],

                        })(
                            <Input value={this.state.email} onChange={e => this.setState({email: e.target.value})}/>
                        )
                        }
                    </Form.Item>
                    <Form.Item label="Password">
                        {getFieldDecorator('Password', {
                            rules: [{required: true, message: 'Please input the password'}]
                        })(<Input type="password" value={this.state.password} onChange={e => this.setState({password: e.target.value})}/>)}
                    </Form.Item>
                    <Form.Item label="idUserArticle">
                        {getFieldDecorator('idUserArticle', {
                            rules: [{required: true, message: 'Please input the password'}]
                        })(<Input value={this.state.idUserArticle} onChange={e => this.setState({idUserArticle: e.target.value})}/>)}
                    </Form.Item>
               </Form>   

               <div>
                   <Button type="primary" onClick={this.addUser}>
                    LogIn
                   </Button>
                </div> 
            </div>
        );
    }

    public addUser = () =>{
        fetch(`http://localhost:5000/Users/new?email=${this.state.email}&password=${this.state.password}&idUserArticle=${this.state.idUserArticle}`)
    }
}

const ProfileLogin = Form.create({name: 'vertical_login'})(Profile)
export default ProfileLogin;