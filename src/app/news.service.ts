import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class NewsService {
    constructor(private http: HttpClient) {}
    getNewsData() {
        const url = 'https://dev.mykgproxy.webprofy.ru/upload/frontend/data.json';
        const contentType = 'application/x-www-form-urlencoded';
        // Выполнение GET-запроса
        return this.http.get(url, { headers: { 'Content-Type': contentType } });
    }
}