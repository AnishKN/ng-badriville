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

export class ProductService {
    private dbOtherProduct = '/other-product';
    private dbSpecialProduct = '/special-product';

    constructor(
        private db: AngularFireDatabase
    ) { }


    getProduct(): AngularFireList<Activity> {
        return this.db.list(this.dbOtherProduct);
    }

    getSpecialProduct(): AngularFireList<Activity> {
        return this.db.list(this.dbSpecialProduct);
    }
}