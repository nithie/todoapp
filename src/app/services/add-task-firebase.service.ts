import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable()
export class AddTaskFirebaseService {

    todos: AngularFireList<any>;
    todo: Observable<any[]>;

    constructor(private db: AngularFireDatabase) { }

    addTask(task, uid) {
        const listRef = this.db.list(uid);
        listRef.update(task.task, task);
    }

    getCompletedTask(uid): Observable<Task[]> {
        const listRef = this.db.list(uid);
        return listRef.valueChanges().map((data: Task[]) => {
            return data.filter((tasking: Task) => {
                    if (tasking.completed === true) {
                        return tasking;
                    }
            });
        });
    }

    getUnCompletedTask(uid): Observable<Task[]> {
        const listRef = this.db.list(uid);
        return listRef.valueChanges().map((data: Task[]) => {
            return data.filter((tasking: Task) => {
                    if (tasking.completed === false) {
                        return tasking;
                    }
            });
        });
    }

    updateTask(uid, task) {
        const listRef = this.db.list(uid);
        listRef.update(task, {completed: true});
    }
}


