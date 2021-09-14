import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import { Observable } from 'rxjs';
import { Activity } from '../_models/activity';

export interface FilesUploadMetadata {
    uploadProgress$: Observable<number>;
    downloadUrl$: Observable<string>;
}

@Injectable({
    providedIn: 'root'
})

export class ReviewService {
    private dbReview = '/customer-review';

    constructor(
        private db: AngularFireDatabase
    ) { }


    getReview(): AngularFireList<Activity> {
        return this.db.list(this.dbReview);
    }
}