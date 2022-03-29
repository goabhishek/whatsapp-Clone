import React from 'react'
import './sidebar.css'
// import SettingsIcon from '@material-ui/icons/Settings';
// import { DonutLargerIcon } from '@material-ui/icons/DonutLarger';
// import { ChatIcon } from '@material-ui/icons/Chat';
// import { MoreVertIcon } from '@material-ui/icons/MoreVert';
import { Avatar } from "@material-ui/core"
function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <Avatar />
                <div className='sidebar__headerRight'>
                    {/* <DonutLargerIcon />
                    <ChatIcon />
                    <MoreVertIcon /> */}

                </div>
            </div>

            <div className='sidebar__search'>

            </div>
            <div className='sidebar__chats'>

            </div>
        </div>
    )
}

export default Sidebar