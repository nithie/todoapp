import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class AddTaskFirebaseService {

    todos: AngularFireList<any>;
    todo: Observable<any[]>;

    constructor(private db: AngularFireDatabase) { }

    addTask(task, uid) {
        const listRef = this.db.list(uid);
        listRef.update(task.task, task);
    }

    getTask(uid) {
        const listRef = this.db.list(uid);
        return listRef.valueChanges();
    }

    updateTask(uid, task) {
        const listRef = this.db.list(uid);
        listRef.update(task, {completed: true});
    }
}


