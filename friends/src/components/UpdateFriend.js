import React from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

class UpdateFriend extends React.Component {
    state = {
        friend: {
            name: "",
            age: "",
            email: ""
        },
        friendId: {
            id: ""
        }
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({
            ...this.state,
            friend: {...this.state.friend,
            [e.target.name]: e.target.value
        }})
    }

    handleIdChange = e => {
        e.preventDefault();
        this.setState({
            ...this.state,
            friendId: {...this.state.friendId,
            [e.target.name]: e.target.value
        }})
    }

    handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .put(`/api/friends/${this.state.friendId.id}`, this.state.friend)
            .then(res => {
                console.log({ res })
                alert(`You have updated your friend with the id of ${this.state.friend.id}`)
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
                        value={this.state.friendId.id}
                        onChange={this.handleIdChange}
                    />
                    <button>Update Friend</button>
                </form>
            </div>
        )
    }
}

export default UpdateFriend;