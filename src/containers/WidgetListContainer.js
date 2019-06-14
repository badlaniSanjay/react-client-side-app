import WidgetListComponent from "../components/WidgetListComponent";
import WidgetService from "../services/WidgetService";
import {connect} from 'react-redux'

const service = WidgetService.getInstance();

const stateToPropMapper = state => ({
    widgets: state.widgets, edit: state.edit
})

const propsToDispatcher = dispatch => ({
    loadWidgets: () => {
        service
            .findAllWidgets()
            .then(widgets => dispatch({
                type: "FIND_ALL_WIDGETS",
                widgets: widgets
            }))
    },
    updateWidget1: widget => {
        dispatch({type: 'UPDATE_WIDGET', widget: widget})
    },
    updateWidget: widget =>{
        service.updateWidget(widget.id, widget).then(widgets => dispatch({
            type: 'UPDATE_WIDGET',
            widgets: widgets
        }))
    },
    deleteWidget1: (wid) => {dispatch({type: 'DELETE_WIDGET', widgetId: wid})},
    deleteWidget: (wid) => {
        service
            .deleteWidget(wid)
            .then(widgets => dispatch({
                type: 'DELETE_WIDGET',
                widgets: widgets
            }))
    },
    createWidget1: () => {
        dispatch({
            type: 'CREATE_WIDGET',
            widget: {
                id: (new Date()).getTime(),
                name: 'New Widget ',
                type: 'HEADING',
                order: 1,
                text: 'Hello New Heading World',
                size: 1,
                url: "https://picsum.photos/300/200",
                height:200,
                width:200,
                cssClass: 'String',
                style: 'None',
                value: "Hello",
                dataType: 'ul'
            }
        })
    },createWidget: () =>{

        service.createWidget({ id: 1234,
            name: 'Widget New',
            type: 'HEADING',
            order: 1,
            text: 'Hello New Heading World',
            size: 1,
            url: "https://picsum.photos/300/200",
            height:200,
            width:200,
            cssClass: 'String',
            style: 'None',
            value: "Hello",
            dataType: 'STRING'}).then(widgets => dispatch({
            type: 'CREATE_WIDGET',
            widgets: widgets
        }))
    },

    findAllWidgets1:() => {
        dispatch({
            type: 'FIND_ALL_WIDGETS'
        })
    },
    findAllWidgets: () =>{
        service.findAllWidgets().then(widgets => dispatch({
            type: 'FIND_ALL_WIDGETS',
            widgets: widgets
        }))
    },
    findWidgetById1:(wid) =>{
        dispatch({
            type: 'FIND_WIDGET_BY_ID',
            widgetId: wid
        })
    },
    findWidgetById: (wid) =>{
        service.findWidgetById(wid).then(widget => dispatch({
            type: 'FIND_WIDGET_BY_ID',
            widget: widget
        }))
    },
    reorderItems: (direction, wid) =>{
        dispatch({
            type: 'REORDER_ITEMS',
            widgetId: wid,
            direction: direction
        })
    },
    enableEditing:(editing) =>{
        dispatch({
                     type: 'ENABLE_EDITING',
                     editing : editing
                 })
    }

})

const WidgetListContainer = connect(
    stateToPropMapper, propsToDispatcher
)
(WidgetListComponent)

export default WidgetListContainer