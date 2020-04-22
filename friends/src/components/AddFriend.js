import React from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

class AddFriend extends React.Component {
    state = {
        friend: {
            name: "",
            age: "",
            email: "",
        }
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post(`/api/friends`, this.state.friend)
            .then(res => {
                console.log({ res })
                alert(`You have added ${this.state.friend.name}`)
                this.setState({
                    friend: {
                        name: "",
                        age: "",
                        email: ""
                    }
                })
            })
            .catch(err => {
                console.log({ err })
            })
    }

    render() {
        return (
            <div>
                <h2>Add Friend</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        name="name"
                        placeholder="Name"
                        type="text"
                        value={this.state.friend.name}
                        onChange={this.handleChange}
                    />
                    <input
                        name="age"
                        placeholder="Age"
                        type="text"
                        value={this.state.friend.age}
                        onChange={this.handleChange}
                    />
                    <input
                        name="email"
                        placeholder="Email"
                        type="text"
                        value={this.state.friend.email}
                        onChange={this.handleChange}
                    />
                    <button>Add Friend</button>
                </form>
            </div>
        )
    }
}

export default AddFriend;