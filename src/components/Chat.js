import React from 'react';
import { ChatContainer, Header, HeaderLeft, HeaderRight, ChatMessages, ChatBottom } from "./Chat.styles";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { InfoOutlined } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { selectRoomId } from "../features/appSlice";
import ChatInput from './ChatInput';
import Message from './Message';
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { db } from '../firebase';

function Chat() {
    const roomId = useSelector(selectRoomId);
    const [roomDetails] = useDocument(
        roomId && db.collection('rooms').doc(roomId)
    )
    const [roomMessages] = useCollection(
        roomId && db
            .collection("rooms")
            .doc(roomId)
            .collection("messages")
            .orderBy("timestamp", "asc")
    )


    return (
        <ChatContainer>
            <>
            <Header>
                <HeaderLeft>
                    <h4><strong>#{roomDetails?.data().name}</strong></h4>
                    <StarBorderIcon />
                </HeaderLeft>

                <HeaderRight>
                    <p>
                        <InfoOutlined /> Details
                    </p>
                </HeaderRight>
            </Header>

            <ChatMessages>
                {roomMessages?.docs.map(doc => {
                    const { message, timestamp, user, userImage } = doc.data();

                    return (
                        <Message 
                            key={doc.id}
                            message={message}
                            timestamp={timestamp}
                            user={user}
                            userImage={userImage}
                        />
                    )
                })}

            </ChatMessages>

            <ChatInput
                channelName={roomDetails?.data().name}
                channelId={roomId}
            />
            </>
        </ChatContainer>
        
    )
}

export default Chat;
