import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent {
    @Input() data: any; // Входное свойство для получения данных новости

    // Переключатель кнопки "лайк"
    public toggleLike() {
        this.data.voteStatus = this.data.voteStatus ? false : true;
    }

    // Обработчик нерабочих ссылок
    public handleImageError() {
        this.data.imgUrl = '';
    }
}