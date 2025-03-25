import { Component } from '@angular/core';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';

// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [TaskManagerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
