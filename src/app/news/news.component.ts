import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
    newsData: any; // Полученные данные новостей

    constructor(private newsService: NewsService) {}

    ngOnInit() {
        this.newsService.getNewsData().subscribe((data: any) => {
            this.newsData = data;
        });
    }
}