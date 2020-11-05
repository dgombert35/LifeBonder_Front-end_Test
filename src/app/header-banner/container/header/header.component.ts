import { Component, OnInit } from '@angular/core';
import { LibellePipe } from '../../../Pipes/libelle.pipe';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerLogo: string;

  constructor(private readonly libellePipe: LibellePipe) { }

  ngOnInit(): void {

    this.headerLogo = this.libellePipe.transform('header.logo');
  }

}
