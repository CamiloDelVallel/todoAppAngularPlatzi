import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'hola';
  tasks = [
    'Instalar el angular CLI',
    'Crear proyecto', 
    'Crear componentes'
  ];
  tasks2 = signal([
    'Instalar el angular CLI',
    'Crear proyecto', 
    'Crear componentes'
  ]);
  name = signal('Camilo');
  edad = 35;
  disabled = true;
  img = 'https://picsum.photos/300';
  person = signal({
    name2: "Diana",
    age: 36,
    avatar: 'https://picsum.photos/400'
  })
  clickHandler(){
    alert("diste click 1 vez")
  }
  changekHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue)
  }
  keydownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value)
  }
  changeAge(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update((prevState) => {
      return {...prevState, 
        age: parseInt (newValue,10)
      }
    })
  }
  

}
