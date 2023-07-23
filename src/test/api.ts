const assert = require("assert");
require("dotenv").config();
import { createUserPayload } from "../resource/userPayload";
import { endpoints } from "../service/endpoints";
import { GET, POST, PUT } from "../utils/apicalls";
import { addContextToReport } from "../utils/loggers";

describe("API Request Tests", async function () {
  let id;

  it("Should able to get user list", async function () {
    const response = await GET(
      process.env.BASE_API_URL + endpoints.GET_REQUEST
    );

    assert.equal(await response.status, 200);
    addContextToReport(this, "Response Code", response.status);
    const res = await response.data.data;

    const userEmailAndFname = res.map((data) => {
      return { email: data.email, first_name: data.first_name };
    });

    addContextToReport(this, "User Email and Firstname", userEmailAndFname);

    const filterUser = function (id: number, data: any) {
      // This one will take less time compare to other solutions
      for (const item of data) {
        if (item.id === id) {
          return item;
        }
      }
      throw new Error(`User with ID ${id} not found.`);

      // We can filter like this way also or we can use filter method
      /*
        const filteredData = data.find((item) => item.id === id); // it will return the value once found and break the function
        if (filteredData === undefined) {
          throw new Error(`User with ID ${id} not found.`);
        }
        return filteredData;
        */
    };

    const userId = 1;
    const userDetailsUsingId = filterUser(userId, res);
    addContextToReport(
      this,
      `User filtered by the ID number ${userId} `,
      userDetailsUsingId
    );
  });

  it("Should able to post user details", async function () {
    const userData = createUserPayload();

    const response = await POST(
      process.env.BASE_API_URL + endpoints.POST_REQUEST,
      userData
    );

    assert.equal(await response.status, 201);
    addContextToReport(this, "Response Code", response.status);
    const data = await response.data;
    assert.equal(data.id, userData.id);
    id = data.id;
    assert.equal(data.email, userData.email);
    assert.equal(data.first_name, userData.first_name);
    assert.equal(data.last_name, userData.last_name);
    assert.equal(data.avatar, userData.avatar);
    addContextToReport(this, "Created new user details", userData);
  });

  it("Should able to put user details", async function () {
    const { first_name, last_name, email } = createUserPayload();
    const userData = {
      first_name: first_name,
      last_name: last_name,
      email: email,
    };

    const response = await PUT(
      process.env.BASE_API_URL + endpoints.PUT_REQUEST,
      id,
      userData
    );

    assert.equal(await response.status, 200);
    addContextToReport(this, "Response Code", response.status);
    const data = await response.data;
    assert.equal(data.email, email);
    assert.equal(data.first_name, first_name);
    assert.equal(data.last_name, last_name);
    addContextToReport(this, "Updated user details", userData);
  });
});
