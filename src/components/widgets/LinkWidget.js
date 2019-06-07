import React from 'react'

const LinkWidget = ({widget, updateWidget, edit}) =>
    <div className="container-fluid">

        <div style=
                 {{display: edit === "0"
                         ? 'block': 'none'}}>
        <div className= "row">
            <label> Link Url </label>
            <input id="linkUrlFld" className="form-control"  placeholder = "http://lorempixel.com/300/150/" defaultValue={widget.text}
                   onChange={(event) => updateWidget({...widget, text: event.target.value})}
            />
        </div>

        <div className= "row">
            <label> Link Text</label>
            <input id="linkTextFld" className="form-control"  placeholder = "Link Text" defaultValue={widget.webLink}
                   onChange={(event) => updateWidget({...widget, webLink: event.target.value})}
            />
        </div>

        <div className= "row">
            <label> Widget Name</label>
            <input id="widgetNameFld" className="form-control"  placeholder = "Widget Name" value={widget.name}
            />
        </div>
        </div>
        <div className= "row">
            <div style=
                     {{display: edit === "0"
                             ? 'block': 'none'}}>
            <h3>Preview</h3>
            </div>
            <a href={widget.webLink}>{widget.text}</a>
        </div>
    </div>

export default LinkWidget