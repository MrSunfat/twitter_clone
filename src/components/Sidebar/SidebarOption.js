import React from 'react';
import './SidebarOption.css';

function SidebarOption({ active, Icon, ActiveIcon, text, selectOption }) {
    return (
        <div
            className={`sidebarOption ${active && 'sidebarOption--active'}`}
            onClick={() => selectOption(text)}
        >
            {active ? <ActiveIcon /> : <Icon />}
            <h2>{text}</h2>
        </div>
    );
}

export default SidebarOption;
