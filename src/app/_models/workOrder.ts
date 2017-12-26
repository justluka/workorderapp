export class WorkOrder {
    workOrderID: number;
    CategoryID: number;
    CustomerID: number;
    StatusID: number;
    Description: string;
    PropouseHours: number;
    ActualHours: number;
    Document: string;
    SignedDate: DateTimeFormat;
    DateStarted: DateTimeFormat;
    DateCompleted: DateTimeFormat;
    ReleasedTestingDate: DateTimeFormat;
    ReleasedProductionDate: DateTimeFormat;
    Notes: string;
    LastUpdateByUser: string;
    LastUpdateDate: DateTimeFormat;    
}