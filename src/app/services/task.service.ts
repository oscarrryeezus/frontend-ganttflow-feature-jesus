import { Injectable } from '@angular/core';
import { Task } from '../models/tasks';
import { HttpClient } from '@angular/common/http';
import { HandleError } from './service-helper';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class TaskService {
    private taskUrl = 'https://backend-ganttflow.up.railway.app/api/task';


    constructor(private http: HttpClient) {}


    get(): Promise<Task[]>{
        return firstValueFrom(this.http.get(this.taskUrl))
            .catch(HandleError);
    }


    insert(task: Task): Promise<Task> {
        return firstValueFrom(this.http.post(this.taskUrl, task))
            .catch(HandleError);
    }


    update(task: Task): Promise<void> {
        return firstValueFrom(this.http.put(`${this.taskUrl}/${task.id}`, task))
            .catch(HandleError);
    }


    remove(id: number): Promise<void> {
        return firstValueFrom(this.http.delete(`${this.taskUrl}/${id}`))
            .catch(HandleError);
    }
}
