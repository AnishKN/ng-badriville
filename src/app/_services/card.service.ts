import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

import { Observable } from 'rxjs';

export interface FilesUploadMetadata {
    uploadProgress$: Observable<number>;
    downloadUrl$: Observable<string>;
}

@Injectable({
    providedIn: 'root'
})

export class CardService {
    private dbHomestay = '/homestay';
    private dbResort = '/resort';
    homestayRef: AngularFireObject<any>;

    constructor(
        private db: AngularFireDatabase,
    ) { }

    getHomestayData(): AngularFireList<any> {
        return this.db.list(this.dbHomestay);
    }

    getResortsData(): AngularFireList<any> {
        return this.db.list(this.dbResort);
    }
}