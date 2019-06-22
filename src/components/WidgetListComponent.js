import React from 'react'
import HeadingWidget from "./widgets/HeadingWidget";
import ParagraphWidget from "./widgets/ParagraphWidget";
import LinkWidget from "./widgets/LinkWidget";
import ListWidget from "./widgets/ListWidget";
import ImageWidget from "./widgets/ImageWidget";


class WidgetListComponent extends React.Component {//({widgets, deleteWidget, createWidget, updateWidget}) =>//extends React.Component{
    constructor(props) {
        super(props)
        this.props.loadWidgets();
    }

    render() {
        return (


        <div className="container-fluid">
            <div className="row">
                <div className="col"></div>

                <div className="col-2 float-right">

                    <div style=
                             {{
                                 display: this.props.edit === "1"
                                     ? 'block' : 'none'
                             }}>
                        <i className="fa fa-toggle-off fa-2x" aria-hidden="true"
                           onClick={() => this.props.enableEditing("0")}></i>

                    </div>
                    <div style=
                             {{
                                 display: this.props.edit === "0"
                                     ? 'block' : 'none'
                             }}>
                        <i className="fa fa-toggle-on fa-2x" aria-hidden="true"
                           onClick={() => this.props.enableEditing("1")}></i>
                    </div>
                </div>
            </div>

            <div className="list-group">
                {
                    this.props.widgets && this.props.widgets.map((widget, index) =>

                            <div className="list-group-item my-3" key={widget.id}>
                                <div style=
                                         {{
                                             display: this.props.edit === "0"
                                                 ? 'block' : 'none'
                                         }}>


                                    <div className="row">
                                        <div className="col-sm-8 text-bold">
                                            <div className="row text-bold">
                                                {widget.type === 'HEADING' && <h2>Heading widget</h2>}
                                                {widget.type === 'PARAGRAPH' && <h2>Paragraph widget</h2>}
                                                {widget.type === 'LINK' && <h2>Link widget</h2>}
                                                {widget.type === 'LIST' && <h2> List widget</h2>}
                                                {widget.type === 'IMAGE' && <h2>Image widget</h2>}
                                            </div>


                                        </div>

                                        <div className="btn col-sm-4">

                          <span className="fa-stack mx-2" onClick={() => this.props.reorderItems(-1, widget.id, this.props.widgets)}>
                              {index != 0 && <i className="fa fa-square fa-stack-2x"></i>}
                              {index != 0 && <i className="fa fa-arrow-up  fa-stack-1x fa-inverse"></i>}
                             </span>


                                            <span className="fa-stack mx-2" onClick={() => this.props.reorderItems(1, widget.id, this.props.widgets)}>
                             {index != this.props.widgets.length - 1 && <i className="fa fa-square fa-stack-2x"></i>}
                                                {index != this.props.widgets.length - 1 &&
                                                <i className="fa fa-arrow-down  fa-stack-1x fa-inverse"></i>}
                             </span>


                                            <select className="mx-2"
                                                    onChange={(event) => this.props.updateWidget({
                                                        ...widget,
                                                        type: event.target.value
                                                    })}
                                                    value={widget.type}>
                                                <option value="HEADING">Heading</option>
                                                <option value="PARAGRAPH">Paragraph</option>
                                                <option value="IMAGE">Image</option>
                                                <option value="LIST">List</option>
                                                <option value="LINK">Link</option>
                                            </select>


                                            <span className="fa-stack mx-2" onClick={() => this.props.deleteWidget(widget.id)}>
            <i className="fa fa-circle fa-stack-2x text-danger"></i>
            <i className="fa fa-trash fa-stack-1x text-white"></i>
          </span>

                                        </div>
                                    </div>

                                </div>
                                <div className="row">
                                    {
                                        widget.type === 'HEADING' &&
                                        <HeadingWidget widget={widget} updateWidget={this.props.updateWidget} edit={this.props.edit}/>
                                    }
                                    {
                                        widget.type === 'PARAGRAPH' &&
                                        <ParagraphWidget widget={widget} updateWidget={this.props.updateWidget} edit={this.props.edit}/>
                                    }
                                    {
                                        widget.type === 'LINK' &&
                                        <LinkWidget widget={widget} updateWidget={this.props.updateWidget} edit={this.props.edit}/>
                                    }
                                    {
                                        widget.type === 'LIST' &&
                                        <ListWidget widget={widget} updateWidget={this.props.updateWidget} edit={this.props.edit}/>
                                    }
                                    {
                                        widget.type === 'IMAGE' &&
                                        <ImageWidget widget={widget} updateWidget={this.props.updateWidget} edit={this.props.edit}/>

                                    }
                                </div>
                            </div>
                    )
                }


                <div className='list-group-item ' style=
                    {{
                        display: this.props.edit === "0"
                            ? 'block' : 'none'
                    }}>
                    <div className="row">
                        <div className="col-10"></div>
                        <div className="col-2">
                            <button onClick={() => this.props.createWidget()}>
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}

export default WidgetListComponent