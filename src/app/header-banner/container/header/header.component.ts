import { Component, OnInit } from '@angular/core';
import { LibelleService } from 'src/app/services/libelle.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerLogo: string;

  constructor(private readonly libelleService: LibelleService) { }

  ngOnInit(): void {
    this.libelleService.getLibelleList('header');
    this.headerLogo = this.libelleService.getLibelleValue('header.logo');
  }

}
