import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { Task } from '../../types/task.interface';

@Component({
  selector: 'app-task-manager',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './task-manager.component.html',
  styleUrl: './task-manager.component.css',
})
export class TaskManagerComponent {
  taskForm: FormGroup;
  tasks: Task[] = [];

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.taskForm = this.fb.group({
      title: [''],
      description: [''],
    });

   
  }

  ngOnInit() {
    this.getTasks(); 
  }

  getTasks(){
    this.taskService.getAllTasks().subscribe({
      next: (res) => {
        this.tasks = res;
            }

    })

  }

  saveTask() {
    if (this.taskForm.invalid) {
      alert('Please enter a task');
      return;
    }


    const newTask: Task = this.taskForm.value;

    console.log(this.taskForm.value);

    this.taskService.createTask(this.taskForm.value).subscribe({
      next: (res) => {
        console.log('Task saved:', res);
        alert('Task successfully added');
        this.taskForm.reset();
      },
      error: (err) => {
        console.error('Error saving task:', err);
        alert('Failed to save task. Please try again.');
      },
    });
  }
}
