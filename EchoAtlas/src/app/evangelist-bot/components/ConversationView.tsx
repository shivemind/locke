import React from 'react';
import { useConversation } from '../../../features/evangelist-bot/hooks/useConversation';

const ConversationView: React.FC = () => {
    const { messages, sendMessage } = useConversation();

    const handleSendMessage = (message: string) => {
        sendMessage(message);
    };

    return (
        <div className="conversation-view">
            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.isUser ? 'user' : 'bot'}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="input-area">
                <input
                    type="text"
                    placeholder="Type your message..."
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && e.currentTarget.value) {
                            handleSendMessage(e.currentTarget.value);
                            e.currentTarget.value = '';
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default ConversationView;