'use strict';

const { Client } = require("whatsapp-web.js");
const { GroupChat } = require("whatsapp-web.js/src/structures");

module.exports = class CustomClient extends Client {
    constructor(options = {}) {
        super(options);
    }

    async removeMember(idGroup, idMember) {
        try {
            if(!idGroup.endsWith('@g.us')) {
                return false
            }
            const chat = await super.getChatById(idGroup);
            const groupChat = new GroupChat(this, chat)

            await groupChat.removeParticipant([idMember]);
            return true;
        } catch(error) {
            return false;
        };
    };

    async addMember(idGroup, idMember) {
        if(!idGroup.endsWith('@g.us')) {
            return false
        }
        try {
            const chat = await super.getChatById(idGroup);
            const groupChat = new GroupChat(this, chat)

            await groupChat.addParticipants(idMember)
            return true;
        } catch(error) {
            return false;
        };
    };

};