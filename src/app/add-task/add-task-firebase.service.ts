import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class AddTaskFirebaseService {

    itemsRef: AngularFireList<any>;
    items: Observable<any[]>;
    constructor(db: AngularFireDatabase) {
        this.itemsRef = db.list('messages');
        this.items = this.itemsRef.snapshotChanges().map(changes => {
            return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
          });
    }

    addTask( task: string) {
    this.itemsRef.push({ text: task });
    }
}


