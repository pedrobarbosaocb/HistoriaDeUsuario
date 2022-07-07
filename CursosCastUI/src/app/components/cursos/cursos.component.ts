import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso.models';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit {
  cursos: Curso[] = [
    {
      description: 'C# Básico',
      initialDate: new Date('2022-08-02'),
      finalDate: new Date('2022-08-13'),
      studentsNumber: 40,
      category: 1,
    },
    {
      description: 'ASP.NET Avançado',
      initialDate: new Date('2022-09-05'),
      finalDate: new Date('2022-09-13'),
      studentsNumber: 40,
      category: 1,
    },
    {
      description: 'Comunicação Empresarial',
      initialDate: new Date('2022-07-07'),
      finalDate: new Date('2022-07-15'),
      studentsNumber: 30,
      category: 3,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
