describe('habits endpoints', () => {
    let api;

    beforeEach(async () => {
        await resetTestDB()
    });

    beforeAll(async () => {
        api = app.listen(5000, () => console.log('Test server running on port 5000'));
    });

    afterAll(done => {
        console.log('Gracefully stopping test server');
        api.close(done);
    });

    it('should create a new habit for an existing user', async () => {
        const res = await request(api)
            .post('/habits/user/1')
            .send({
                habit_id: 1,
                habit_name: 'running',
                goal_freq: 10,
                units:'kilometre',
                cum_freq:  2,
                progress_streak: 0,
                habit_date: '29-03-2022',
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty("id")
    
        const existingUserRes = await request(api).get('/users/id');
        // expect(existingUserRes.statusCode).toEqual(200);
        expect(existingUserRes.body.habits.length).toEqual(2);
    });
    
    it('should return a list of all habits in database', async () => {
        const res = await request(api).get('/habits');
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(3);
    });

    it('should not create a new habit with a name over 50 characters', async () => {
        const res = await request(api)
            .post('/habits')
            .send({
                habit_id: 1,
                habit_name: "YyYXJHN8ovVJHDYn7kOl1griWoH8rw3Q7vaAxeyopIDG2NTZRIwQbhY7ykbuwZE2ohowLvUcxDMncPX6hwkrYLX4CrP5Y3nKsb6A9xfOFSsKTYvpmFeTSkDYkJNeszfeNF7I2iQqxWfWSYWH5PRYTLJUnU9Lq8rq0LKi24BkG5OWYWO3W0Nt2YCsbuJYamiWzPutJVfZ4oDg9dQUBy64d6a5tGCrNgSfyPzeg2wWgPHBLGfDEZPYO1zGsumYIr8Wh9l4cpyr5zuozn6kBkEz5mXfiZsUiKnjDp2BxaoU2ZEitJBiJ86KNOYV7NaqltNEBIkSfCrwRZwwhUfUj3h1W1PVGfs3hMbI",
                goal_freq: 10,
                units:'kilometre',
                cum_freq:  2,
                progress_streak: 0,
                habit_date: '28-03-2022'
            })
        expect(res.statusCode).toEqual(422);
        expect(res.body).toHaveProperty("err");

        const habitRes = await request(api).get('/habit/2');
        expect(habitRes.statusCode).toEqual(404);
    });

    it('should delete a habit', async () => {
        const res = await request(api)
            .delete('/habit/1')
        expect(res.statusCode).toEqual(404);

        const habitRes = await request(api).get('/habit/1');
        expect(habitRes.statusCode).toEqual(404);
        expect(habitRes.body).toHaveProperty('err');
    }); 
});

