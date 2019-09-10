import { Component } from "@angular/core";
import { getJSON } from "tns-core-modules/http";

@Component({
    selector: 'net',
    template: `
    <StackLayout>
        <Label
            fontSize="20"
            text="Test de requête réseau"></Label>
        <Button text="test" (tap)="query()"></Button>
        <StackLayout orientation="horizontal">
            <Label text="Résultat: "></Label>
            <Label [text]="result"></Label>
        <StackLayout>
    <StackLayout>
    `
})
export class NetComponent {
    result: any;

    query() {
        getJSON("https://httpbin.org/get")
            .then((r: any) => {
                // success
                this.result = r.url;

            }, e => {
                // error
                this.result = e;
            })
    }
}