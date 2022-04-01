const User = require("../../../models/User");
const userRoutes = require('../../../controllers/users')

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson }))
const mockRes = { status: mockStatus }

const testUser = new User({
    user_id: 1,
    username: 'user1',
    email: 'test@test.com',
    pass_digest: 'password'
})

describe('user controller', () => {
    beforeEach(() =>  jest.clearAllMocks());

    afterAll(() => jest.resetAllMocks());

    describe('index', () => {
        test('it returns users with a 200 status code', async () => {
            jest.spyOn(User, 'all', 'get')
                 .mockResolvedValue(['user1', 'user2']);
            await userRoutes.index(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(['user1', 'user2']);
        })
    });

    describe('show', () => {
        test('it returns a user and their dashboard with a 200 status code', async () => {
            jest.spyOn(User, 'findUserById')
                .mockResolvedValue( testUser);
                
            const mockReq = { params: { user_id: 1 } }
            await userRoutes.show(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(testUser);
        })
    });
    
})
