/**
 * dataProcessing добавляет кастомные поля каждому елементу.такие как id и imageUrl
 * @param item
 * @param count
 * @param filter
 * @returns {*&{imageUrl: string, id: string}}
 */
function dataProcessing(item, count, filter) {
    const personId = item.name.replace(/ /g, '-').toLowerCase();
    const imgUrl = `https://starwars-visualguide.com/assets/img/${filter}/${count++}.jpg`;
    return { id: personId, imageUrl: imgUrl, ...item };
}
/**
 * Функция для получения данных/списков из api (например people, planets и т.д)
 * @param dataType
 * @returns {Promise<[]>}
 */
async function getData(dataType, dataProccType) {
    const filteredResults = [];

    let data = null;
    let allResults = [];
    do {
        if (data) {
            data = await fetch(data['next'])
                .then(res => res.json())
                .then(data => data)
        } else {
            data = await fetch(`https://swapi.dev/api/${ dataType }/`)
                .then(res => res.json())
                .then(data => data)
        }
        allResults = [...allResults, ...data.results]
    } while (data['next'])

    let count = 1;
    allResults.forEach(item => {
        filteredResults.push(dataProcessing(item, count++, dataProccType));
    });

    return filteredResults;
}

export { getData, dataProcessing }