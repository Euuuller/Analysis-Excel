/**
 * Chart Configuration
 * Default configurations for ApexCharts
 */

import { CHART_COLORS } from './constants.js';

export const DEFAULT_CHART_CONFIG = {
    chart: {
        background: 'transparent',
        fontFamily: 'Inter, sans-serif',
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
        }
    },
    theme: {
        mode: 'dark'
    },
    grid: {
        borderColor: '#334155'
    },
    tooltip: {
        theme: 'dark'
    }
};

export const HEATMAP_CONFIG = {
    plotOptions: {
        heatmap: {
            shadeIntensity: 0.3,
            radius: 0,
            useFillColorAsStroke: false,
            colorScale: {
                ranges: [
                    { from: 0, to: 0, color: 'rgba(239, 68, 68, 0.15)', name: '0%' },
                    { from: 1, to: 3, color: 'rgba(239, 68, 68, 0.15)', name: '1-3%' },
                    { from: 4, to: 7, color: 'rgba(245, 158, 11, 0.15)', name: '4-7%' },
                    { from: 8, to: 11, color: 'rgba(251, 191, 36, 0.15)', name: '8-11%' },
                    { from: 12, to: 15, color: 'rgba(52, 211, 153, 0.15)', name: '12-15%' },
                    { from: 16, to: 19, color: 'rgba(16, 185, 129, 0.2)', name: '16-19%' },
                    { from: 20, to: 24, color: 'rgba(16, 185, 129, 0.25)', name: '20-24%' },
                    { from: 25, to: 100, color: 'rgba(16, 185, 129, 0.3)', name: '25-100%' }
                ]
            }
        }
    },
    dataLabels: {
        enabled: true,
        style: {
            colors: ['#fafafa'],
            fontSize: '11px',
            fontWeight: 600
        }
    }
};

export const AXIS_CONFIG = {
    xaxis: {
        labels: {
            style: {
                colors: '#a1a1a1',
                fontSize: '12px'
            }
        }
    },
    yaxis: {
        labels: {
            style: {
                colors: '#a1a1a1',
                fontSize: '12px'
            }
        }
    }
};
