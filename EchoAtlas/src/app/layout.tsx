import React from 'react';

const Layout = ({ children }) => {
    return (
        <html lang="en">
            <head>
                <title>EchoAtlas</title>
                <link rel="stylesheet" href="/styles/globals.css" />
            </head>
            <body>
                <header>
                    <h1>Welcome to EchoAtlas</h1>
                </header>
                <main>{children}</main>
                <footer>
                    <p>&copy; {new Date().getFullYear()} EchoAtlas. All rights reserved.</p>
                </footer>
            </body>
        </html>
    );
};

export default Layout;