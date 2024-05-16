import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Game } from '../../store/games/games.model';

@Component({
  selector: 'game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss']
})
export class GameFormComponent implements OnInit {
  @Input()
  initialState: BehaviorSubject<Game> = new BehaviorSubject(<Game>{});

  @Output()
  formValuesChanged = new EventEmitter<Game>();

  @Output()
  formSubmitted = new EventEmitter<Game>();

  gameForm: FormGroup = new FormGroup({});

  constructor(private fb:FormBuilder) {}

  get name() { return this.gameForm.get('name')!;}
  get type() { return this.gameForm.get('type')!;}
  get description() { return this.gameForm.get('description');}
  get rating() { return this.gameForm.get('rating');}
  get creator() { return this.gameForm.get('creator');}
  get features() { return this.gameForm.get('features');}
  get price() { return this.gameForm.get('price');}
  get release_date() { return this.gameForm.get('release_date');}
  get add_ons() { return this.gameForm.get('add_ons');}
  get editions() { return this.gameForm.get('editions');}
  get base_game() { return this.gameForm.get('base_game');}

  ngOnInit() {
    this.initialState.subscribe(game => {
      this.gameForm = this.fb.group({
        name: [game.name, [Validators.required]],
        type: [game.type, [Validators.required]],
        description: [game.description, [Validators.minLength(25)]],
        rating: [game.rating],
        creator: [game.creator],
        features: [game.features, [Validators.required, Validators.minLength(1)]],
        price: [game.price, [Validators.required]],
        release_date: [game.release_date],
        add_ons: [game.add_ons],
        editions: [game.editions],
        base_game: [game.base_game]
      });
    });

    this.gameForm.valueChanges.subscribe((val) => {
      this.formValuesChanged.emit(val);
    });
  }

  submitForm() {
    this.formSubmitted.emit(this.gameForm.value);
  }

}
