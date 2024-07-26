export const mockEvents = [
    { id: 1, question: 'Company/Organization', type: 'simple' },
    { id: 2, question: 'job title', type: 'simple' },
    { id: 2, question: 'Are you a current Student ?', type: 'boolean' },
    {
        id: 2,
        question: 'Where did you hear about this event ?',
        type: 'enum',
        enum: [
            {
                id: 1,
                value: 'linkedin',
            },
            {
                id: 1,
                value: 'instagram',
            },
            {
                id: 1,
                value: 'twitter',
            },
            {
                id: 1,
                value: 'facebook',
            },
        ],
    },
];
export const fetchEvents = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockEvents);
        }, 1000); // Simulate network delay
    });
};
