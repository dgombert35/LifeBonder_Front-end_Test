import { Component, OnInit } from '@angular/core';

import { ChoiceMenu } from '../../../models/choiceMenu.model';
import { ObjectsService } from '../../../services/objects.service';
import { LibelleService } from '../../../services/libelle.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuList: ChoiceMenu[];

  constructor(private readonly objectsSerivce: ObjectsService, private readonly libelleService: LibelleService) { }

  ngOnInit(): void {

    this.libelleService.getLibelleList('choiceMenu');
    this.menuList = this.objectsSerivce.getMenuList();
  }

}
