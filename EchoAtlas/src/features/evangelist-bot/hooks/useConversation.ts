import { useEffect, useState } from 'react';

const useConversation = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendMessage = async (message) => {
        setLoading(true);
        try {
            // Logic to send message to the bot and receive a response
            const response = await fetch('/api/bot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
            });
            const data = await response.json();
            setMessages((prevMessages) => [...prevMessages, { text: message, sender: 'user' }, { text: data.reply, sender: 'bot' }]);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Logic to initialize conversation or fetch previous messages if needed
    }, []);

    return { messages, loading, error, sendMessage };
};

export default useConversation;