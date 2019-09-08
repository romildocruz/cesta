export class Result {

    constructor(
        public success: boolean = false,
        public message: string = "",
        public data: any = null
    ) {
    }
}