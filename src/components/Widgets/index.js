import './Widgets.css';

function Widgets({ topElement, children }) {

    return (
        <div className="widgets">
            {topElement}            

            <div className="widgets__widgetContainer">
                {children}
            </div>
        </div>
    );
}

export default Widgets;
