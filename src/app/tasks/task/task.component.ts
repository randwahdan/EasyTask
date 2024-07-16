import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { TaskService } from '../tasks.service';
@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) task!: Task;
  @Output() complete =new EventEmitter<string>();
  private testService = inject(TaskService);
  onCompleteTask(){
    this.testService.removeTask(this.task.id);
  }
}
