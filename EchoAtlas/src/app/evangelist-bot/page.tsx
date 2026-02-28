import React from 'react';
import { ChatUI } from './components/ChatUI';
import { ConversationView } from './components/ConversationView';
import { BotConfigForm } from './components/BotConfigForm';

const EvangelistBotPage = () => {
    return (
        <div>
            <h1>Evangelist Bot</h1>
            <BotConfigForm />
            <ConversationView />
            <ChatUI />
        </div>
    );
};

export default EvangelistBotPage;