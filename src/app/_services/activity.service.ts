import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';

import { from, Observable } from 'rxjs';
import { finalize, switchMap } from 'rxjs/operators';
import { Activity } from '../_models/activity';

export interface FilesUploadMetadata {
    uploadProgress$: Observable<number>;
    downloadUrl$: Observable<string>;
}

@Injectable({
    providedIn: 'root'
})

export class ActivityService {
    private activityPath = '/activity';
    private activityIconPath = '/activity-icon';
    private dbActivity = '/activity';

    constructor(
        private db: AngularFireDatabase,
        private storage: AngularFireStorage
    ) { }


    public async pushFileToStorage(fileUpload: Activity) {

        const actPath = `${this.activityPath}/${fileUpload.image.name}`;
        const actIconPath = `${this.activityIconPath}/${fileUpload.icon.name}`;
        const actStorageRef = this.storage.ref(actPath);
        const actIconStorageRef = this.storage.ref(actIconPath);

        const uploadActivity = this.storage.upload(actPath, fileUpload.image);
        const uploadActivityIcon = this.storage.upload(actIconPath, fileUpload.icon);
        let activityName = fileUpload.image.name;
        let iconName = fileUpload.icon.name;

        console.log(activityName,iconName);

        uploadActivity.snapshotChanges().pipe(
            finalize(() => {
                actStorageRef.getDownloadURL().subscribe(async downloadURL => {
                    fileUpload.activity_name = activityName;
                    fileUpload.image = downloadURL;
                });
            })
        ).subscribe();

        uploadActivityIcon.snapshotChanges().pipe(
            finalize(() => {
                actIconStorageRef.getDownloadURL().subscribe(async downloadURL => {
                    fileUpload.activity_icon_name = iconName;
                    fileUpload.icon = downloadURL;
                    console.log(fileUpload);
                    this.saveFileData(fileUpload);
                });
            })
        ).subscribe();
        return uploadActivityIcon.percentageChanges();
    }


    private async saveFileData(fileUpload: Activity): Promise<void> {
        await this.db.list(this.dbActivity).push(fileUpload);
    }

    getFiles(): AngularFireList<Activity> {
        return this.db.list(this.dbActivity);
    }

    deleteFile(fileUpload: Activity): void {
        this.deleteFileDatabase(fileUpload.key)
            .then(() => {
                this.deleteActivityFileStorage(fileUpload.activity_name);
                this.deleteActivityIconFileStorage(fileUpload.activity_icon_name);
            })
            .catch(error => console.log(error));
    }

    private deleteFileDatabase(key: string): Promise<void> {
        return this.db.list(this.dbActivity).remove(key);
    }

    private deleteActivityFileStorage(name: string): void {
        const storageRef = this.storage.ref(this.activityPath);
        storageRef.child(name).delete();
    }

    private deleteActivityIconFileStorage(name: string): void {
        const storageRef = this.storage.ref(this.activityIconPath);
        storageRef.child(name).delete();
    }

}