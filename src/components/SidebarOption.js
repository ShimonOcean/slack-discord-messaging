import React from 'react'
import { SidebarOptionContainer, SidebarOptionChannel  } from "./SidebarOption.styles";

function SidebarOption({ Icon, title, addChannelOption }) {

    const addChannel = () => {};

    const selectChannel = () => {};


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