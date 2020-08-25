import { Injectable } from "@angular/core";
import { Libelle, MapLiblelle } from "../models/libelle.model";




@Injectable({
    providedIn: 'root'
})

export class LibelleService {

    libelleList = [];

    constructor() { }


    getLibelleValue(key: string): string {
        let value = '';
        this.libelleList.find(mapLibelleKey => {
            if (key === mapLibelleKey.key) {
                value = mapLibelleKey.value;
            }
        });
        return value;
    }

    getLibelleList(id: string): Libelle[] {
        MapLiblelle.forEach((libelleKey: Libelle) => {
            if (libelleKey.key.includes(id)) {
                this.libelleList.push(libelleKey);
            }
        });
        return this.libelleList;
    }

}