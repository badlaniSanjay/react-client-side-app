import React from 'react'
import HeadingWidget from "./widgets/HeadingWidget";
import ParagraphWidget from "./widgets/ParagraphWidget";
import LinkWidget from "./widgets/LinkWidget";
import ListWidget from "./widgets/ListWidget";
import ImageWidget from "./widgets/ImageWidget";



const WidgetListComponent = ({widgets, deleteWidget, createWidget, updateWidget, reorderItems, enableEditing , edit}) =>//extends React.Component{
<div className="container-fluid">
    <div className="row">
        <div className="col"></div>

        <div className="col-2 float-right">
            Preview
            <div style=
                     {{display: edit === "1"
                             ? 'block': 'none'}}>
            <i className="fa fa-toggle-off" aria-hidden="true" onClick={()=>enableEditing("0")}></i>
            </div>
            <div style=
                     {{display: edit === "0"
                             ? 'block': 'none'}}>
            <i className="fa fa-toggle-on" aria-hidden="true" onClick={()=>enableEditing("1")}></i>
            </div>
        </div>
    </div>

    <div className="list-group">
        {
            widgets.map((widget, index) =>

                <div className="list-group-item" key={widget.id}>
                    <div style=
                             {{display: edit === "0"
                                     ? 'block': 'none'}}>


                    <div className="row">
                        <div className="col">
                        {widget.type} widget

                            {/*<h6>{widgets.findIndex(widget)}</h6>*/}
                        </div>
                        <div >
                     <div className="btn col-0.5 float-right">
                         {index != 0 &&  <i className="fa fa-arrow-up " aria-hidden="true" onClick={() => reorderItems(-1, widget.id)} ></i>}
                     </div>
                    </div>
                        <div className="btn col-0.5 float-right">
                            {index != widgets.length -1 &&   <i className="fa fa-arrow-down" aria-hidden="true" onClick={() => reorderItems(1, widget.id)}></i>}
                        </div>
                        <div className="float-right col-1">
                    <select
                        onChange={(event) => updateWidget({...widget, type: event.target.value})}
                        value={widget.type}>
                        <option value="HEADING">Heading</option>
                        <option value="PARAGRAPH">Paragraph</option>
                        <option value="IMAGE">Image</option>
                        <option value="LIST">List</option>
                        <option value="LINK">Link</option>
                    </select>
                    </div>
                        <div className="float-right col-1">
                    <button
                        onClick={() => deleteWidget(widget.id)}>
                        Delete
                    </button>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    {
                        widget.type === 'HEADING' &&
                        <HeadingWidget widget={widget} updateWidget={updateWidget} edit ={edit}/>
                    }
                    {
                        widget.type === 'PARAGRAPH' &&
                        <ParagraphWidget widget={widget} updateWidget={updateWidget} edit ={edit}/>
                    }
                    {
                        widget.type === 'LINK' &&
                        <LinkWidget widget={widget} updateWidget={updateWidget} edit ={edit}/>
                    }
                    {
                        widget.type === 'LIST' &&
                        <ListWidget widget={widget} updateWidget={updateWidget} edit ={edit}/>
                    }
                    {
                        widget.type === 'IMAGE' &&
                        <ImageWidget widget={widget} updateWidget={updateWidget} edit ={edit}/>

                    }
                    </div>
                </div>
            )
        }


        <div className='list-group-item'>
            <button onClick={() => createWidget()}>
                Add
            </button>
        </div>
    </div>
</div>
export default WidgetListComponent