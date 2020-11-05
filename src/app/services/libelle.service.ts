import { Injectable } from "@angular/core";
import { Libelle, MapLiblelle } from '../models/libelle.model';
import { Store } from '../store';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { first, map, switchMap, tap } from 'rxjs/operators';




@Injectable({
    providedIn: 'root'
})

export class LibelleService {

    libelleList: Libelle[];
    libellesListWithId: Libelle[];
    libelleListFromCms: Libelle[];

    constructor(private store: Store, private http: HttpClient) { }

/*
    getLibelleValue(key: string): string {
        let value = '';
        this.libelleList.find(mapLibelleKey => {
            if (key === mapLibelleKey.key) {
                value = mapLibelleKey.value;
            }
        });
        return value;
    } */

    getLibelleValueFromWithId(key: string): string {
        console.log('key', key);
        let value = '';
        this.libellesListWithId.find(mapLibelleKey => {
            if (key === mapLibelleKey.key) {
                value = mapLibelleKey.value;
            }
        });
        return value;
    }

/*     getLibelleListFromMapLibelle(id: string): Libelle[] {
        MapLiblelle.forEach((libelleKey: Libelle) => {
            if (libelleKey.key.includes(id)) {
                this.libelleList.push(libelleKey);
            }
        });
        return this.libelleList;
    } */

    getLibelleList(id: string): Libelle[] {
        this.libellesListWithId = [];

            this.libelleListFromCms.forEach(data => {
                if(data.key.includes(id)){
                    this.libellesListWithId.push(data);
                }
            })

        console.log('libelleList', this.libellesListWithId);
        return this.libellesListWithId;
    }

    getLibelleListFromCms(): Observable<Libelle[]> {
        this.libelleListFromCms = [];
        return this.http.get<Libelle[]>('assets/datas.json').pipe(tap((datas) => {
           for(let data in datas){
               this.libelleListFromCms.push(datas[data]);
           }
        }));
    }

}