import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
// interface Imenu {
//   imgsrc: string;
//   name: string;
//   decr: string;
//   price: string;
// }
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  // menu: Imenu[] = [
  //   {
  //     imgsrc: './assets/buger.jpg',
  //     name: 'burger',
  //     decr: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborumassumenda voluptates',
  //     price: '20$',
  //   },
  //   {
  //     imgsrc: './assets/pasta.jpg',
  //     name: 'pasta',
  //     decr: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborumassumenda voluptates',
  //     price: '20$',
  //   },
  //   {
  //     imgsrc: './assets/lasagna.webp',
  //     name: 'lasagna',
  //     decr: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborumassumenda voluptates',
  //     price: '20$',
  //   },
  //   {
  //     imgsrc: './assets/juse.jpg',
  //     name: 'drink',
  //     decr: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborumassumenda voluptates',
  //     price: '20$',
  //   },
  //   {
  //     imgsrc: './assets/pizza.jpg',
  //     name: 'pizza',
  //     decr: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborumassumenda voluptates',
  //     price: '20$',
  //   },
  //   {
  //     imgsrc: '../../assets/Hot_dog.jpg',
  //     name: 'hot dog',
  //     decr: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborumassumenda voluptates',
  //     price: '20$',
  //   },
  //   {
  //     imgsrc: './assets/juse.jpg',
  //     name: 'juice',
  //     decr: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborumassumenda voluptates',
  //     price: '20$',
  //   },
  //   {
  //     imgsrc: './assets/biryani.webp',
  //     name: 'Biryani',
  //     decr: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborumassumenda voluptates',
  //     price: '20$',
  //   },
  //   {
  //     imgsrc: './assets/chocolate.jpg',
  //     name: 'Chocolate',
  //     decr: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborumassumenda voluptates',
  //     price: '20$',
  //   },
  //   {
  //     imgsrc: './assets/ice_cream.jpg',
  //     name: 'Ice Cream',
  //     decr: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborumassumenda voluptates',
  //     price: '20$',
  //   },
  //   {
  //     imgsrc: '../../assets/Spanchi.jpg',
  //     name: 'Spanchi',
  //     decr: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborumassumenda voluptates',
  //     price: '20$',
  //   },
  //   {
  //     imgsrc: './assets/sandwich.jpg',
  //     name: 'Sandwich',
  //     decr: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborumassumenda voluptates',
  //     price: '20$',
  //   },
  // ];

  isclicked: boolean = false;
  imgsrc: string = '';
  open(mainimg: string) {
    this.isclicked = true;
    this.imgsrc = './assets/' + mainimg;
  }

  close() {
    this.isclicked = false;
  }
}
