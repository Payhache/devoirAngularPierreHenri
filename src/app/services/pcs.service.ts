import { Injectable } from '@angular/core';
import { Pc } from '../models/pc';
import { catchError, retry } from 'rxjs/internal/operators';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PcsService {
  apiURL = 'http://127.0.0.1:8000/api/computers';
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    };
    

  constructor(private http:HttpClient) {
   }
// Selection de tous les Pc contenus dans le tableau Voiture JSON
  getAllPc(): Observable<Pc[]> {
    return this.http
      .get<Pc[]>(this.apiURL)
      .pipe(retry(1), catchError(this.handleError));
  }
  // Selection d'un seul Pc par l'id
  getOnePc(id:number): Observable<Pc> {
    return this.http.get<Pc>(this.apiURL + '/' + id)
    .pipe(
    retry(1),
    catchError(this.handleError)
    );
  }
// Creation d'un Pc 
addPc(pc: Pc): Observable<Pc> {
  return this.http
    .post<Pc>(this.apiURL, pc, this.httpOptions)
    .pipe(retry(1), catchError(this.handleError));
}
// Edition d'un Pc existant 
editPc(pc: Pc): Observable<Pc> {
  
  return this.http
    .put<Pc>(this.apiURL + '/' + pc.id, pc, this.httpOptions)
    .pipe(retry(1), catchError(this.handleError));
}
// Suppression d'un Pc
deletePc(id:number): Observable<Pc> {
  return this.http
  .delete<Pc>(this.apiURL + '/' + id,this.httpOptions).pipe(retry(1), catchError(this.handleError));
}

  // EN cas d'erreure de communication avec le serveur
  handleError(error) {
    //déclaration d'une variable vide pour y associer un message d'erreur
    let errorMessage = '';
    // Si j'ai pas compris ....
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
