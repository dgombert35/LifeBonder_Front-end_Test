import { Component, OnInit } from '@angular/core';
import { memberList, member } from '../../../objects/member';

@Component({
  selector: 'app-team-member-presentation',
  templateUrl: './team-member-presentation.component.html',
  styleUrls: ['./team-member-presentation.component.css']
})
export class TeamMemberPresentationComponent implements OnInit {

  memberDetailList: member[] = memberList;

  constructor() { }

  ngOnInit(): void {
  }

}
