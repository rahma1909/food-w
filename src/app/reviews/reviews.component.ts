import { Component, importProvidersFrom } from '@angular/core';
import { Reviews } from '../reviews';
@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [],


templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
reviews:Reviews[]=[
  {imgsrc:"./assets/review_2.png",
    name:"john Doe",
    review:` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
          quam facere blanditiis in fugiat tempore necessitatibus aliquid. Id
          adipisci, rem corrupti asperiores distinctio delectus quae quia
          tenetur totam laboriosam quam. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Dolores soluta ullam ipsa voluptates repudiandae
          dignissimos deleniti mollitia eum. Laudantium placeat velit nemo illo
          pariatur. Fuga aperiam impedit illo atque repellendus!`
  },
  {imgsrc:"./assets/review_3.png",
    name:"john Doe",
    review:` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
          quam facere blanditiis in fugiat tempore necessitatibus aliquid. Id
          adipisci, rem corrupti asperiores distinctio delectus quae quia
          tenetur totam laboriosam quam. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Dolores soluta ullam ipsa voluptates repudiandae
          dignissimos deleniti mollitia eum. Laudantium placeat velit nemo illo
          pariatur. Fuga aperiam impedit illo atque repellendus!`
  },
  {imgsrc:"./assets/review_1.png",
    name:"john Doe",
    review:` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
          quam facere blanditiis in fugiat tempore necessitatibus aliquid. Id
          adipisci, rem corrupti asperiores distinctio delectus quae quia
          tenetur totam laboriosam quam. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Dolores soluta ullam ipsa voluptates repudiandae
          dignissimos deleniti mollitia eum. Laudantium placeat velit nemo illo
          pariatur. Fuga aperiam impedit illo atque repellendus!`
  },
  {imgsrc:"./assets/review_4.png",
    name:"john Doe",
    review:` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
          quam facere blanditiis in fugiat tempore necessitatibus aliquid. Id
          adipisci, rem corrupti asperiores distinctio delectus quae quia
          tenetur totam laboriosam quam. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Dolores soluta ullam ipsa voluptates repudiandae
          dignissimos deleniti mollitia eum. Laudantium placeat velit nemo illo
          pariatur. Fuga aperiam impedit illo atque repellendus!`
  },
]
}
