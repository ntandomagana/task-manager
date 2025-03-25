import { Component, NgModule } from '@angular/core';
import { Task } from '../../types/task.interface';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-manager',
  standalone: true,
  imports: [],
  templateUrl: './task-manager.component.html',
  styleUrl: './task-manager.component.css'
})
export class TaskManagerComponent {
onDescriptionChange($event: Event) {
  this.task.description =( $event.target as HTMLInputElement).value;

}
onTitleChange($event: Event) {
  this.task.title =( $event.target as HTMLInputElement).value;

}



  task: Task = { 
    id: 0,
    title: '',
    description: ''
  }

  constructor(private taskService: TaskService) {}



   saveTask(){

    if(!this.task.title.trim() || !this.task.description.trim()) {
      alert("Please enter a task");
      return;
    }

    console.log(this.task)

    this.taskService.createTask(this.task).subscribe({
      next:(res) => {
        console.log('Tasksaved:', res);
        alert('Tasl successfully added');
        this.task = { id:0, title: '', description: ''}
      },

      error: (err) => {
        console.error('Error saving task:', err);
        alert('Failed to save task. Please try again.');
      }
    })

   
    

  }

}
