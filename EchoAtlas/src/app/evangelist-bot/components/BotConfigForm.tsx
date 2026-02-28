import React, { useState } from 'react';

const BotConfigForm = () => {
    const [config, setConfig] = useState({
        apiKey: '',
        model: 'gpt-3.5-turbo',
        temperature: 0.7,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setConfig((prevConfig) => ({
            ...prevConfig,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to save the bot configuration
        console.log('Bot configuration submitted:', config);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="apiKey">API Key:</label>
                <input
                    type="text"
                    id="apiKey"
                    name="apiKey"
                    value={config.apiKey}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="model">Model:</label>
                <select
                    id="model"
                    name="model"
                    value={config.model}
                    onChange={handleChange}
                >
                    <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
                    <option value="gpt-4">GPT-4</option>
                </select>
            </div>
            <div>
                <label htmlFor="temperature">Temperature:</label>
                <input
                    type="number"
                    id="temperature"
                    name="temperature"
                    value={config.temperature}
                    onChange={handleChange}
                    min="0"
                    max="1"
                    step="0.1"
                />
            </div>
            <button type="submit">Save Configuration</button>
        </form>
    );
};

export default BotConfigForm;