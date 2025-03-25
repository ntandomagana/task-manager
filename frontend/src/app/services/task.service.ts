import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../types/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = environment.SERVER + '/api/v1';

  constructor(private http: HttpClient) { }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }
    
}
