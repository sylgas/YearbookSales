const response = {
    data: {
        duplicates: [
            [
                {
                    studentId: 'FRE567',
                    firstName: 'John',
                    lastName: 'Smith',
                    grade: '7',
                    homeroom: 'Science',
                    email: 'johnsmith@gmail.com',
                    address: '11134 TX Way, Irving TX 75080'
                },
                {
                    studentId: 'EDD682',
                    firstName: 'John',
                    lastName: 'Smith',
                    grade: '7',
                    homeroom: 'Math',
                    email: 'johnsmith@gmail.com',
                    address: '11134 TX Way, Irving TX 75080'
                },
                {
                    studentId: 'GGU554',
                    firstName: 'John',
                    lastName: 'Smith',
                    grade: '9',
                    homeroom: 'Science',
                    email: 'johnsmith@gmail.com',
                    address: '11134 TX Way, Irving TX 75080'
                }
            ],
            [
                {
                    studentId: 'FRE567',
                    firstName: 'Mary',
                    lastName: 'Sue',
                    grade: '7',
                    homeroom: 'Science',
                    email: 'marysue@gmail.com',
                    address: '11134 TX Way, Irving TX 75080'
                },
                {
                    studentId: 'EDD682',
                    firstName: 'Mary',
                    lastName: 'Sue',
                    grade: '7',
                    homeroom: 'Science',
                    email: 'marysue@gmail.com',
                    address: '11134 TX Way, Irving TX 75080'
                },
                {
                    studentId: 'GGU554',
                    firstName: 'John',
                    lastName: 'Smith',
                    grade: '7',
                    homeroom: 'Science',
                    email: 'marysue@gmail.com',
                    address: '11134 TX Way, Irving TX 75080'
                }
            ]
        ]
    }
};

export function fetchDuplicates() {
    console.log('[API] fetchDuplicates');
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(response.data);
        }, 2000)

    });
}