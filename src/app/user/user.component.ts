import { Component,computed,EventEmitter,Input, input,Output,output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";
// type User = {
//   id: string;
//   name: string;
//   avatar: string;
// }


const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
})
export class UserComponent {

  // @Input({required: true}) avatar!: string;
  // @Input({required:true}) name!: string;

  // avatar =input.required<string>();
  // name =input.required<string>();
  // id =input.required<string>();
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!:boolean;
  @Output() select= new EventEmitter();


  imagePath = computed(()=>{
    return 'assets/users/'+ this.user.avatar;
  });


  // get imagePath(){
  // return 'assets/users/'+ this.avatar;
  // }


onSelectUser() {
this.select.emit(this.user.id);
}
}
