export class User {
    constructor(
        public username: string,
        public password: string,
        public idUsu?: number,
        public role?: string,
        public idAfi?: string,
    ) { }
}