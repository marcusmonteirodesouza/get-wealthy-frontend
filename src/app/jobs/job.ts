export class Job {
    readonly title: string;
    readonly description: string;
    readonly salary: number;
    readonly currencyNumber: number;
    readonly placeId: string;

    constructor(title: string, description: string, salary: number, currencyNumber: number, placeId: string) {
        this.title = title;
        this.description = description;
        this.salary = salary;
        this.currencyNumber = currencyNumber;
        this.placeId = placeId;
    }
}
