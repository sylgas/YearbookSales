const response = {
    data: {
        sales: {
            finalDate: new Date(2018, 6, 1),
            personalizationDate: new Date(2017, 15, 10),
            exactQuantityDate: new Date(2017, 15, 10),
            campus: 150,
            online: 419,
            max: 1500
        }
    }
};

export const fetchSales = () => {
    console.log('[API] fetchSales');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Object.assign({}, response.data));
        }, 2000)

    });
};