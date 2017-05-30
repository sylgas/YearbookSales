const response = {
    data: {
        duplicates: [
                {
                    id: 0,
                    data: [
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
                    ]
                },
                {
                    id: 1,
                    data: [
                        {
                            studentId: 'FRE5676',
                            firstName: 'Mary',
                            lastName: 'Sue',
                            grade: '7',
                            homeroom: 'Science',
                            email: 'marysue@gmail.com',
                            address: '11134 TX Way, Irving TX 75080'
                        },
                        {
                            studentId: 'EDD6826',
                            firstName: 'Mary',
                            lastName: 'Sue',
                            grade: '7',
                            homeroom: 'Science',
                            email: 'marysue@gmail.com',
                            address: '11134 TX Way, Irving TX 75080'
                        },
                        {
                            studentId: 'GGU5549',
                            firstName: 'John',
                            lastName: 'Smith',
                            grade: '7',
                            homeroom: 'Science',
                            email: 'marysue@gmail.com',
                            address: '11134 TX Way, Irving TX 75080'
                        }
                    ]
                }
        ]
    }
    }
;

export function fetchDuplicates() {
    console.log('[API] fetchDuplicates');
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(response.data);
        }, 2000)

    });
}

export function mergeDuplicates(ids, mergedItem) {
    console.log('[API] mergeDuplicates ' + mergedItem.studentId);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('SUCCESS');
        }, 2000)

    });
}

export function ignoreDuplicates(duplicatesIds) {
    console.log('[API] ignoreDuplicates ' + duplicatesIds);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('SUCCESS');
        }, 2000)

    });
}