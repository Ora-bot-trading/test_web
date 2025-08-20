interface AcceptanceRecord {
  userId: string;
  docType: 'DATA_POLICY' | 'VOLATILITY_RISK' | 'FUNDS_ORIGIN';
  docVersion: string;
  acceptedAt: string;
  ip: string;
  userAgent: string;
  locale: string;
  flow: 'signup' | 'whitelist';
}

class AuditService {
  private static instance: AuditService;

  private constructor() {}

  static getInstance(): AuditService {
    if (!AuditService.instance) {
      AuditService.instance = new AuditService();
    }
    return AuditService.instance;
  }

  async recordAcceptance(record: AcceptanceRecord): Promise<void> {
    try {
      // En producción, esto enviaría a un endpoint de backend
      // Por ahora, guardamos en localStorage para demostración
      const key = `legal_acceptance_${record.userId}_${record.docType}_${Date.now()}`;
      localStorage.setItem(key, JSON.stringify(record));
      
      console.log('Legal acceptance recorded:', record);
    } catch (error) {
      console.error('Error recording legal acceptance:', error);
    }
  }

  async getAcceptanceHistory(userId: string): Promise<AcceptanceRecord[]> {
    try {
      const keys = Object.keys(localStorage).filter(key => 
        key.startsWith(`legal_acceptance_${userId}`)
      );
      
      const records = keys.map(key => {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
      }).filter(Boolean);

      return records.sort((a, b) => 
        new Date(b.acceptedAt).getTime() - new Date(a.acceptedAt).getTime()
      );
    } catch (error) {
      console.error('Error retrieving acceptance history:', error);
      return [];
    }
  }

  async exportAcceptanceData(userId?: string): Promise<string> {
    try {
      const pattern = userId ? `legal_acceptance_${userId}` : 'legal_acceptance_';
      const keys = Object.keys(localStorage).filter(key => 
        key.startsWith(pattern)
      );
      
      const records = keys.map(key => {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
      }).filter(Boolean);

      return JSON.stringify(records, null, 2);
    } catch (error) {
      console.error('Error exporting acceptance data:', error);
      return '[]';
    }
  }

  private async getClientIP(): Promise<string> {
    try {
      // En producción, esto vendría del backend
      return '192.168.1.1'; // IP simulada
    } catch {
      return 'unknown';
    }
  }

  async createAcceptanceRecord(
    userId: string,
    docType: AcceptanceRecord['docType'],
    flow: AcceptanceRecord['flow'],
    locale: string = 'es-CO'
  ): Promise<AcceptanceRecord> {
    const ip = await this.getClientIP();
    const userAgent = navigator.userAgent;
    const acceptedAt = new Date().toISOString();
    const docVersion = 'v2024.12.20';

    return {
      userId,
      docType,
      docVersion,
      acceptedAt,
      ip,
      userAgent,
      locale,
      flow
    };
  }
}

export const auditService = AuditService.getInstance();
export type { AcceptanceRecord };
