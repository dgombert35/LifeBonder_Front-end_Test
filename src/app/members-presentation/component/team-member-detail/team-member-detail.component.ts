import { Component, OnInit, Input } from '@angular/core';

import { Member } from 'src/app/models/member.model';
import { SocialNetwork } from 'src/app/models/socialNetworksIcon.model';
import { LibellePipe } from '../../../Pipes/libelle.pipe';


@Component({
  selector: 'app-team-member-detail',
  templateUrl: './team-member-detail.component.html',
  styleUrls: ['./team-member-detail.component.css']
})
export class TeamMemberDetailComponent implements OnInit {

  @Input()
  memberDetail: Member;

  @Input()
  socialNetworkList: SocialNetwork[];

  socialNetWorkDetail: SocialNetwork;


  constructor(private readonly libellePipe: LibellePipe) { }

  ngOnInit(): void {



    this.socialNetworkList.forEach(el => {
      let elName = this.libellePipe.transform(el.name);
      let memberName = this.libellePipe.transform(this.memberDetail.name);
      if(memberName.match(elName)){
        this.socialNetWorkDetail = el;
      }
    });
  }

}
