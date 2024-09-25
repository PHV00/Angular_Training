import { Component , Input, inject} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent {
  router = inject(Router)

  @Input () title : string | undefined
  @Input () thumbnail : string | undefined
  @Input () price : string | undefined
  @Input () id : string|undefined

  to_buy(){
    this.router.navigate(['Buy',this.id])
  }
}