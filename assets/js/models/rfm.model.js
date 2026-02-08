/**
 * RFM Data Model
 * Enhanced data structure for RFM segmentation with strategic metadata
 */

export class RFMModel {
    constructor() {
        this.segments = [
            {
                x: '👑 Campeões',
                y: 25,
                color: '#FFD700',
                group: 'ATIVOS_VALIOSOS',
                rfm: { r: 5, f: 5, m: 5 },
                action: 'Programa VIP exclusivo',
                description: 'Melhores clientes - Compram frequentemente e gastam muito'
            },
            {
                x: '❤️ Clientes fiéis',
                y: 85,
                color: '#2ECC71',
                group: 'ATIVOS_VALIOSOS',
                rfm: { r: 4, f: 5, m: 4 },
                action: 'Programa de fidelidade premium',
                description: 'Clientes consistentes e valiosos'
            },
            {
                x: '💎 Promissores',
                y: 45,
                color: '#1ABC9C',
                group: 'ATIVOS_VALIOSOS',
                rfm: { r: 5, f: 3, m: 3 },
                action: 'Incentivar compras frequentes',
                description: 'Compraram recentemente, potencial de crescimento'
            },
            {
                x: '🌟 Fiéis em potencial',
                y: 120,
                color: '#F39C12',
                group: 'POTENCIAL_CRESCIMENTO',
                rfm: { r: 4, f: 3, m: 3 },
                action: 'Programa de fidelidade',
                description: 'Maior segmento - Grande oportunidade de conversão'
            },
            {
                x: '✨ Novos clientes',
                y: 55,
                color: '#3498DB',
                group: 'POTENCIAL_CRESCIMENTO',
                rfm: { r: 5, f: 1, m: 2 },
                action: 'Onboarding e engajamento',
                description: 'Primeira compra recente - Nutrir relacionamento'
            },
            {
                x: '⚠️ Em risco',
                y: 70,
                color: '#E67E22',
                group: 'ATENCAO_NECESSARIA',
                rfm: { r: 2, f: 4, m: 4 },
                action: 'Campanha de reativação urgente',
                description: 'Clientes valiosos que estão se afastando'
            },
            {
                x: '👀 Precisam de atenção',
                y: 50,
                color: '#FF6B6B',
                group: 'ATENCAO_NECESSARIA',
                rfm: { r: 3, f: 2, m: 3 },
                action: 'Ofertas personalizadas',
                description: 'Engajamento em declínio - Ação preventiva'
            },
            {
                x: '🚨 Não posso perder',
                y: 30,
                color: '#E74C3C',
                group: 'CRITICOS',
                rfm: { r: 1, f: 5, m: 5 },
                action: 'AÇÃO IMEDIATA - Contato direto',
                description: 'CRÍTICO: Clientes de alto valor em risco extremo'
            },
            {
                x: '💔 Perdidos',
                y: 95,
                color: '#C0392B',
                group: 'CRITICOS',
                rfm: { r: 1, f: 2, m: 2 },
                action: 'Campanha de reconquista',
                description: 'Não compram há muito tempo - Win-back campaign'
            },
            {
                x: '😴 Hibernando',
                y: 40,
                color: '#7F8C8D',
                group: 'CRITICOS',
                rfm: { r: 1, f: 1, m: 3 },
                action: 'Reativação com desconto agressivo',
                description: 'Inativos há muito tempo - Última tentativa'
            },
            {
                x: '💤 Quase dormentes',
                y: 60,
                color: '#95A5A6',
                group: 'CRITICOS',
                rfm: { r: 2, f: 1, m: 2 },
                action: 'Campanha de reengajamento',
                description: 'Baixa frequência - Risco de churn'
            }
        ];
    }
    
    getData() {
        return this.segments;
    }
    
    getTotalCustomers() {
        return this.segments.reduce((sum, segment) => sum + segment.y, 0);
    }
    
    getSegmentPercentage(segment) {
        const total = this.getTotalCustomers();
        return ((segment.y / total) * 100).toFixed(2);
    }
    
    getHealthScore() {
        const total = this.getTotalCustomers();
        const weights = {
            'ATIVOS_VALIOSOS': 100,
            'POTENCIAL_CRESCIMENTO': 70,
            'ATENCAO_NECESSARIA': 40,
            'CRITICOS': 10
        };
        
        let weightedSum = 0;
        this.segments.forEach(seg => {
            const percentage = (seg.y / total);
            weightedSum += percentage * weights[seg.group];
        });
        
        return Math.round(weightedSum);
    }
}
