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
        foundingYear: string;
    };
    externalLinks: {
        Instagram?: string;
        LINE?: string;
        X?: string;
        Website?: string;
    };
    tags: string[];
    activityDetails: {
        summary: string;
        location: string;
        frequency: string;
    };
    recruitmentInfo: {
        welcomeSchedule: string;
    };
    lastUpdate: string;
};