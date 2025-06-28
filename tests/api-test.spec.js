import {test, expect} from '@playwright/test';
import { request } from 'http';

test('API GET Request', async({request}) => {
    const response = await request.get('https://reqres.in/api/users/2')

    expect (response.status()).toBe(200);

    const text = await response.text();
    expect(text).toContain('Janet');

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

test('API DELETE Request', async({request}) => {
    const response = await request.delete('https://reqres.in/api/users/2', {
        headers: {
            "x-api-key": "reqres-free-v1"
        }
    });

    expect (response.status()).toBe(204);
})