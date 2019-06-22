import Widgets from '../data/widgets'
import React from 'react'
class WidgetService {

    static myInstance = null;
    widgets = Widgets;
    // apiString = "https://fierce-sea-47240.herokuapp.com";
    apiString = "http://localhost:8080";

    static getInstance() {
        if (WidgetService.myInstance == null) {
            WidgetService.myInstance =
                new WidgetService();
        }
        return this.myInstance;
    }

    findAllWidgets = () => {
             return fetch(this.apiString+"/api/widgets")
                .then(response => response.json())
                }

        deleteWidget = wid => {
            return fetch(this.apiString+`/api/widgets/${wid}`, {
                method: 'DELETE'
            })
            .then(response => response.json())
            }



    findWidgetById = wid => {
        return fetch(this.apiString+"/api/widgets/${wid}")
                        .then(response => response.json())
                        }


    updateWidget = (wid, newWidget) => {
          return fetch(this.apiString+`/api/widgets/${wid}`, {
                         method: 'PUT',
                         body: JSON.stringify(newWidget) ,

                         headers: {
                                'content-type': 'application/json'
                                 }
                          })
          .then(response => response.json())
                               }

    createWidget = (widget) => {
                return fetch(this.apiString+`/api/widgets`, {
                                         method: 'POST',
                                         body: JSON.stringify(widget),
                                         headers: {
                                                         'content-type': 'application/json'
                                                     }
                                          })
                          .then(response => response.json())
                                               }



    reorderItems = (direction, wid, widgets )=>{
        const position = widgets.findIndex((i) => i.id === wid)
        if(position === 0 && direction === -1){
        return widgets;
        }
        const item = widgets[position] // save item for later
        widgets = widgets.filter((i) => i.id != wid) // remove item from array

        widgets.splice(position+direction, 0, item)
        return widgets;
    }
    enableEditing = (editing) => {
        this.widgets = this.widgets.map(widget => widget.editing = editing)
        return this.widgets;
    }
}

export default WidgetService