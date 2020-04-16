import { Component } from '@angular/core';
import { PaginationService } from './pagination.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TheERRORs-COVID19';
  page : {numero:number};

  constructor(private paginationService:PaginationService) { 
    this.page = paginationService.currentPage;
  }


}
