import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe.interface';
import { Observable } from 'rxjs';
import { environments } from 'src/environments/environments';

@Injectable({providedIn: 'root'})
export class HeroesService {

    private baseUrl: string = environments.baseUrl;
    
    constructor(private httpClient: HttpClient) {}
    getHeroes():Observable<Heroe[]> {
        return this.httpClient.get<Heroe[]>(` ${this.baseUrl}/heroes`);
    }
}