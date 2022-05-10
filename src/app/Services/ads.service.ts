import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { Ad } from '../Models/ad.model';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  private dbPath = '/ads';
  private adsRef: AngularFirestoreCollection<Ad>;
  constructor(private db: AngularFirestore) {
    this.adsRef = db.collection(this.dbPath);
  }

  GetAllAds(): AngularFirestoreCollection<Ad> {
    return this.adsRef;
  }

  GetAllAdsSuccess() {
    return this.GetAllAds().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ ...c.payload.doc.data() })
        )
      )
    )
  }
  GetOneAd(id: string): any {
    return this.adsRef.doc(id);
  }
  GetUserAds(uid: string) {
    return this.adsRef.doc(uid);
  }
  AddAd(ads: Ad): any {
    return this.adsRef.add({ ...ads });
  }
  UpdateAd(id: string, data: any): Promise<void> {
    return this.adsRef.doc(id).update(data);
  }
  DeleteAd(id: string): Promise<void> {
    return this.adsRef.doc(id).delete();
  }


}
