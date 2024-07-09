import { Redis } from "@upstash/redis"

export const db = new Redis({
    url: "https://real-duckling-36545.upstash.io",
    token: "AY7BAAIncDE2ZWRjZmE2NTA1MjU0ODY5OGU4NWQ3MzVlMGFmZmE3ZXAxMzY1NDU"

})