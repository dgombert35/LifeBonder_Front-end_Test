import { Component, OnInit } from '@angular/core';
import { choiceMenu } from '../../../objects/choiceMenu';
import { menuListConst } from '../../../objects/choiceMenu'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuList: choiceMenu[] = menuListConst;

  constructor() { }

  ngOnInit(): void {
  }

}
