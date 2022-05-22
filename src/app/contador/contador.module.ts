import { NgModule } from "@angular/core";
import { ContadorComponent } from './contandor/contador.component';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        ContadorComponent
    ],
    exports:[
        ContadorComponent
    ],
    imports: [  
        CommonModule
    ]

})

export  class ContadorModule {}