import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DUMMY_USERS } from './dummy-users';
import { NgFor ,NgIf} from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser(){
  return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectUser(id:string) {
    this.selectedUserId= id;
  }
}
