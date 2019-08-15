import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  // Film list from showtime
  private pushingFilmListToStore = new BehaviorSubject([] as any);
  sharingFilmListFromShowtimeComponent = this.pushingFilmListToStore.asObservable();

  // Film detail from buy ticket theatres, hometools, banner in detail page
  private pushingFilmDetailToStore = new BehaviorSubject({} as object);
  sharingFilmDetailFromBannerInDetailComponent = this.pushingFilmDetailToStore.asObservable();

  // Trailer from showing item
  private pushingTrailerToStore = new BehaviorSubject('' as string);
  sharingTrailerFromShowingItemComponent = this.pushingTrailerToStore.asObservable();

  // Map from buy ticket theatres
  private pushingMapToStore = new BehaviorSubject('' as string);
  sharingMapFromBuyTicketTheatresComponent = this.pushingMapToStore.asObservable();

  // Transmit login status between login-page and header
  private pushingLoginStatusToStore = new BehaviorSubject({} as object)
  sharingLoginStatusFromLoginPage = this.pushingLoginStatusToStore.asObservable();

  // Review from review to banner
  private pushingReviewToStore = new BehaviorSubject({} as object)
  sharingReviewFromReviewComponent = this.pushingReviewToStore.asObservable();

  constructor() { }

  sharingFilmListMethod(filmListFromShowtimeComponent: any) {
    this.pushingFilmListToStore.next(filmListFromShowtimeComponent);
  }

  sharingFilmDetailMethod(filmDetailFromBannerInDetailComponent: any) {
    this.pushingFilmDetailToStore.next(filmDetailFromBannerInDetailComponent);
  }

  sharingTrailerMethod(trailerFromShowingItemComponent: any) {
    this.pushingTrailerToStore.next(trailerFromShowingItemComponent);
  }

  sharingMapMethod(mapFromBuyTicketTheatresComponent: any) {
    this.pushingMapToStore.next(mapFromBuyTicketTheatresComponent);
  }

  sharingLoginStatusMethod(loginStatusFromLoginPage: any) {
    this.pushingLoginStatusToStore.next(loginStatusFromLoginPage);
  }

  sharingReviewMethod(reviewFromReviewComponent: any){
    this.pushingReviewToStore.next(reviewFromReviewComponent);
  }
}