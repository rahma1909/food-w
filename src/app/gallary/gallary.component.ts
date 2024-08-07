import { Component } from '@angular/core';
interface gallay{
  imgsrc:string;
  name:string;
  decr:string
}
@Component({
  selector: 'app-gallary',
  standalone: true,
  imports: [],
  templateUrl: './gallary.component.html',
  styleUrl: './gallary.component.css'
})
export class GallaryComponent {
gallary:gallay[]=[
{imgsrc:"./assets/gallary_1.jpg",
  name:"food",
  decr:"Lorem ipsum dolor, sit amet consectetur adipisicing."
},
{imgsrc:"./assets/gallary_2.jpg",
  name:"food",
  decr:"Lorem ipsum dolor, sit amet consectetur adipisicing."
},
{imgsrc:"./assets/gallary_3.jpg",
  name:"food",
  decr:"Lorem ipsum dolor, sit amet consectetur adipisicing."
},
{imgsrc:"./assets/gallary_4.jpg",
  name:"food",
  decr:"Lorem ipsum dolor, sit amet consectetur adipisicing."
},
{imgsrc:"./assets/gallary_5.jpg",
  name:"food",
  decr:"Lorem ipsum dolor, sit amet consectetur adipisicing."
},{imgsrc:"./assets/gallary_6.jpg",
  name:"food",
  decr:"Lorem ipsum dolor, sit amet consectetur adipisicing."
}

]
}
