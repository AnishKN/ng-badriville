import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

import { Observable } from 'rxjs';
import { Activity } from '../_models/activity';

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

    public async saveHomestayData(query: any): Promise<void> {
        await this.deleteHomestayData();
        await this.db.list(this.dbHomestay).push(query);
    }

    getHomestayData(): AngularFireList<any> {
        return this.db.list(this.dbHomestay);
    }

    private deleteHomestayData() {
        this.homestayRef = this.db.object(this.dbHomestay);
        this.homestayRef.remove();
    }

    public async saveResortsData(query: any): Promise<void> {
        await this.deleteResortsData();
        await this.db.list(this.dbResort).push(query);
    }

    getResortsData(): AngularFireList<any> {
        return this.db.list(this.dbResort);
    }

    private deleteResortsData() {
        this.homestayRef = this.db.object(this.dbResort);
        this.homestayRef.remove();
    }

}