import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { NoticiasService } from "../domain/noticias.services";

@Component({
    selector: "Search",
    templateUrl: "./search.component.html" /*,
    providers: [NoticiasService]*/
})
export class SearchComponent implements OnInit {

    album: { bandName: string, albumName: string, year: string, owned: boolean, myRating: string} = {
        bandName: "Ed Sheeran",
        albumName: "X",
        year: "2017",
        owned: true,
        myRating: "9.5"
    };
    
    constructor(private noticias: NoticiasService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.noticias.agregar("Hola!");
        this.noticias.agregar("Hola 2!");
        this.noticias.agregar("Hola 3!");
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
