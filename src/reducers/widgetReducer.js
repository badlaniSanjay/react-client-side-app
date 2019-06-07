import widgets from '../data/widgets'
import WidgetService from '../services/WidgetService'

// reducer => state => store => provider => container => map to props => components
const widgetService = WidgetService.getInstance();

const widgetReducer = (state={widgets: widgets, edit:"0"}, action) => {
    if(action.type === 'DELETE_WIDGET') {
        return {

            widgets: widgetService.deleteWidget(action.widgetId),
            edit: state.edit
        }

    } else if(action.type === 'CREATE_WIDGET') {

        return {
            // widgets: [
            //     ...state.widgets,
            //     {
            //         id: (new Date()).getTime(),
            //         name: 'New Widget',
            //         type: 'HEADING'
            //     }
            // ],
            // edit: state.edit
              widgets : widgetService.createWidget(action.widget),
            edit:state.edit
        }
    } else if(action.type === 'UPDATE_WIDGET') {
        return {
            // widgets: state.widgets.map(widget => widget.id == action.widget.id ? action.widget : widget)
            widgets : widgetService.updateWidget(action.widget.id, action.widget),
            edit: state.edit
        }
    }
    else if(action.type === 'FIND_ALL_WIDGETS'){
        return {
            widgets: widgetService.findAllWidgets(),
            edit: state.edit
        }

    }else if(action.type === 'FIND_WIDGET_BY_ID'){

        return {
            widgets: widgetService.findWidgetById(action.widgetId),
            edit: state.edit
        }
    }
    else if(action.type === 'REORDER_ITEMS'){
        // const position = widgets.findIndex((i) => i.id === action.widgetId)
        // const item = widgets[position] // save item for later
        // const newWidgets = widgets.filter((i) => i.id !== action.widgetId) // remove item from array
        return {
            // widgets: newWidgets.splice(position + action.direction, 0, item)
            widgets : widgetService.reorderItems(action.direction, action.widgetId),
            edit: state.edit
        }
    } else if(action.type === 'ENABLE_EDITING'){

        return {
            edit:action.editing,
            widgets: state.widgets
        }
    }
    return state;
}

export default widgetReducer