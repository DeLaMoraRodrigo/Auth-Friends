import React from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

class UpdateFriend extends React.Component {
    state = {
        friend: {
            name: "",
            age: "",
            email: "",
            id: ""
        }
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({
            friend: {...this.state.friend,
            [e.target.name]: e.target.value
        }})
    }

    handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .put(`/api/friends/${this.state.friend.id}`, this.state.friend)
            .then(res => {
                console.log({ res })
            })
            .catch(err => {
                console.log({ err })
            })
    }

    render() {
        return (
            <div>
                <h2>Update Friend</h2>
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
                    <input
                        name="id"
                        placeholder="ID"
                        type="text"
                        value={this.state.friend.id}
                        onChange={this.handleChange}
                    />
                    <button>Update Friend</button>
                </form>
            </div>
        )
    }
}

export default UpdateFriend;