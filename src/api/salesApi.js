const response = {
    data: {
        sales: {
            finalDate: new Date(2018, 5, 1),
            personalizationDate: new Date(2017, 9, 15),
            exactQuantityDate: new Date(2017, 9, 15),
            campus: 150,
            online: 419,
            max: 1500
        }
    }
};

export function fetchSales(){
    console.log('[API] fetchSales');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Object.assign({}, response.data));
        }, 2000)

    });
};