import React from 'react';
import { useDispatch } from 'react-redux';
import { enterRoom } from '../features/appSlice';
import { db } from "../firebase";
import { SidebarOptionContainer, SidebarOptionChannel  } from "./SidebarOption.styles";

function SidebarOption({ Icon, title, addChannelOption, id }) {
    const dispatch = useDispatch();

    const addChannel = () => {
        // !!! Future: Add content moderation feature on channel names
        const channelName = prompt('Please enter the channel name');

        if (channelName) {
            db.collection('rooms').add({
                name: channelName,
            })
        }

    };

    const selectChannel = () => {
        if (id) {
            dispatch(enterRoom({
                roomId: id
            }));
        }
    };


    return (
    <SidebarOptionContainer
        onClick={addChannelOption ? addChannel : selectChannel}
    >
        {Icon && <Icon fontSize='small' style={{ padding: 10 }} />}
        {Icon ? (
            <h3>{title}</h3>
        ) : (
            <SidebarOptionChannel>
                <span>#</span> {title}
            </SidebarOptionChannel>
        )}
    </SidebarOptionContainer>
    );
}

export default SidebarOption
