"use strict";

class SoundManager {
    #sounds;

    constructor() {
        this.#sounds = new Map();
    }

    addSound(id, sound) {
        try {
            if (!this.#sounds.has(id)) {
                this.#sounds.set(id, sound);
            } else {
                throw 'The sound "' + id + '" does already exist!';
            }
        } catch (err) {
            console.error(err);
        }
    }

    getSound(id) {
        let sound = null;
        try {
            if (this.#sounds.has(id)) {
                sound = his.#sounds.get(id);
            } else {
                throw 'The sound "' + id + '" does not exist!';
            }
        } catch (err) {
            console.error(err);
        }
        return sound;
    }

    removeSound(id) {
        try {
            if (this.#sounds.has(id)) {
                this.#sounds.delete(id);
            } else {
                throw 'The sound "' + id + '" does not exist!';
            }
        } catch (err) {
            console.error(err);
        }
    }
}
