import WidgetListComponent from "../components/WidgetListComponent";
import {connect} from 'react-redux'

const stateToPropMapper = state => ({
    widgets: state.widgets, edit: state.edit
})

const propsToDispatcher = dispatch => ({
    updateWidget: widget => {
        dispatch({type: 'UPDATE_WIDGET', widget: widget})
    },
    deleteWidget: (wid) => {dispatch({type: 'DELETE_WIDGET', widgetId: wid})},
    createWidget: () => {
        dispatch({
            type: 'CREATE_WIDGET',
            widget: {
                id: (new Date()).getTime(),
                name: 'New Widget',
                type: 'HEADING'
            }
        })
    },
    findAllWidgets:() => {
        dispatch({
            type: 'FIND_ALL_WIDGETS'
        })
    },
    findWidgetById:(wid) =>{
        dispatch({
            type: 'FIND_WIDGET_BY_ID',
            widgetId: wid
        })
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