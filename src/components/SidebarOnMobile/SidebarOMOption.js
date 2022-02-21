
function SidebarOption({ active, Icon, ActiveIcon, name, selectOption }) {
    return (
        <div
        className="sidebarOnMobile__item"
        onClick={() => selectOption(name)}
        >
            {active ? <ActiveIcon /> : <Icon />}
        </div>
    );
}

export default SidebarOption;
