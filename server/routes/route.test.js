// Write your tests for task 2 in this file. Plan out what you need to import/require.

import request from "supertest";
import app from "../app.js";

test("API response is as expected", async function () {
  await request(app)
    .get("/users")
    .expect(400)
});

// test("API response is as expected", async function () {
//   await request(app)
//     .get("/users")
//     .expect(200)
//     .expect(function (res) {
//       const actual = res.body;
//       console.log(actual);
//       const expected = {
//         success: true,
//         payload: { id: expect.any(Number), username: expect.any(String) }
//       };
//       actual.payload.forEach((item) =>
//         expect(item).toStrictEqual(expected.payload)
//       );
//     });
// });

// test("API get request for a specific id", async function () {
//   await request(app)
//     .get("/users/4")
//     .expect(200)
//     .expect(function (res) {
//       const actual = res.body;
//       console.log(actual);
//       const expected = {
//         success: true,
//         payload: { id: expect.any(Number), username: expect.any(String) }
//       };
//       expect(actual).toStrictEqual(expected);
//     });
// });

// test("API get request for a specific id", async function () {
//   await request(app)
//     .get("/users/99")
//     .expect(404)
//     .expect(function (res) {
//       const actual = res.body;
//       console.log(actual);
//       const expected = {
//         success: false,
//         reason: "No user with ID 99 was found."
//       };
//       expect(actual).toStrictEqual(expected);
//     });
// });
