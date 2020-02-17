import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
let AreaComponent = class AreaComponent {
    constructor() {
        this.data = [];
        this.Highcharts = Highcharts;
    }
    ngOnInit() {
        this.chartOptions = {
            chart: {
                type: 'area'
            },
            title: {
                text: 'Random DATA'
            },
            subtitle: {
                text: 'Demo'
            },
            tooltip: {
                split: true,
                valueSuffix: ' millions'
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: true,
            },
            series: this.data
        };
        HC_exporting(Highcharts);
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    }
};
tslib_1.__decorate([
    Input()
], AreaComponent.prototype, "data", void 0);
AreaComponent = tslib_1.__decorate([
    Component({
        selector: 'app-widget-area',
        templateUrl: './area.component.html',
        styleUrls: ['./area.component.scss']
    })
], AreaComponent);
export { AreaComponent };
//# sourceMappingURL=area.component.js.map