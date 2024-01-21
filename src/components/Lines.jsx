
function Lines(props) {

    let line_string = props.lines;

    let list = line_string.split(",");
    list.map(s => s.trim());
    console.log(list)

    return (
        <div class="btn-group">
            {line_string.includes("Hammersmith") ? <button class="btn" style={{ backgroundColor: "#F3A9BB" }}>H&C</button> : <></>}
            {line_string.includes("Bakerloo") ? <button class="btn" style={{ backgroundColor: "#B36305", color: "white" }}>Bakerloo</button> : <></>}
            {line_string.includes("Central") ? <button class="btn" style={{ backgroundColor: "#E32017", color: "white" }}>Central</button> : <></>}
            {line_string.includes("Circle") ? <button class="btn" style={{ backgroundColor: "#FFD300" }}>Circle</button> : <></>}
            {line_string.includes("District") ? <button class="btn" style={{ backgroundColor: "#00782A", color: "white" }}>District</button> : <></>}
            {line_string.includes("Jubilee") ? <button class="btn" style={{ backgroundColor: "#A0A5A9", color: "white" }}>Jubilee</button> : <></>}
            {line_string.includes("Metropolitan") ? <button class="btn" style={{ backgroundColor: "#9B0056", color: "white" }}>Metropolitan</button> : <></>}
            {line_string.includes("Northern") ? <button class="btn" style={{ backgroundColor: "#000000", color: "white" }}>Northern</button> : <></>}
            {line_string.includes("Piccadilly") ? <button class="btn" style={{ backgroundColor: "#003688", color: "white" }}>Piccadilly</button> : <></>}
            {line_string.includes("Victoria") ? <button class="btn" style={{ backgroundColor: "#0098D4", color: "white" }}>Victoria</button> : <></>}
            {line_string.includes("Waterloo") ? <button class="btn" style={{ backgroundColor: "#95CDBA" }}>Waterloo and City</button> : <></>}
            {line_string.includes("DLR") ? <button class="btn" style={{ backgroundColor: "#00A4A7", color: "white" }}>DLR</button> : <></>}
            {line_string.includes("Overground") ? <button class="btn" style={{ backgroundColor: "#EE7C0E", color: "white" }}>Overground</button> : <></>}
            {line_string.includes("Tramlink") ? <button class="btn" style={{ backgroundColor: "#84B817" }}>Tramlink</button> : <></>}
            {line_string.includes("Cable Car") ? <button class="btn" style={{ backgroundColor: "#E21836" }}>Cable Car</button> : <></>}
            {line_string.includes("Elizabeth") ? <button class="btn" style={{ backgroundColor: "#7156A5", color: "white" }}>Elizabeth</button> : <></>}
        </div>
    );
}

export default Lines;

