import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';

import { from, Observable } from 'rxjs';
import { finalize, switchMap } from 'rxjs/operators';
import { HomeSlider } from '../_models/home_slider';

export interface FilesUploadMetadata {
    uploadProgress$: Observable<number>;
    downloadUrl$: Observable<string>;
}

@Injectable({
    providedIn: 'root'
})

export class HomeSliderService {
    private basePath = '/slider';
    private dbhomeSlider = '/home-slider';

    constructor(
        private db: AngularFireDatabase,
        private storage: AngularFireStorage
    ) {
    }

    getFiles(): AngularFireList<HomeSlider> {
        return this.db.list(this.dbhomeSlider);
    }
}