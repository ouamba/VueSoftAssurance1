// tslint:disable-next-line:import-spacing
import { NgModule } from  '@angular/core';
// tslint:disable-next-line:max-line-length
import {MatNativeDateModule, MatDatepickerModule, MatIconModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatListModule,} from  '@angular/material';
import { FormsModule,  } from '@angular/forms';

@NgModule({
// tslint:disable-next-line:max-line-length
imports: [MatNativeDateModule, MatDatepickerModule, MatIconModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatListModule, MatRadioModule, ],

exports: [MatNativeDateModule, FormsModule,
// tslint:disable-next-line:max-line-length
MatDatepickerModule, MatIconModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule, MatListModule, MatRadioModule,],

})

export  class  MyMaterialModule { }
