import React from "react";

import ReactDOM from "react-dom/client";

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);

root.render(
    React.createElement("div",{
        id:"aaa",
        className:"bbb"
    },"123")
);