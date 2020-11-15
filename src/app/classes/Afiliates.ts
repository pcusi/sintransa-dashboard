export class Afiliates {
    constructor(
        public names: string,
        public lastnames: string,
        public address: string,
        public dni: string,
        public area: string,
        // tslint:disable-next-line:variable-name
        public a_position: string,
        public phone?: string,
        public status?: number,
        public idAfi?: string,
        public photo?: string,
    ) { }
}
