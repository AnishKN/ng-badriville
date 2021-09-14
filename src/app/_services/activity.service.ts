import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';

import { Observable } from 'rxjs';
import { Activity } from '../_models/activity';

export interface FilesUploadMetadata {
    uploadProgress$: Observable<number>;
    downloadUrl$: Observable<string>;
}

@Injectable({
    providedIn: 'root'
})

export class ActivityService {
    private dbActivity = '/activity';

    constructor(
        private db: AngularFireDatabase
    ) { }


    getFiles(): AngularFireList<Activity> {
        return this.db.list(this.dbActivity);
    }

}