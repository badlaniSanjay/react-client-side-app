import React from 'react'

const ListWidget = ({widget, updateWidget, edit}) =>
    <div className="container-fluid">

        <div style=
                 {{display: edit === "0"
                         ? 'block': 'none'}}>
        <div className= "row">
            <label htmlFor="listItemsFld"> List items</label>
            <textarea id="listItemsFld" className="form-control"  placeholder = "Enter one list item per line" defaultValue={widget.text}
                   onChange={(event) => updateWidget({...widget, text: event.target.value})}
            />
        </div>
        <div className= "row">
            <label htmlFor="listTypeFld"> List Type</label>
            <select id="listTypeFld" className="form-control" defaultValue= "Unordered_List" value ={widget.listType}
                    defaultValue="Unordered_List" onChange={(event) => updateWidget({...widget, dataType: event.target.value})}>
                <option value="Unordered_List">Unordered List</option>
                <option value="Ordered_List">Ordered List</option>
            </select>
        </div>
        <div className= "row">
            <label htmlFor="widgetNameFld"> Widget Name</label>
            <input id="widgetNameFld" className="form-control"  placeholder = "Widget Name" defaultValue={widget.name}
                   onChange={(event) => updateWidget({...widget, name: event.target.value})}
            />
        </div>
        </div>
        <div className="my-3 mx-2">
        <div className= "row">
            <div style=
                     {{display: edit === "0"
                             ? 'block': 'none'}}>
            <h3>Preview</h3>
            </div>
        </div>
        <div className="row">
            {widget.dataType === "Unordered_List" && <ul> {widget.text.split("\n").map((item) => <li>{item}</li>)}</ul>}

            {widget.dataType === "Ordered_List" && <ol> {widget.text.split("\n").map((item) => <li>{item}</li>)}</ol>}
        </div>
        </div>
    </div>

export default ListWidget