import Widgets from '../data/widgets'
import React from 'react'
class WidgetService {

    static myInstance = null;
    widgets = Widgets

    static getInstance() {
        if (WidgetService.myInstance == null) {
            WidgetService.myInstance =
                new WidgetService();
        }
        return this.myInstance;
    }

    createWidget = widget => {

        this.widgets.push(widget);
        return this.widgets;
    }
    findAllWidgets = () => {
        return this.widgets;
    }
    findWidgetById = wid => {
        return this.widgets.find(widget => widget.id == wid);
    }
    updateWidget = (wid, newWidget) => {
        this.widgets = this.widgets.map(widget => widget.id == wid ? newWidget : widget);
        return this.widgets;
    }
    deleteWidget = wid => {
        this.widgets = this.widgets.filter(widget => widget.id != wid)
        return this.widgets;
    }
    reorderItems = (direction, wid )=>{
        const position = this.widgets.findIndex((i) => i.id === wid)
        const item = this.widgets[position] // save item for later
        this.widgets = this.widgets.filter((i) => i.id != wid) // remove item from array

        this.widgets.splice(position+direction, 0, item)
        return this.widgets;
    }
    enableEditing = (editing) => {
        this.widgets = this.widgets.map(widget => widget.editing = editing)
        return this.widgets;
    }
}

export default WidgetService