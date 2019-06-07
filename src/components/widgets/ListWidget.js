import React from 'react'

const ListWidget = ({widget, updateWidget, edit}) =>
    <div className="container-fluid">

        <div style=
                 {{display: edit === "0"
                         ? 'block': 'none'}}>
        <div className= "row">
            <label> List items</label>
            <textarea id="listItemsFld" className="form-control"  placeholder = "Enter one list item per line" defaultValue={widget.text}
                   onChange={(event) => updateWidget({...widget, text: event.target.value})}
            />
        </div>
        <div className= "row">
            <label> List Type</label>
            <select id="listTypeFld" className="form-control" defaultValue= "Unordered List" value ={widget.listType}
                    defaultValue={widget.type} onChange={(event) => updateWidget({...widget, listType: event.target.value})}>
                <option value="Unordered List">Unordered List</option>
                <option value="Ordered List">Ordered List</option>
            </select>
        </div>
        <div className= "row">
            <label> Widget Name</label>
            <input id="widgetNameFld" className="form-control"  placeholder = "Widget Name" defaultValue={widget.name}
                   onChange={(event) => updateWidget({...widget, name: event.target.value})}
            />
        </div>
        </div>
        <div className= "row">
            <div style=
                     {{display: edit === "0"
                             ? 'block': 'none'}}>
            <h3>Preview</h3>
            </div>
            {widget.listType === "Unordered List" && <ul> {widget.text.split("\n").map((item) => <li>{item}</li>)}</ul>}

            {widget.listType === "Ordered List" && <ol> {widget.text.split("\n").map((item) => <li>{item}</li>)}</ol>}
        </div>
    </div>

export default ListWidget