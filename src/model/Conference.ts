import { Venue } from "./Venue";

export interface Conference {
    id: string;
    name: string;
    startDate: Date;
    endDate: Date;
    venue: Venue;
};
