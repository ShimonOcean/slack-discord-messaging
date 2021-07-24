import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import { ChatInputContainer } from './ChatInput.styles';
import { db } from "../firebase";
import firebase from 'firebase';

function ChatInput({channelName, channelId}) {
    const [input, setInput] = useState("");

    const sendMessage = e => {
        e.preventDefault();

        if (!channelId) {
            return false;
        } 

        db.collection("rooms").doc(channelId).collection("messages").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: 'Shimon :)',
            userImage: 'http://a.abcnews.com/images/Travel/abc_golden_subnosed_monkey_mi_130424_wblog.jpg',
        })

        setInput("");

    }

    return (
        <ChatInputContainer>
            <form>
                <input
                    value={input} 
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={`Message #${channelName}`}
                />
                <Button hidden type='submit' onClick={sendMessage}>
                    SEND
                </Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput
