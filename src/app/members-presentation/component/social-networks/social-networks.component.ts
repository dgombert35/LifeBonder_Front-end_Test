import { Component, OnInit, Input } from '@angular/core';
import { SocialNetwork } from '../../../models/socialNetworksIcon.model';
@Component({
  selector: 'app-social-networks',
  templateUrl: './social-networks.component.html',
  styleUrls: ['./social-networks.component.css']
})
export class SocialNetworksComponent implements OnInit {

  @Input()
  socialNetworkDetail: SocialNetwork;


  constructor() { }

  ngOnInit(): void {
  }
}
