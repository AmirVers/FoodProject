const postData = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });
    return await res.json();
};

const getResources = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Ошибка не смог фетчнуть: ${url}, cтатус: ${res.status}`);
    }

    return await res.json();
};

export {postData};
export {getResources};