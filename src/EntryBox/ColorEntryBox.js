// in src/App/EntryBox/ColorEntryBox/ColorEntryBox.js...
import "./ColorEntryBox.css";

function ColorEntryBox({ labels, readOnly, values, updateVals }) {
    let vals = [...values];

    function onEntryBoxChange(event) {
        // Get the input box's i value
        let i = event.target.getAttribute("i");
        // Get the input box's value
        let value = event.target.value;
        
        // Set the value of this particular input box
        vals[i] = value;

        
    }

    return (
        <div className="ColorEntryBox">
            <label>{labels[0]}</label>
            <input
                i="0"
                type="number"
                readOnly={readOnly}
                onChange={onEntryBoxChange}
                value={values[0]}
            />

            <label>{labels[1]}</label>
            <input
                i="1"
                type="number"
                readOnly={readOnly}
                onChange={onEntryBoxChange}
                value={values[1]}
            />

            <label>{labels[2]}</label>
            <input
                i="2"
                type="number"
                readOnly={readOnly}
                onChange={onEntryBoxChange}
                value={values[2]}
            />
        </div>
    );
}

export default ColorEntryBox;