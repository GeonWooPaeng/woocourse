import addTagID from './add-tag-id.js';
import hideScreen from './hide-screen.js';
import addEventListener from './add-event-listener.js';

export default function initializeGame() {
    addTagID();
    addEventListener();
    hideScreen();
}