/**
 * Data Module
 * Contains all mock data for the dashboard
 */

// Cohort Analysis Data (Reversed order: 2014-01 at top)
export const cohortData = {
    series: [
        { name: '2014-12', data: [100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { name: '2014-11', data: [100, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { name: '2014-10', data: [100, 7, 12, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { name: '2014-09', data: [100, 13, 13, 16, 1, 0, 0, 0, 0, 0, 0, 0, 0] },
        { name: '2014-08', data: [100, 16, 6, 22, 10, 6, 0, 0, 0, 0, 0, 0, 0] },
        { name: '2014-07', data: [100, 14, 11, 0, 11, 18, 5, 0, 0, 0, 0, 0, 0] },
        { name: '2014-06', data: [100, 2, 4, 8, 4, 19, 17, 2, 0, 0, 0, 0, 0] },
        { name: '2014-05', data: [100, 9, 9, 7, 18, 4, 21, 18, 7, 0, 0, 0, 0] },
        { name: '2014-04', data: [100, 11, 4, 7, 5, 14, 11, 16, 14, 2, 0, 0, 0] },
        { name: '2014-03', data: [100, 6, 3, 12, 11, 0, 11, 8, 12, 9, 2, 0, 0] },
        { name: '2014-02', data: [100, 17, 8, 4, 0, 8, 8, 13, 13, 17, 17, 4, 0] },
        { name: '2014-01', data: [100, 9, 0, 6, 6, 0, 6, 13, 16, 9, 22, 16, 9] }
    ]
};

// RFM Segmentation Data
export const rfmData = [
    { x: 'Fiéis em potencial', y: 273 },
    { x: 'Clientes fiéis', y: 76 },
    { x: 'Clientes hibernando', y: 17 },
    { x: 'Clientes perdidos', y: 104 },
    { x: 'Clientes promissores', y: 8 },
    { x: 'Clientes quase dormentes', y: 35 },
    { x: 'Clientes que não posso perder', y: 5 },
    { x: 'Clientes que precisam de atenção', y: 21 },
    { x: 'Clientes em risco', y: 76 },
    { x: 'Campeões', y: 3 },
    { x: 'Novos clientes', y: 22 }
];

// Products Data
export const productsData = {
    categories: [
        'Canon ImageClass',
        'Cisco TelePresence',
        'Motorola Smart Phone',
        'Nokia Smart Phone',
        'Apple iPhone',
        'HP Copy Machine',
        'Samsung Smart Phone',
        'Cisco Smart Phone',
        'Hoover Stove',
        'Sauder Classic Bookcase'
    ],
    sales: [61599, 52500, 44515, 40980, 38800, 35750, 32420, 29890, 27650, 25430]
};

// Category Data
export const categoryData = {
    labels: ['Technology', 'Furniture', 'Office Supplies'],
    series: [60, 25, 15]
};
