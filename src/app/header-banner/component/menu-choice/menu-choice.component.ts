import { Component, OnInit, Input } from '@angular/core';
import { ChoiceMenu } from '../../../models/choiceMenu.model';

@Component({
  selector: 'app-menu-choice',
  templateUrl: './menu-choice.component.html',
  styleUrls: ['./menu-choice.component.css']
})
export class MenuChoiceComponent implements OnInit {

  @Input()
  choiceMenu: ChoiceMenu;

  constructor() { }

  ngOnInit(): void {
  }



}
