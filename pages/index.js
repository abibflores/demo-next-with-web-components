import Script from "next/script";
import React from "react";

const Home = () => {
    return (
        <div>
            Demo web component
            <Script src="/webcomponents/user-manager.js" type="module"></Script>
            <user-manager></user-manager>
        </div>
    );
};

export default Home;