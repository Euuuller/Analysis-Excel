/**
 * Product Data Model
 * Data structure for product and category analysis
 */

export class ProductModel {
    constructor() {
        this.products = {
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
        
        this.categoryData = {
            labels: ['Technology', 'Furniture', 'Office Supplies'],
            series: [60, 25, 15]
        };
    }
    
    getProducts() {
        return this.products;
    }
    
    getCategories() {
        return this.categoryData;
    }
    
    getTotalSales() {
        return this.products.sales.reduce((sum, sale) => sum + sale, 0);
    }
}
