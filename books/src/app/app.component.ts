import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

interface Book {
  title: string;
  description: string;
  author: string;
  rating: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Books';
  books: Book[] = [
    {
      title: 'Runners',
      description: 'Description 1',
      author: 'Bob',
      rating: 1,
    },
    {
      title: 'Ballers',
      description: 'Description 2',
      author: 'Carl',
      rating: 2,
    },
    {
      title: 'Sun',
      description: 'Description 3',
      author: 'George',
      rating: 3,
    },
    {
      title: 'Shoes',
      description: 'Description 4',
      author: 'Fillip',
      rating: 4,
    },
    {
      title: 'Teachers',
      description: 'Description 5',
      author: 'Otto',
      rating: 5,
    },
  ];

  currentBookIndex: number = 0;
  currentRating: number = 0;
  ratingOptions: number[] = [1, 2, 3, 4, 5];
  isRatingCompleted: boolean = false;

  ngOnInit(): void {
    this.startRating();
  }

  startRating(): void {
    if (this.currentBookIndex < this.books.length) {
      this.currentRating = this.books[this.currentBookIndex].rating;
    } else {
      this.isRatingCompleted = true;
    }
  }

  rateBook(rating: number): void {
    this.books[this.currentBookIndex].rating = rating;
    this.currentRating = rating;
    this.currentBookIndex++;
    if (this.currentBookIndex >= this.books.length) {
      this.isRatingCompleted = true;
    } else {
      this.startRating();
    }
  }

  resetRating(): void {
    this.currentBookIndex = 0;
    this.isRatingCompleted = false;
    this.startRating();
  }

  finishRating(action: string): void {
    if (action === 'restart') {
      this.currentBookIndex = 0;
      this.isRatingCompleted = false;
      this.startRating();
    } else if (action === 'stop') {
      alert('Процесът на рейтинг приключи.');
      this.isRatingCompleted = true;
    }
  }
}
