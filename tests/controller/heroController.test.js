const request = require('supertest')
const app = require('../../index')
// test 用, 沒引入會報錯
require('iconv-lite').encodingExists('foo')

describe('api heroes', () => {
    // 所有heroes api

    it('GET /heroes', async () => {
        return request(app)
            .get('/heroes')
            .set('Accept', 'application/json')
            .expect(200)
            .then(response => {
                expect(Array.isArray(response.body.heroes)).toBe(true)
            })
    })

    it('GET /heroes/:id', async () => {
        return request(app)
            .get('/heroes/1')
            .set('Accept', 'application/json')
            .expect(200)
            .then(response => {
                expect(response.body.id).toBe("1")
            })
    })
})
