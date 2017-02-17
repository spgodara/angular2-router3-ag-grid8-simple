import { Component, ViewEncapsulation } from '@angular/core';
import {GridOptions} from "ag-grid/main";

import {AgGridModule} from 'ag-grid-ng2/main';

@Component({
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.css',
    "../../../node_modules/ag-grid/dist/styles/ag-grid.css",
    "../../../node_modules/ag-grid/dist/styles/theme-fresh.css"
  ],
  encapsulation: ViewEncapsulation.None
})

export class Route2Component {
    title = 'Route 2 works!';

    private gridOptions:GridOptions;
    public showGrid:boolean;
    public rowData:any[];
    private columnDefs:any[];
    public rowCount:string;

    constructor() {
        // we pass an empty gridOptions in, so we can grab the api out
        this.gridOptions = <GridOptions>{};
        this.createRowData();
        this.createColumnDefs();
        this.showGrid = true;
    }

    private createRowData() {
        var rowData:any[] = [];

        for (var i = 0; i < 1000; i++) {
            var countryData = [];
            rowData.push({"name": "name-" + i, "country": "country-" + i});
        }

        this.rowData = rowData;
    }

    private createColumnDefs() {
        this.columnDefs = [
            {
                headerName: '#', width: 30, checkboxSelection: true, suppressSorting: true,
                suppressMenu: true, pinned: true
            },
            {
                headerName: "Name", field: "name",
                width: 150, pinned: true
            },
            {
                headerName: "Country", field: "country", width: 150,
                pinned: true
            }
        ];
    }
}
