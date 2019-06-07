import React from 'react'


const HeadingWidget = ({widget, updateWidget, edit}) =>
    <div className="container-fluid">

        <div style=
                 {{display: edit === "0"
                         ? 'block': 'none'}}>

        <div className= "row">
            <label htmlFor="headingTextFld"> Heading Text</label>
            <input id="headingTextFld" className="form-control"  placeholder = "Heading Text"  defaultValue={widget.text}
                   onChange={(event) => updateWidget({...widget, text: event.target.value})} />
        </div>
        <div className= "row">
            <label htmlFor="headingSizeFld"> Heading Size</label>
            <select id="headingSizeFld" className="form-control" defaultValue= {widget.headingSize}
                    onChange={(event) => updateWidget({...widget, headingSize: event.target.value})}>
                <option value="Heading 1">Heading 1</option>
                <option value="Heading 2">Heading 2</option>
                <option value="Heading 3">Heading 3</option>
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
          <div className= "row">
            <div>
            {widget.headingSize === "Heading 3" && <h3>{widget.text}</h3>}
            {widget.headingSize === "Heading 2" && <h2>{widget.text}</h2>}
            {widget.headingSize === "Heading 1" && <h1>{widget.text}</h1>}
            </div>
        </div>
        </div>
    </div>



export default HeadingWidget