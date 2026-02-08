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
            shadeIntensity: 0.5,
            radius: 4,
            useFillColorAsStroke: false,
            colorScale: {
                ranges: [
                    // Critical (0% - Red intense)
                    { from: 0, to: 0, color: '#dc2626', name: '0%' },
                    
                    // Very Low (1-5% - Red to Orange)
                    { from: 1, to: 2, color: '#ef4444', name: '1-2%' },
                    { from: 3, to: 5, color: '#f97316', name: '3-5%' },
                    
                    // Low (6-10% - Orange to Yellow)
                    { from: 6, to: 8, color: '#fb923c', name: '6-8%' },
                    { from: 9, to: 10, color: '#fbbf24', name: '9-10%' },
                    
                    // Medium-Low (11-15% - Yellow to Light Green)
                    { from: 11, to: 13, color: '#facc15', name: '11-13%' },
                    { from: 14, to: 15, color: '#a3e635', name: '14-15%' },
                    
                    // Medium (16-20% - Light Green to Green)
                    { from: 16, to: 18, color: '#84cc16', name: '16-18%' },
                    { from: 19, to: 20, color: '#65a30d', name: '19-20%' },
                    
                    // Good (21-25% - Green)
                    { from: 21, to: 23, color: '#16a34a', name: '21-23%' },
                    { from: 24, to: 25, color: '#15803d', name: '24-25%' },
                    
                    // Excellent (26-100% - Dark Green)
                    { from: 26, to: 100, color: '#166534', name: '26-100%' }
                ]
            }
        }
    },
    dataLabels: {
        enabled: true,
        style: {
            colors: ['#ffffff'],
            fontSize: '14px',
            fontWeight: 700,
            fontFamily: 'Inter, -apple-system, sans-serif'
        },
        formatter: function(val) {
            return val + '%';
        }
    },
    stroke: {
        width: 2,
        colors: ['#1a1a1a']
    }
};

export const AXIS_CONFIG = {
    xaxis: {
        labels: {
            style: {
                colors: '#a1a1a1',
                fontSize: '13px',
                fontWeight: 600
            }
        }
    },
    yaxis: {
        labels: {
            style: {
                colors: '#a1a1a1',
                fontSize: '13px',
                fontWeight: 600
            }
        }
    }
};
