import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SearchRoutingModule } from "./search-routing.module";
import { SearchComponent } from "./search.component";
import { NoticiasService } from "../domain/noticias.services";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SearchRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        SearchComponent
    ],
    //providers: [NoticiasService],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SearchModule { }
