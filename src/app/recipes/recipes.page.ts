import { findReadVarNames } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Recipe } from './recipe.model';
import { ResipesService } from './resipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[];
  

  constructor(private recipesService: ResipesService) { }

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
  }

}
