import React from 'react'

const ImageWidget = ({widget, updateWidget, edit}) =>
    <div className="container-fluid">

        <div style=
                 {{display: edit === "0"
                         ? 'block': 'none'}}>
        <div className= "row">
            <label> Image Link</label>
            <input id="paragraphTextFld" className="form-control"  placeholder = "http://lorempixel.com/300/150/"
                   defaultValue={widget.text} onChange={(event) => updateWidget({...widget, text: event.target.value})}
            />
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
            <img src={widget.text}></img>
        </div>
    </div>

export default ImageWidget