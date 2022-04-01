import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { User } from './model/user';
import { UserService } from './service/user-service';
import { SearchPipe } from './shared/search.pipe';
import { PaginatePipe } from 'ngx-pagination';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contact List App';
  users!: User[];
  searchRule!: string;
  recordsPerPage = 10;
  currentPage!: number;
  constructor(private userService: UserService, private sanitizer: DomSanitizer, private searchPipe: SearchPipe) {
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }

  public getSantizeUrl(url : string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
}

pageClick(pageNo: number) {
  this.currentPage = pageNo;
}

}
