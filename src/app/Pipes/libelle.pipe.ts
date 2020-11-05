import { Pipe, PipeTransform } from '@angular/core';

import { LibelleService } from '../services/libelle.service';


@Pipe({
    name: 'libelle'
})
export class LibellePipe implements PipeTransform {


    constructor(private readonly libelleService: LibelleService) {
    }

    transform(key: string): string {
        return this.libelleService.getLibelleValueFromWithId(key);
    }

}