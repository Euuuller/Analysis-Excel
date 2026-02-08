/**
 * Application Constants
 * Global constants and configuration values
 */

export const APP_CONFIG = {
    name: 'Analytics Dashboard',
    version: '1.0.0',
    environment: 'development'
};

export const CHART_COLORS = {
    primary: '#3b82f6',       // Blue professional
    secondary: '#10b981',     // Mint green
    tertiary: '#a78bfa',      // Soft purple
    success: '#10b981',       // Mint green
    warning: '#f59e0b',       // Amber
    danger: '#ef4444',        // Soft red
    info: '#3b82f6',          // Blue
    chart1: '#60a5fa',        // Light blue
    chart2: '#34d399',        // Mint green
    chart3: '#a78bfa',        // Soft purple
    chart4: '#fbbf24',        // Soft yellow
    chart5: '#f472b6'         // Soft pink
};

export const CHART_HEIGHTS = {
    small: 300,
    medium: 450,
    large: 500,
    xlarge: 600
};

export const PAGES = {
    PROBLEMA: 'problema',
    COHORT: 'cohort',
    RFM: 'rfm',
    DESCRITIVA: 'descritiva'
};

export const EVENTS = {
    PAGE_CHANGED: 'pageChanged',
    CHART_RENDERED: 'chartRendered',
    DATA_LOADED: 'dataLoaded'
};
