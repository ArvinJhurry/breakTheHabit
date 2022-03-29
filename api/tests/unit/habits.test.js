const Habit = require('../../api/models/Habit')
const habitRoutes = require('../../api/controllers/habits')


const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson }));
const mockRes = { status: mockStatus }


const testHabit ={
    habit_id: 1,
    habit_name: 'running',
    goal_freq: 10,
    units:'kilometre',
    cum_freq:  2,
    progress_streak: 0,
    habit_date: 29/03/2022,
}

describe('Habit controller', () => {
    beforeEach(() => jest.clearAllMocks())
    
    afterAll(() => jest.resetAllMocks())

    describe('index', () => {
        test('it returns habits with a 200 status code', async () => {
            jest.spyOn(Habit, 'all', 'get')
                 .mockResolvedValue(['habit1', 'habit2']);
            await habitRoutes.index(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(['habit1', 'habit2']);
        })
    });

    describe('show', () => {
        test('it returns a habit with a 200 status code', async () => {
            let testHabit = {
                habit_id: 1,
                habit_name: 'running',
                goal_freq: 10,
                units:'kilometre',
                cum_freq:  2,
                progress_streak: 0,
                habit_date: 29/03/2022,
            }
            jest.spyOn(Habit, 'findById')
                .mockResolvedValue(new Habit(testHabit));
                
            const mockReq = { params: { habit_id: 1 } }
            await habitRoutes.show(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(new Habit(testHabit));
        })
    });

    describe('create', () => {
        test('it returns a new habit with a 201 status code', async () => {
            let testHabit = {
                habit_id: 1,
                habit_name: 'running',
                goal_freq: 10,
                units:'kilometre',
                cum_freq:  2,
                progress_streak: 0,
                habit_date: 29/03/2022,
            }
            jest.spyOn(Habit, 'create')
                .mockResolvedValue(new Habit(testHabit));
                
            const mockReq = { body: testHabit }
            await habitRoutes.create(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(201);
            expect(mockJson).toHaveBeenCalledWith(new Habit(testHabit));
        })
    });

    describe('destroy', () => {
        test('it returns a 204 status code on successful deletion', async () => {
            jest.spyOn(Habit, 'destroy')
                .mockResolvedValue('Habit 1 deleted');
            
            const mockReq = { params: { id: 1 } }
            await habitRoutes.destroy(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(204);
        })
    });
    
        })
