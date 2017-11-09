export class User {
    
        public customerId: number;
        public organisations: Organisation[];
        public currentOrganisation: Organisation;
        public email: string;
        public firstname: string;
        public surname: string;
    }
    
    export class Organisation {
        public organisationId: number;
        public organisationName: string;
        public isReseller: boolean;
    }
    
    export class UserSession extends User {
        authenticated: boolean;
        idToken: string;
        refreshToken: string;
        sessionId: string;
        verified: boolean;
    }
    