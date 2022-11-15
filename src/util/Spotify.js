const cliendId = '0da71b8073214f4e8e14929b8b9ea30d'
const redirectUri = 'http://localhost:3000/'
let accessToken

const Spotify ={
    getAccessToken(){
    if (accessToken){
        return accessToken
    }

    const accessToken = window.location.href.match(/access_token=([^&]*)/)
    const expiresInMatch = window.location.href.match(/access_token=([^&]*)/)

    if(accessTokenMatch && expiresInMatch) {
        accessToken = accessTokenMatch[1]
        const expiredIn = Number(expiresInMatch[1])

        window.setTimeout(() => accessToken = '' , expiredIn *1000)
        window.history.pushState('Access Token', null, '/')
        return accessToken
    }else{
        const accessUrl = `https://accounts.spotify.com/authorize?client_id=${cliendId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`
        window.location = accessUrl
    }
},
search(term){
    const accessToken = Spotify.getAccessToken()
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,
    { headers:{
        Authorization:` Bearer ${accessToken}`
    }
    }).then(response => {
        return response.json()
    }).then(jsonResponse => {
        
    })
}
}


export default Spotify