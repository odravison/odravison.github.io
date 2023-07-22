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
    title: "Nome do livro",
    publicationYear: "2015",
    writer: "Fulano de tal. A",
    description: "Uma breve descrição do que seria o livro, essa descrição não pode ser demais pra que não atrapalhe o layout da parada lá"
  },
  {
    title: "Nome do livro",
    publicationYear: "2015",
    writer: "Fulano de tal. A",
    description: "Uma breve descrição do que seria o livro, essa descrição não pode ser demais pra que não atrapalhe o layout da parada lá"
  },
  {
    title: "Nome do livro",
    publicationYear: "2015",
    writer: "Fulano de tal. A",
    description: "Uma breve descrição do que seria o livro, essa descrição não pode ser demais pra que não atrapalhe o layout da parada lá"
  },
  {
    title: "Nome do livro",
    publicationYear: "2015",
    writer: "Fulano de tal. A",
    description: "Uma breve descrição do que seria o livro, essa descrição não pode ser demais pra que não atrapalhe o layout da parada lá"
  },
  {
    title: "Nome do livro",
    publicationYear: "2015",
    writer: "Fulano de tal. A",
    description: "Uma breve descrição do que seria o livro, essa descrição não pode ser demais pra que não atrapalhe o layout da parada lá"
  },
  {
    title: "Nome do livro",
    publicationYear: "2015",
    writer: "Fulano de tal. A",
    description: "Uma breve descrição do que seria o livro, essa descrição não pode ser demais pra que não atrapalhe o layout da parada lá"
  },
  ];

}
