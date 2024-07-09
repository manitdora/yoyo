const upstashRedisRestUrl = `https://real-duckling-36545.upstash.io`
const authToken = `AY7BAAIncDE2ZWRjZmE2NTA1MjU0ODY5OGU4NWQ3MzVlMGFmZmE3ZXAxMzY1NDU`

type Command = 'zrange' | 'sismember' | 'get' | 'smembers'

export async function fetchRedis(
  command: Command,
  ...args: (string | number)[]
) {
  const commandUrl = `${upstashRedisRestUrl}/${command}/${args.join('/')}`

  const response = await fetch(commandUrl, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    cache: 'no-store',
  })

  if (!response.ok) {
    throw new Error(`Error executing Redis command: ${response.statusText}`)
  }

  const data = await response.json()
  return data.result
}
