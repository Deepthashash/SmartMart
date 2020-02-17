import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
let CardComponent = class CardComponent {
    constructor() {
        this.data = [];
        this.Highcharts = Highcharts;
        this.chartOptions = {};
    }
    ngOnInit() {
        this.chartOptions = {
            chart: {
                type: 'area',
                backgroundColor: null,
                borderWidth: 0,
                margin: [2, 2, 2, 2],
                height: 60
            },
            title: {
                text: null
            },
            subtitle: {
                text: null
            },
            tooltip: {
                split: true,
                outside: true
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false,
            },
            xAxis: {
                labels: {
                    enabled: false,
                },
                title: {
                    text: null
                },
                startOnTick: false,
                endOnTick: false,
                tickOptions: []
            },
            yAxis: {
                labels: {
                    enabled: false,
                },
                title: {
                    text: null
                },
                startOnTick: false,
                endOnTick: false,
                tickOptions: []
            },
            series: [{
                    data: this.data
                }]
        };
        HC_exporting(Highcharts);
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    }
};
tslib_1.__decorate([
    Input()
], CardComponent.prototype, "label", void 0);
tslib_1.__decorate([
    Input()
], CardComponent.prototype, "total", void 0);
tslib_1.__decorate([
    Input()
], CardComponent.prototype, "percentage", void 0);
tslib_1.__decorate([
    Input()
], CardComponent.prototype, "data", void 0);
CardComponent = tslib_1.__decorate([
    Component({
        selector: 'app-widget-card',
        templateUrl: './card.component.html',
        styleUrls: ['./card.component.scss']
    })
], CardComponent);
export { CardComponent };
//# sourceMappingURL=card.component.js.map