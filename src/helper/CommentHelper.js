 const getComments = async (id) => {

    const autorization = btoa('user12:5s*f!thGyuC8xm&h');
    const getInit = {
        headers: {
            'Authorization': `Basic ${autorization}`,
        },
    }
    let url = `https://strive-school-testing-apis.herokuapp.com/api/comments/${id}`;

    let request = await fetch(url, getInit)

    return await request.json()

}

export default getComments;