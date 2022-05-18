import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { Ad } from '../Models/ad.model';
import { Favorite } from '../Models/favorite.model';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  private dbPath = '/ads';
  private dbFavorite = '/favorite'
  private adsRef: AngularFirestoreCollection<Ad>;
  private adsFavRef: AngularFirestoreCollection<Favorite>;
  constructor(private db: AngularFirestore) {
    this.adsRef = db.collection(this.dbPath);
    this.adsFavRef = db.collection(this.dbFavorite);
  }

  GetAllAds(): AngularFirestoreCollection<Ad> {
    return this.adsRef;
  }

  GetAllAdsSuccess() {
    return this.GetAllAds().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    )
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


  GetAllFavoriteAds(): AngularFirestoreCollection<Favorite> {
    return this.adsFavRef;
  }

  GetAllFavoriteAdsSuccess() {
    return this.GetAllFavoriteAds().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    )
  }

  AddFavoriteAd(favorite: Favorite): any {
    localStorage.setItem('favorite', JSON.stringify(favorite));
    return this.adsFavRef.add({ ...favorite });
  }

  DeleteFavoriteAd(id: string): Promise<void> {
    localStorage.removeItem('favorite')
    return this.adsFavRef.doc(id).delete();
  }

}
