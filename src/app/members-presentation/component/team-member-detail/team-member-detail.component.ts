import { Component, OnInit, Input } from '@angular/core';
import { member } from '../../../objects/member';
import { socialNetworkForMember, socialNetwork } from '../../../objects/socialNetworksIcon';


@Component({
  selector: 'app-team-member-detail',
  templateUrl: './team-member-detail.component.html',
  styleUrls: ['./team-member-detail.component.css']
})
export class TeamMemberDetailComponent implements OnInit {

  @Input()
  memberDetail: member;

  socialNetworkList = socialNetworkForMember;
  socialNetWorkDetail: socialNetwork;


  constructor() { }

  ngOnInit(): void {


    this.socialNetworkList.forEach(el => {
      if(this.memberDetail.name.match(el.name)){
        this.socialNetWorkDetail = el;
      }
    });
  }

}
