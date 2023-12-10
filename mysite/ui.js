const number = 123123

const number2 = 213123

export function apiCall(route, body = {}, method=`post`)

    const headrs  = new Headers({
        'content-type': 'applications/json'  
    })

    const request  = {
        method,
        mode: 'cors',
        Headers,
    }

// hello