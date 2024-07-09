interface User {
    name: stringe,
    email: string,
    image: string,
    id: string
}
interface Message {
    id: string,
    senderId: string
    recieverId: string
    timestamp: number
    text:string
}
interface Chat {
    id: string
    messages: Message
}
interface FriendRequest {
    id: string
    senderId: string
    recieverId: string
}