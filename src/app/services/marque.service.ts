import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Marque } from '../models/marque';
import { catchError, retry } from 'rxjs/internal/operators';


@Injectable({
  providedIn: 'root'
})
export class MarqueService {
  apiURL = 'http://127.0.0.1:8000/api/marques';
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }; 


  constructor(private http:HttpClient) { }

  // Selection de toutes les marques contenus dans le tableau Voiture JSON
  getAllMarque(): Observable<Marque[]> {
    return this.http
      .get<Marque[]>(this.apiURL)
      .pipe(retry(1), catchError(this.handleError));
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
