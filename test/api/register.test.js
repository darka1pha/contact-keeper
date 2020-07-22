const request = require('supertest')

const app = require('../../app')

test('Test For Register a New User' , async () => {
    await request(app).post('/api/users')
    .send({
        name:'test',
        email:'test@gmail.com',
        password:'123456'
    })
    .expect(200)
})