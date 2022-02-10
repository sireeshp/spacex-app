export interface LaunchModel {
    fairings: {
        reused: boolean,
        recovery_attempt: boolean,
        recovered: boolean,
        ships: Array<{}>
    },
    links: {
        patch: { small: string, large: string },
        reddit: {
            campaign: any,
            launch: any,
            media: any,
            recovery: any
        },
        flickr: {
            small: Array<string>,
            original: Array<string>
        },
        presskit: any,
        webcast: string,
        youtube_id: string,
        article: string,
        wikipedia: string
    },
    static_fire_date_utc: string,
    static_fire_date_unix: number,
    net: boolean,
    window: number,
    rocket: string,
    success: boolean,
    failures: Array<{
        time: number,
        altitude: any,
        reason: string
    }>,
    details: string,
    crew: Array<{}>,
    ships: Array<{}>
    capsules: Array<{}>,
    payloads: Array<string>,
    launchpad: Array<string>,
    flight_number: number,
    name: string,
    date_utc: Date,
    date_unix: number,
    date_local: string,
    date_precision: string,
    upcoming: boolean,
    auto_update: boolean,
    tbd: boolean,
    launch_library_id: any,
    id: string
}