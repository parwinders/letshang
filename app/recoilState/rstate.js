import { atom, selector } from 'recoil';
import { fetchEvents } from './mockdata';

// Define an atom to hold the events state
export const questionState = atom({
    key: 'questionState',
    default: [], // Default value
});

// Define a selector to fetch events from the mock API
export const fetchEventsSelector = selector({
    key: 'fetchEventsSelector',
    get: async ({ get }) => {
        const response = await fetchEvents();
        return response;
    },
});
