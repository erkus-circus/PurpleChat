import io from 'socket.io-client'
const SERVER = "https://lucid-detroit.com"
const SERVEROPTS = {
    transports: ["websocket"],
    secure: true
}

if (!window.navigator.userAgent) {
    window.navigator.userAgent = "react-native";
}

global.clientID = {
    TTL: null,
    user: null,
    userID: null,
}


export const chatSocket = io(SERVER + "/chat", SERVEROPTS);
export const accountSocket = io(SERVER + "/accounts", SERVEROPTS)