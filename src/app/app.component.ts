import { Component } from '@angular/core';
import { LibelleService } from './services/libelle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifeBonder-FrontEnd-Test';

  constructor(private readonly libelleService: LibelleService){}

  ngOnInit(){
    this.libelleService.getLibelleList('textIntroduction');
  }
}
