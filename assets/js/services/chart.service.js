/**
 * Chart Service
 * Handles chart rendering and management using ApexCharts
 */

import { DEFAULT_CHART_CONFIG, HEATMAP_CONFIG, AXIS_CONFIG } from '../config/chart-config.js';
import { CHART_HEIGHTS } from '../config/constants.js';

export class ChartService {
    constructor() {
        this.charts = new Map();
    }
    
    /**
     * Render a heatmap chart
     */
    renderHeatmap(elementId, data, categories) {
        const options = {
            ...DEFAULT_CHART_CONFIG,
            series: data,
            chart: {
                ...DEFAULT_CHART_CONFIG.chart,
                height: 600,
                type: 'heatmap',
                toolbar: {
                    show: true,
                    tools: {
                        download: true,
                        selection: false,
                        zoom: true,
                        zoomin: true,
                        zoomout: true,
                        pan: false,
                        reset: true
                    }
                }
            },
            ...HEATMAP_CONFIG,
            xaxis: {
                ...AXIS_CONFIG.xaxis,
                type: 'category',
                categories: categories,
                labels: {
                    ...AXIS_CONFIG.xaxis.labels,
                    rotate: 0,
                    style: {
                        colors: '#a1a1a1',
                        fontSize: '13px',
                        fontWeight: 600
                    }
                }
            },
            yaxis: {
                ...AXIS_CONFIG.yaxis,
                labels: {
                    ...AXIS_CONFIG.yaxis.labels,
                    style: {
                        colors: '#a1a1a1',
                        fontSize: '13px',
                        fontWeight: 600
                    }
                }
            },
            dataLabels: {
                ...HEATMAP_CONFIG.dataLabels
            },
            tooltip: {
                ...DEFAULT_CHART_CONFIG.tooltip,
                custom: function({ series, seriesIndex, dataPointIndex, w }) {
                    const value = series[seriesIndex][dataPointIndex];
                    const cohort = w.globals.labels[seriesIndex];
                    const month = w.globals.categoryLabels[dataPointIndex];
                    
                    return `
                        <div style="padding: 12px; background: #1a1a1a; border: 1px solid #333; border-radius: 8px;">
                            <div style="font-weight: 700; color: #60a5fa; margin-bottom: 6px;">
                                Cohort ${cohort}
                            </div>
                            <div style="color: #fafafa; margin-bottom: 4px;">
                                <strong>Mês:</strong> ${month}
                            </div>
                            <div style="color: #34d399; font-size: 16px; font-weight: 700;">
                                ${value}% retenção
                            </div>
                        </div>
                    `;
                }
            },
            legend: {
                show: true,
                position: 'right',
                offsetY: 0,
                labels: {
                    colors: '#a1a1a1',
                    useSeriesColors: false
                },
                fontSize: '12px',
                fontWeight: 600,
                markers: {
                    width: 16,
                    height: 16,
                    radius: 4
                }
            }
        };

        const chart = new ApexCharts(document.querySelector(`#${elementId}`), options);
        chart.render();
        this.charts.set(elementId, chart);
        return chart;
    }
    
    /**
     * Render a treemap chart with strategic RFM colors
     */
    renderTreemap(elementId, data) {
        // Extract colors from data
        const colors = data.map(segment => segment.color || '#60a5fa');
        const total = data.reduce((sum, seg) => sum + seg.y, 0);
        
        const options = {
            ...DEFAULT_CHART_CONFIG,
            series: [{
                data: data.map(seg => ({
                    x: seg.x,
                    y: seg.y,
                    fillColor: seg.color,
                    meta: {
                        group: seg.group,
                        rfm: seg.rfm,
                        action: seg.action,
                        description: seg.description,
                        percentage: ((seg.y / total) * 100).toFixed(2)
                    }
                }))
            }],
            chart: {
                ...DEFAULT_CHART_CONFIG.chart,
                height: 650,
                type: 'treemap',
                toolbar: {
                    show: true,
                    tools: {
                        download: true,
                        selection: false,
                        zoom: false,
                        zoomin: false,
                        zoomout: false,
                        pan: false,
                        reset: false
                    }
                },
                animations: {
                    enabled: true,
                    easing: 'easeinout',
                    speed: 800,
                    animateGradually: {
                        enabled: true,
                        delay: 100
                    },
                    dynamicAnimation: {
                        enabled: true,
                        speed: 400
                    }
                }
            },
            plotOptions: {
                treemap: {
                    distributed: true,
                    enableShades: false,
                    borderRadius: 6,
                    dataLabels: {
                        format: 'truncate'
                    }
                }
            },
            dataLabels: {
                enabled: true,
                style: {
                    fontSize: '15px',
                    fontWeight: 700,
                    fontFamily: 'Inter, -apple-system, sans-serif',
                    colors: ['#ffffff']
                },
                formatter: function(text, op) {
                    const percentage = op.w.config.series[0].data[op.dataPointIndex].meta.percentage;
                    return [text, `${percentage}%`];
                },
                offsetY: -4
            },
            tooltip: {
                ...DEFAULT_CHART_CONFIG.tooltip,
                custom: function({ seriesIndex, dataPointIndex, w }) {
                    const point = w.config.series[seriesIndex].data[dataPointIndex];
                    const meta = point.meta;
                    const value = point.y;
                    
                    // Group badges
                    const groupBadges = {
                        'ATIVOS_VALIOSOS': '<span style="background: #2ECC71; padding: 2px 8px; border-radius: 4px; font-size: 11px; font-weight: 600;">✓ ATIVOS VALIOSOS</span>',
                        'POTENCIAL_CRESCIMENTO': '<span style="background: #F39C12; padding: 2px 8px; border-radius: 4px; font-size: 11px; font-weight: 600;">⚡ POTENCIAL</span>',
                        'ATENCAO_NECESSARIA': '<span style="background: #E67E22; padding: 2px 8px; border-radius: 4px; font-size: 11px; font-weight: 600;">⚠️ ATENÇÃO</span>',
                        'CRITICOS': '<span style="background: #E74C3C; padding: 2px 8px; border-radius: 4px; font-size: 11px; font-weight: 600;">🚨 CRÍTICO</span>'
                    };
                    
                    return `
                        <div style="padding: 16px; background: linear-gradient(135deg, #1a1a1a 0%, #262626 100%); border: 2px solid ${point.fillColor}; border-radius: 12px; min-width: 280px; box-shadow: 0 8px 24px rgba(0,0,0,0.4);">
                            <div style="font-size: 18px; font-weight: 700; color: ${point.fillColor}; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
                                ${point.x}
                            </div>
                            
                            <div style="margin-bottom: 12px;">
                                ${groupBadges[meta.group]}
                            </div>
                            
                            <div style="color: #a1a1a1; font-size: 13px; line-height: 1.6; margin-bottom: 12px; border-left: 3px solid ${point.fillColor}; padding-left: 10px;">
                                ${meta.description}
                            </div>
                            
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
                                <div style="background: rgba(255,255,255,0.05); padding: 8px; border-radius: 6px;">
                                    <div style="color: #737373; font-size: 11px; text-transform: uppercase; margin-bottom: 4px;">Clientes</div>
                                    <div style="color: #fafafa; font-size: 20px; font-weight: 700;">${value}</div>
                                </div>
                                <div style="background: rgba(255,255,255,0.05); padding: 8px; border-radius: 6px;">
                                    <div style="color: #737373; font-size: 11px; text-transform: uppercase; margin-bottom: 4px;">Percentual</div>
                                    <div style="color: ${point.fillColor}; font-size: 20px; font-weight: 700;">${meta.percentage}%</div>
                                </div>
                            </div>
                            
                            <div style="background: rgba(255,255,255,0.05); padding: 10px; border-radius: 6px; margin-bottom: 12px;">
                                <div style="color: #737373; font-size: 11px; text-transform: uppercase; margin-bottom: 6px;">Score RFM</div>
                                <div style="display: flex; gap: 12px; justify-content: space-around;">
                                    <div style="text-align: center;">
                                        <div style="color: #60a5fa; font-size: 10px; margin-bottom: 2px;">Recência</div>
                                        <div style="color: #fafafa; font-size: 18px; font-weight: 700;">${meta.rfm.r}</div>
                                    </div>
                                    <div style="text-align: center;">
                                        <div style="color: #34d399; font-size: 10px; margin-bottom: 2px;">Frequência</div>
                                        <div style="color: #fafafa; font-size: 18px; font-weight: 700;">${meta.rfm.f}</div>
                                    </div>
                                    <div style="text-align: center;">
                                        <div style="color: #fbbf24; font-size: 10px; margin-bottom: 2px;">Monetário</div>
                                        <div style="color: #fafafa; font-size: 18px; font-weight: 700;">${meta.rfm.m}</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div style="background: linear-gradient(135deg, ${point.fillColor}22, ${point.fillColor}11); padding: 10px; border-radius: 6px; border-left: 3px solid ${point.fillColor};">
                                <div style="color: #737373; font-size: 11px; text-transform: uppercase; margin-bottom: 4px;">💡 Ação Recomendada</div>
                                <div style="color: #fafafa; font-size: 13px; font-weight: 600;">${meta.action}</div>
                            </div>
                        </div>
                    `;
                }
            },
            legend: {
                show: false
            },
            states: {
                hover: {
                    filter: {
                        type: 'darken',
                        value: 0.15
                    }
                },
                active: {
                    filter: {
                        type: 'darken',
                        value: 0.25
                    }
                }
            }
        };

        const chart = new ApexCharts(document.querySelector(`#${elementId}`), options);
        chart.render();
        this.charts.set(elementId, chart);
        return chart;
    }
    
    /**
     * Render a horizontal bar chart
     */
    renderBarChart(elementId, categories, data) {
        const options = {
            ...DEFAULT_CHART_CONFIG,
            series: [{ name: 'Vendas', data }],
            chart: {
                ...DEFAULT_CHART_CONFIG.chart,
                type: 'bar',
                height: CHART_HEIGHTS.medium
            },
            plotOptions: {
                bar: {
                    borderRadius: 8,
                    horizontal: true,
                    distributed: true,
                    dataLabels: {
                        position: 'top'
                    }
                }
            },
            colors: ['#60a5fa', '#34d399', '#a78bfa', '#fbbf24', '#f472b6', '#60a5fa', '#34d399', '#a78bfa', '#fbbf24', '#f472b6'],
            dataLabels: {
                enabled: true,
                formatter: function(val) {
                    return '$' + (val / 1000).toFixed(1) + 'K';
                },
                offsetX: 30,
                style: {
                    fontSize: '12px',
                    colors: ['#fff'],
                    fontWeight: 600
                }
            },
            xaxis: {
                ...AXIS_CONFIG.xaxis,
                categories,
                labels: {
                    ...AXIS_CONFIG.xaxis.labels,
                    formatter: function(val) {
                        return '$' + (val / 1000).toFixed(0) + 'K';
                    }
                }
            },
            yaxis: AXIS_CONFIG.yaxis,
            tooltip: {
                ...DEFAULT_CHART_CONFIG.tooltip,
                y: {
                    formatter: function(val) {
                        return '$' + val.toLocaleString();
                    }
                }
            },
            legend: {
                show: false
            }
        };

        const chart = new ApexCharts(document.querySelector(`#${elementId}`), options);
        chart.render();
        this.charts.set(elementId, chart);
        return chart;
    }
    
    /**
     * Render a donut chart
     */
    renderDonutChart(elementId, labels, series) {
        const options = {
            ...DEFAULT_CHART_CONFIG,
            series,
            chart: {
                ...DEFAULT_CHART_CONFIG.chart,
                type: 'donut',
                height: CHART_HEIGHTS.medium
            },
            labels,
            colors: ['#60a5fa', '#34d399', '#a78bfa'],
            dataLabels: {
                enabled: true,
                style: {
                    fontSize: '14px',
                    fontWeight: 600,
                    colors: ['#fff']
                },
                dropShadow: {
                    enabled: false
                }
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '70%',
                        labels: {
                            show: true,
                            total: {
                                show: true,
                                label: 'Total',
                                fontSize: '18px',
                                fontWeight: 700,
                                color: '#cbd5e1',
                                formatter: function() {
                                    return '100%';
                                }
                            },
                            value: {
                                fontSize: '24px',
                                fontWeight: 800,
                                color: '#60a5fa'
                            }
                        }
                    }
                }
            },
            legend: {
                position: 'bottom',
                labels: {
                    colors: '#cbd5e1'
                },
                fontSize: '13px',
                fontWeight: 600
            },
            tooltip: {
                ...DEFAULT_CHART_CONFIG.tooltip,
                y: {
                    formatter: function(val) {
                        return val + '%';
                    }
                }
            },
            stroke: {
                width: 2,
                colors: ['#0a0a0a']
            }
        };

        const chart = new ApexCharts(document.querySelector(`#${elementId}`), options);
        chart.render();
        this.charts.set(elementId, chart);
        return chart;
    }
    
    /**
     * Destroy a specific chart
     */
    destroyChart(elementId) {
        const chart = this.charts.get(elementId);
        if (chart) {
            chart.destroy();
            this.charts.delete(elementId);
        }
    }
    
    /**
     * Destroy all charts
     */
    destroyAll() {
        this.charts.forEach(chart => chart.destroy());
        this.charts.clear();
    }
}
