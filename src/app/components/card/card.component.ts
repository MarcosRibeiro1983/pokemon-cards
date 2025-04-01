import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PokemnonService } from '../../services/pokemnon.service';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  name: string = 'POKEMON'
  typesList = ['FIRE', 'ROCK'];

  pokemon?: Pokemon;

  constructor(private pokeService: PokemnonService) {

  }


  ngOnInit(): void {
    this.fetch();
    this.getByName();
  }

  fetch() {
    this.pokeService.getAll().subscribe({
      next: (resp) => {
        console.log('respPok', resp);
      }
    });
  }

  getByName() {
    this.pokeService.getByName('pikachu').subscribe({
      next: (resp) => {
        this.pokemon = {
          id: resp.id,
          name: resp.name,
          sprites: resp.sprites,
          types: resp.types,
          url: resp.url
        }

        console.log('types', this.pokemon);
      }
    });
  }

}
