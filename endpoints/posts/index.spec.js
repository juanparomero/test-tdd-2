
const handlers = require('./index')

describe('Endpoints',() => {
    describe('posts',() => {
        describe('get',() => {
            it.skip ('return to posts json', async () => {
                const axios = {
                    get : jest.fn().mockResolvedValue({data: 1 })
                }
                const res ={
                    status: jest.fn().mockReturnThis(),
                    send: jest.fn()
                }
                await handlers({axios}).get({},res)
                expect(res.status.mock.calls).toEqual([[200]])
                expect(res.send.mock.calls).toEqual([[1]])
            })
        })
  })
})