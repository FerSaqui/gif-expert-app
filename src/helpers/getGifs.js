export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=89DuJk2fD3jzIKYIoFw8mHWtIliwKh7Q&q=${ category }&limit=20`;
    const response = await fetch( url );
    const { data = [] } = await response.json();

    const gifs = data.map( imagen => ({
        id: imagen.id,
        title: imagen.title,
        url: imagen.images.downsized_medium.url
    }));
    return gifs;
}