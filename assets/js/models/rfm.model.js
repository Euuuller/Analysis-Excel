/**
 * RFM Data Model
 * Data structure for RFM segmentation
 */

export class RFMModel {
    constructor() {
        this.segments = [
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
    }
    
    getData() {
        return this.segments;
    }
    
    getTotalCustomers() {
        return this.segments.reduce((sum, segment) => sum + segment.y, 0);
    }
}
