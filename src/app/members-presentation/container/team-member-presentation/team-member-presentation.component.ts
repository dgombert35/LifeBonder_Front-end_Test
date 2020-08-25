import { Component, OnInit } from '@angular/core';
import {  Member } from '../../../models/member.model';
import { LibelleService } from '../../../services/libelle.service';
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

  constructor(private readonly libelleService: LibelleService, private readonly objectService: ObjectsService) { }

  ngOnInit(): void {
    this.libelleService.getLibelleList('socialNetworks');
    this.libelleService.getLibelleList('member');
    this.socialNetworkList = this.objectService.getSocialNetworkMembersList();
    this.memberDetailList = this.objectService.getMemberList();
  }

}
