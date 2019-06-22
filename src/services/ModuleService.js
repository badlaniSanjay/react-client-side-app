import React from 'react'


export default class ModuleService {
    static myInstance = null;

    apiString = "https://fierce-sea-47240.herokuapp.com";
    // apiString = "http://localhost:8080";

    static getInstance(){
        if(ModuleService.myInstance == null){
            ModuleService.myInstance =
                new ModuleService();
        }
        return this.myInstance;
    }

    createModuleForCourse = (cid, module) => {
        return fetch(this.apiString+"/api/courses/"+cid, {
            method: 'POST',
            body: JSON.stringify(module),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
    }

    findAllModulesForCourse = (cid) => {
        return fetch(this.apiString+"/api/courses/"+cid)
            .then(response => response.json())
    }

    findModuleById = (id) => {

        return fetch(this.apiString+"/api/modules/"+id)
            .then(response => response.json())
    }

    updateModule = (id, module) => {

        return fetch(this.apiString+"/api/modules/"+id, {
            method: 'PUT',
            body: JSON.stringify(module) ,

            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
    }

    deleteModule = (id) => {
        return fetch(this.apiString+"/api/modules/"+id, {
            method: 'DELETE'
        })
            .then(response => response.json())
    }

}