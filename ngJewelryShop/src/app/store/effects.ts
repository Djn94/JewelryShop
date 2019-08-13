import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ActionTypes } from '../store/actions';
import { NecklacesService } from "../necklaces.service";

@Injectable()
export class ShopEffects {
    constructor(
        private actions$: Actions, //observable stream of dispatched actions
        private necklacesService: NecklacesService //set to the object imported from necklaces.service
    ) { }
    @Effect()
    loadNecklaces$ = this.actions$.pipe(
        ofType(ActionTypes.LoadItems), mergeMap(() => this.necklacesService.getAll().pipe(map(necklaces => {
            return { type: ActionTypes.LoadSuccess, payload: necklaces };
        }), //if the load items succeed, get all necklaces from necklacesService, pipe them
            //thru a map and return observable. response dispatched as action
            catchError(() => EMPTY) //error catch
        )
        )
    );
};