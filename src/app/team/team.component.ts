import { Component } from '@angular/core';
interface Ichef{
  imgsrc:string;
  name:string;
  decr:string;
}
@Component({
  selector: 'app-team',
  standalone: true,
  imports: [],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
chefs:Ichef[]=[
  {imgsrc:"./assets/chef1.png",
    name:"chef",
    decr:"Lorem ipsum dolor sit amet."
  },
  {imgsrc:"./assets/chef2.png",
    name:"chef",
    decr:"Lorem ipsum dolor sit amet."
  },
  {imgsrc:"./assets/chef3.jpg",
    name:"chef",
    decr:"Lorem ipsum dolor sit amet."
  },
  {imgsrc:"./assets/chef4.jpg",
    name:"chef",
    decr:"Lorem ipsum dolor sit amet."
  },
]
}
