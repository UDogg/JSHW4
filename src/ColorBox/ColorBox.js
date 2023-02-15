
import "./ColorBox.css";

function ColorBox({ rgb }) {
    return (
        <div
            className="ColorBox"
            style={{
                backgroundColor: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`,
            }}
        ></div>
    );
}

export default ColorBox;