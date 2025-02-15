// types.d.ts
interface Circle {
    circleName: string;
    profileImage: string;
    affiliation: string;
    memberComposition: {
        totalMembers: string;
        gradeLevels: {
            [key: string]: string;
        };
        gender: {
            Male: string;
            Female: string;
        };
        belonging: {
            [key: string]: string;
        };
        foundingYear: string;
    };
    externalLinks: {
        Instagram?: string;
        LINE?: string;
        X?: string;
        Website?: string;
        Facebook?: string;
        YouTube?: string;
        weighted?: string;
    };
    tags: string[];
    activityDetails: {
        summary: string;
        location: string;
        frequency: string;
        meal: string;
        record: string;
        membershipFee: string;
        initialCost: string;
        feelingPositive: string;
        feelingNegative: string;
    };
    recruitmentInfo: {
        welcomeSchedule: string;
    };
    lastUpdate: string;
};