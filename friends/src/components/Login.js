import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Login extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
        }
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/login', this.state.credentials)
            .then(res => {
                localStorage.setItem("token", JSON.stringify(res.data.payload));
                this.props.history.push(`/friends`);
            })
            .catch(err => {
                console.log({ err });
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                        name="username"
                        type="text"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input
                        name="password"
                        type="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>Log In</button>
                </form>
            </div>
        )
    }
}

export default Login;