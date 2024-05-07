import React from 'react'
import List from '../../components/list/list'
import './profilepage.scss'
import Chat from '../../components/chat/chat'

export default function ProfilePage() {
  return (
    <div className='profilepage'>
        <div className="details">
            <div className="wrapper">
                <div className="title">
                    <h1>User Information</h1>
                    <button>Update Profile</button>
                </div>
                <div className="info">
                    <span>
                        Avatar:
                        <img src="/user.png" alt="" />
                    </span>
                    <span>UserName: <b>Betty Renny</b></span>
                    <span>Email: <b>betty.renny@gmail.com</b></span>
                </div>
                <div className="title">
                    <h1>My List</h1>
                    <button>Create New Post</button>
                </div>
                <List></List>
                <div className="title">
                    <h1>Saved List</h1>
                </div>
            </div>
        </div>
        <div className="chatContainer">
            <div className="wrapper">
            <Chat></Chat>
            </div>
        </div>
    </div>
  )
}
