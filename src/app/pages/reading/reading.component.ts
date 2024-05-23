import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.scss']
})
export class ReadingComponent {

  inputFromParent = "Teste"

  books = [{
    title: "Kotlin design patterns and best practices - second edition",
    publicationYear: "2022",
    writer: "Alexey Soshin",
    cover: "https://m.media-amazon.com/images/I/61JbvIaG-HL._SY466_.jpg",
    linkTo: "https://www.amazon.com/Kotlin-Design-Patterns-Best-Practices/dp/1801815720#detailBullets_feature_div"
  },
  {
    title: "Kotlin design patterns and best practices - second edition",
    publicationYear: "2022",
    writer: "Alexey Soshin",
    cover: "https://m.media-amazon.com/images/I/61JbvIaG-HL._SY466_.jpg",
    linkTo: "https://www.amazon.com/Kotlin-Design-Patterns-Best-Practices/dp/1801815720#detailBullets_feature_div"
  },
  ];

}
