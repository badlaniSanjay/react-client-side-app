import React from 'react'

const ParagraphWidget = ({widget, updateWidget, edit}) =>
    <div className="container-fluid">

        <div style=
                 {{display: edit === "0"
                         ? 'block': 'none'}}>
            <div className= "row">
                    <label htmlFor="paragraphTextFld"> Paragraph Text</label>
                    <textarea id="paragraphTextFld" className="form-control"  placeholder = "Paragraph Text" defaultValue={widget.text}
                           onChange={(event) => updateWidget({...widget, text: event.target.value})}
                    />
            </div>

            <div className= "row">
                    <label htmlFor="widgetNameFld"> Widget Name</label>
                    <input id="widgetNameFld" className="form-control"  placeholder = "Widget Name" value={widget.name}
                           onChange={(event) => updateWidget({...widget, name: event.target.value})}
                    />
            </div>
        </div>
        <div className="my-3 mx-2">
            <div className= "row ">
                <div style=
                         {{display: edit === "0"
                                 ? 'block': 'none'}}>
                    <h3>Preview</h3>
                </div>
            </div>
        <div className="row ">
                <p>{widget.text}</p>
            </div>
        </div>
    </div>

export default ParagraphWidget