import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

import { Observable } from 'rxjs';

export interface FilesUploadMetadata {
    uploadProgress$: Observable<number>;
    downloadUrl$: Observable<string>;
}

@Injectable({
    providedIn: 'root'
})

export class ContactUsService {
    private dbContactUs = '/contact-us';

    constructor(
        private db: AngularFireDatabase
    ) {
    }

    public async saveContactUs(query: any): Promise<void> {
        await this.db.list(this.dbContactUs).push(query);
    }

}