import React from 'react';

const ChatUI: React.FC = () => {
    return (
        <div className="chat-ui">
            <div className="chat-header">
                <h2>Chat with EvangelistBot</h2>
            </div>
            <div className="chat-messages">
                {/* Messages will be rendered here */}
            </div>
            <div className="chat-input">
                <input type="text" placeholder="Type your message..." />
                <button type="submit">Send</button>
            </div>
        </div>
    );
};

export default ChatUI;