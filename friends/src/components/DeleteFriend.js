import React from "react";
import axios from "axios";

import { axiosWithAuth } from "../utils/axiosWithAuth";

class DeleteFriend extends React.Component {
    state = {
        friend: {
            id: ""
        }
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({
            friend: {
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        // axiosWithAuth()
        //     .delete(`/api/friends/${this.state.friend.id}`)
        //     .this(res => {
        //         console.log({ res })
        //         this.setState({
        //             friend: {
        //                 id: ""
        //             }
        //         })
        //     })
        //     .catch(err => {
        //         console.log({ err })
        //     })
        axiosWithAuth()({method: 'delete', url: `http://localhost:5000/api/friends/${this.state.friend.id}`})
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
                <h2>Delete Friend</h2>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        name="id"
                        placeholder="ID"
                        type="text"
                        value={this.state.friend.id}
                        onChange={this.handleChange}
                    />
                    <button>Delete Friend</button>
                </form>
            </div>
        )
    }
}

export default DeleteFriend;