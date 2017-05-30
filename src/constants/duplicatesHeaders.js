export const DUPLICATES_TABLE_HEADERS = [
    {value: 'studentId', label: 'Student ID'},
    {value: 'firstName', label: 'First Name'},
    {value: 'lastName', label: 'Last Name'},
    {value: 'grade', label: 'Grade'},
    {value: 'homeroom', label: 'Homeroom'},
    {value: 'email', label: 'Email'},
    {value: 'address', label: 'Shipping Address'}
];

export const EXTENDED_DUPLICATES_TABLE_HEADERS = [...DUPLICATES_TABLE_HEADERS,
    {value: 'include', label: 'Include?'}
];