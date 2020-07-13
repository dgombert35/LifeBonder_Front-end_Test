import { Component, OnInit, Input } from '@angular/core';
import { socialNetwork } from '../../../objects/socialNetworksIcon';

@Component({
  selector: 'app-social-networks',
  templateUrl: './social-networks.component.html',
  styleUrls: ['./social-networks.component.css']
})
export class SocialNetworksComponent implements OnInit {

  @Input()
  socialNetworkDetail: socialNetwork;


  constructor() { }

  ngOnInit(): void {
  }
}
