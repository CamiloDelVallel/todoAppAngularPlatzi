import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';



@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
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
    name2: "Camilo",
    age: 36,
    avatar: 'https://picsum.photos/400'
  })

  colorCtrl = new FormControl();
  widthCtrl = new FormControl(50, {
    nonNullable: true
  }
  );
  nameCtrl = new FormControl('Nombre', {
    nonNullable: true,
    validators: [
      Validators.required, 
      Validators.minLength(3)
    ]
  }
  );


  constructor(){
    this.colorCtrl.valueChanges.subscribe((value) => {
      console.log(value)
    })
  }

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
  changeName(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update((prevState) => {
      return {...prevState, 
        name2: String (newValue)
      }
    })
  }
}
