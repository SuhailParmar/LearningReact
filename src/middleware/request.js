export async function authenticatedRequest(url, requestBody){
    try {
        const token = await localStorage.getItem('ACCESS_TOKEN');
        const reqInit = requestBody ? {
            ...requestBody,
            headers: {
                ...requestBody.headers,
                 'Authorization': `Bearer ${token}`
            }
            } : { headers: {
                'Authorization': `Bearer ${token}`
            }
        };
        const response = await fetch(url, reqInit).then(res => res.json());
        return response;
    } catch (error) {
        console.log(error);
    }
}