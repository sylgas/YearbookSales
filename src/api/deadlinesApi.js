const response = {
    data: {
        deadlines: [
            {
                dueDate: new Date(2017, 9, 23),
                submitted: 16,
                pages: 20
            },
            {
                dueDate: new Date(2017, 11, 13),
                submitted: 0,
                pages: 20
            },
            {
                dueDate: new Date(2018, 2, 2),
                submitted: 20,
                pages: 20
            }, {
                dueDate: new Date(2018, 4, 1),
                submitted: 0,
                pages: 20
            },
        ]
    }
};

export function fetchDeadlines() {
    console.log('[API] fetchDeadlines');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(response.data);
        }, 2000)

    });
};