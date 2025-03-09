'use strict';

const { Client } = require("whatsapp-web.js");
const { GroupChat } = require("whatsapp-web.js/src/structures");

module.exports = class CustomClient extends Client {
    constructor(options = {}) {
        super(options);
    }

    async removeMember(idGroup, idMember) {
        try {
            const chat = await super.getChatById(idGroup);
            const groupChat = new GroupChat(this, chat)

            await groupChat.removeParticipants([idMember]);
            return true;
        } catch(error) {
            return false;
        };
    };

};