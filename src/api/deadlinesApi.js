const response = {
    data: {
        deadlines: {
        totalSubmitted: 36,
        ordered: [
            {
                dueDate: new Date(2017, 9, 23),
                pages: 15
            },
            {
                dueDate: new Date(2017, 11, 13),
                pages: 20
            },
            {
                dueDate: new Date(2018, 2, 2),
                pages: 10
            }, {
                dueDate: new Date(2018, 4, 1),
                pages: 20
            },
        ]
    }
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