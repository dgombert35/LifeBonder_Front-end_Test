import { Component, OnInit } from '@angular/core';
import {  Member } from '../../../models/member.model';

import { ObjectsService } from '../../../services/objects.service';
import { SocialNetwork } from 'src/app/models/socialNetworksIcon.model';

@Component({
  selector: 'app-team-member-presentation',
  templateUrl: './team-member-presentation.component.html',
  styleUrls: ['./team-member-presentation.component.css']
})
export class TeamMemberPresentationComponent implements OnInit {

  memberDetailList: Member[];
  socialNetworkList: SocialNetwork[];

  any$;

  constructor(private readonly objectService: ObjectsService) { }

  ngOnInit(): void {

    this.socialNetworkList = this.objectService.getSocialNetworkMembersList();
    this.memberDetailList = this.objectService.getMemberList();
  }

}
