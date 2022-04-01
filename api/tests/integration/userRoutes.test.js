describe("users endpoints", () => {
  let api;

  beforeEach(async () => {
    await resetTestDB();
  });

  beforeAll(async () => {
    api = app.listen(5000, () =>
      console.log("Test server running on port 5000")
    );
  });

  afterAll(done => {
    console.log("Gracefully stopping test server");
    api.close(done);
  });

  it("should return a list of all users", async () => {
    const res = await request(api).get('/users');
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(2);
    })

  it("should return data for a single user", async () => {
    const res = await request(api).get("/users/1");
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toEqual(4);
    // expect(res.body).toEqual({
    //   // user_id: 1,
    //   // email: "testUser1@email.com",
    //   // pass_digest: "password",
    //   // username: "test user 1",
    // });
  });

  // it("should return an error for a user that does not exist", async () => {
  //   const res = await request(api).get("/users/id");
  //   // expect(res.statusCode).toEqual(404);
  //   expect(res.body).toEqual(err);
  // });
});
