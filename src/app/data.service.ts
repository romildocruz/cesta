import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Produto } from './models/produto.model';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(
        private http: HttpClient
    ) { }


    get() {
        return this.http.get('http://localhost:3000/produtos');
    }

    post(produto: Produto) {
        return this.http.post('http://localhost:3000/produtos', produto);
    }

    put(produto: Produto) {
        return this.http.put(`http://localhost:3000/produtos/${produto.id}`, produto);
    }

    delete(produto: Produto) {
        return this.http.delete(`http://localhost:3000/produtos/${produto.id}`);
    }

    authenticate(data: any) {
        return this.http.post('http://localhost:3000/accounts/authenticate', data);
    }
}
