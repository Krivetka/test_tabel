import {Component, inject, OnInit} from '@angular/core';
import {UserService} from "../../shared/services/user.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit {
  userService: UserService = inject(UserService)

  searchValue: string = ""

  ngOnInit(): void {
      this.userService.getData()
  }

  getSearchData(event: Event): void {
    if (this.searchValue.length > 2) {
      this.userService.getSearchData(this.searchValue)
    } else if (event.type === 'click' && this.searchValue.length < 1) {
      alert("Type some info")
    }
  }
}


