import React from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendsList extends React.Component {
    state = {
        friends: [],
        isLoading: false
    }

    componentDidMount() {
        this.getFriends()
    }

    getFriends = () => {
        this.setState({
            ...this.state,
            isLoading: true
        })
        axiosWithAuth()
            .get(`/api/friends`)
            .then(res => {
                this.setState({
                    ...this.state,
                    friends: res.data,
                    isLoading: false
                })
            })
            .catch(err => {
                console.log({ err })
                this.setState({
                    ...this.state,
                    isLoading: false
                })
            })
    }

    render() {
        return (
            <div>
                <h2>Friends List</h2>
                {this.state.isLoading && <p>Loading...</p>}
                <div>
                    {this.state.friends && this.state.friends.map(friend => (
                        <div key={friend.id} >
                            <h3>{friend.name}</h3>
                            <h3>{friend.age}</h3>
                            <h3>{friend.email}</h3>
                            <h4>{friend.id}</h4>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default FriendsList;