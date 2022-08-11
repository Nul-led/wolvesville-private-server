const fetch = require('node-fetch');

class ApiClient {
    static async _fetchCore(token, path) {
        const res = await fetch(`https://api-core.wolvesville.com/${path}`, { headers: { authorization: `Bearer ${token}` }});
        try {
            return res.json();
        } catch(e) {
            return null;
        }
    }

    static fetchStatsSummary(token, playerId) {
        return this._fetchCore(token, `playerRoleStats/summary/${playerId}`);
    }
    
    static fetchProfile(token) {
        return this._fetchCore(token, "players/me");
    }

    static fetchItems(token) {
        return this._fetchCore(token, "equippedItems");
    }

    static fetchSlots(token, playerId) {
        return this._fetchCore(token, `inventory/slots/${playerId}`);
    }
}

module.exports = ApiClient;
