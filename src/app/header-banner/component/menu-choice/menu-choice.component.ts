import { Component, OnInit, Input } from '@angular/core';
import { choiceMenu } from '../../../objects/choiceMenu';

@Component({
  selector: 'app-menu-choice',
  templateUrl: './menu-choice.component.html',
  styleUrls: ['./menu-choice.component.css']
})
export class MenuChoiceComponent implements OnInit {

  @Input()
  choiceMenu: choiceMenu;

  constructor() { }

  ngOnInit(): void {
  }

 

}
