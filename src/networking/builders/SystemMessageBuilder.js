module.exports = class SystemMessageBuilder {
    static default(merge) {
        return {
            ...merge,
            date: Date.now(),
            authorId: "system"
        }
    }

    static welcome(onlinePlayersCount, onlinePlayersCountForLanguage) {
        return this.default({
            msgKey: "welcome",
            msgArgs: {
                "online-players-count": onlinePlayersCount,
                "online-players-count-for-language": onlinePlayersCountForLanguage
            }
        });
    }
    
    static playerJoined(playerId, username) {
        return this.default({
            msgKey: "player-joined",
            msgArgs: {
                "player-id": playerId,
                "player-username ": username
            }
        });
    }
}
