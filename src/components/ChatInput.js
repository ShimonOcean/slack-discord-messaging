import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import { ChatInputContainer } from './ChatInput.styles';
import { auth, db } from "../firebase";
import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function ChatInput({ channelName, channelId, chatRef }) {
    const [input, setInput] = useState("");
    const [user] = useAuthState(auth);

    const sendMessage = e => {
        e.preventDefault();

        if (!channelId) {
            return false;
        } 

        // !! Future: Add content moderation on input, if input is good then add to db collection
        $(function() {
            var params = {
                // Request parameters
                "PII": true,
                "classify": "True",
            };
          
            $.ajax({
                url: "https://westus.api.cognitive.microsoft.com/contentmoderator/moderate/v1.0/ProcessText/Screen?" + $.param(params),
                beforeSend: function(xhrObj){
                    // Request headers
                    xhrObj.setRequestHeader("Content-Type","text/plain");
                    xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key",process.env.API_KEY);
                },
                type: "POST",
                // Request body
                data: "{body}",
            })
            .done(function(data) {
                alert("success");
            })
            .fail(function() {
                alert("error");
            });
        });

        db.collection("rooms").doc(channelId).collection("messages").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            userImage: user.photoURL,
        })

        chatRef.current.scrollIntoView({
            behavior: "smooth",
        });

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
