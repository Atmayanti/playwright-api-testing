import {test, expect} from '@playwright/test';
import { request } from 'http';

test('API GET Single User Request', async({request}) => {
    const response = await request.get('https://reqres.in/api/users/2')

    expect (response.status()).toBe(200);

    const text = await response.text();
    expect(text).toContain('Janet');

    console.log(await response.json());
})

test('API GET List Users Request', async({request}) => {
    const response = await request.get('https://reqres.in/api/users?page=2')

    expect (response.status()).toBe(200);

    const text = await response.text();
    expect(text).toContain('Michael');

    console.log(await response.json());
})

test('API GET Single User Not Found Request', async({request}) => {
    const response = await request.get('https://reqres.in/api/users/23', {
        headers: {
            "x-api-key": "reqres-free-v1"
        }
    });

    expect (response.status()).toBe(404);
    console.log(await response.json());
})

test('API GET Single Resource Request', async({request}) => {
    const response = await request.get('https://reqres.in/api/unknown/2');

    expect (response.status()).toBe(200);

    const text = await response.text();
    expect(text).toContain('rose');

    console.log(await response.json());
})

test('API GET List Resource Request', async({request}) => {
    const response = await request.get('https://reqres.in/api/unknown');

    expect (response.status()).toBe(200);

    const text = await response.text();
    expect(text).toContain('cerulean');

    console.log(await response.json());
})

test('API GET Single Resource Not Found Request', async({request}) => {
    const response = await request.get('https://reqres.in/api/unknown/23', {
        headers: {
            "x-api-key": "reqres-free-v1"
        }
    });

    expect (response.status()).toBe(404);
    console.log(await response.json());
})

test('API POST Request', async({request}) => {
    const response = await request.post('https://reqres.in/api/users', {
        headers: {
            "x-api-key": "reqres-free-v1"
        },
        data: {
            "name": "maya",
            "job": "QA"
        }
    });
    expect (response.status()).toBe(201);

    const text = await response.text();
    expect(text).toContain('maya');
    
    console.log(await response.json());

})

test('API PUT Request', async({request}) => {
    const response = await request.put('https://reqres.in/api/users/2', {
        headers: {
            "x-api-key": "reqres-free-v1"
        },
        data: {
            "name": "atmayanti",
            "job": "QA Engineer"
        }
    });
    expect (response.status()).toBe(200);

    const text = await response.text();
    expect(text).toContain('atmayanti');
    
    console.log(await response.json());

})

test('API PATCH Request', async({request}) => {
    const response = await request.put('https://reqres.in/api/users/2', {
        headers: {
            "x-api-key": "reqres-free-v1"
        },
        data: {
            "name": "maya atmayanti",
            "job": "QA Engineer"
        }
    });
    expect (response.status()).toBe(200);

    const text = await response.text();
    expect(text).toContain('atmayanti');
    
    console.log(await response.json());

})

test('API DELETE Request', async({request}) => {
    const response = await request.delete('https://reqres.in/api/users/2', {
        headers: {
            "x-api-key": "reqres-free-v1"
        }
    });

    expect (response.status()).toBe(204);
})

test('API POST Register Successful Request', async({request}) => {
    const response = await request.post('https://reqres.in/api/register', {
        headers: {
            "x-api-key": "reqres-free-v1"
        },
        data: {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        }
    });
    expect (response.status()).toBe(200);
    
    console.log(await response.json());
})

test('API POST Register Unsuccessful Request', async({request}) => {
    const response = await request.post('https://reqres.in/api/register', {
        headers: {
            "x-api-key": "reqres-free-v1"
        },
        data: {
            "email": "sydney@fife"
        }
    });
    expect (response.status()).toBe(400);
    
    console.log(await response.json());
})

test('API POST Login Successful Request', async({request}) => {
    const response = await request.post('https://reqres.in/api/login', {
        headers: {
            "x-api-key": "reqres-free-v1"
        },
        data: {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        }
    });
    expect (response.status()).toBe(200);
    
    console.log(await response.json());
})

test('API POST Login Unsuccessful Request', async({request}) => {
    const response = await request.post('https://reqres.in/api/login', {
        headers: {
            "x-api-key": "reqres-free-v1"
        },
        data: {
            "email": "peter@klaven"
        }
    });
    expect (response.status()).toBe(400);

    const text = await response.text();
    expect(text).toContain('Missing password');
    
    console.log(await response.json());
})

test('API GET Delayed Response Request', async({request}) => {
    const response = await request.get('https://reqres.in/api/users?delay=3', {
        headers: {
            "x-api-key": "reqres-free-v1"
        }
    });

    expect (response.status()).toBe(200);

    const text = await response.text();
    expect(text).toContain('George');

    console.log(await response.json());
})