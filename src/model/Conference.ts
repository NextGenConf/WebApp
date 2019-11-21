import { Venue } from "./Venue";

export interface Conference {
    uniqueName: string
    displayName: string
    iconUri: string
    description: string
    subtitle: string
    startDate: string
    endDate: string
    venue: Venue
};
