import {login} from "../api/auth/login.js"
//import {logout} from "../api/auth/logout.js"
import {apiUrl} from "../api/constants.js"

//mock for global fetch using jest, replace native fetch with mock that always returns a resolved promise. 
globalThis.fetch = jest.fn(() => 
  Promise.resolve({
    ok: true, //indicates that response was sucsessfull
    json: () =>
      Promise.resolve({ accessToken: "fakeToken", otherData: "example" }),
  })
)
//create mock for localstorage with methods to getItem, setItem and removeItem
//These are jest.fn(), which allows tracking how they are called in the tests
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
};

// Replace the global localStorage object with the mock version created above
globalThis.localStorage  = localStorageMock;


// Simulate a logout function that deletes the token from localStorage
const performLogout = () => {
  localStorage.removeItem("token");
};

// Test suite
describe('login and performLogout functions', () => {
  // Test for storing token in localStorage
  it("should store token in browser storage", async () => {
    const email = "test@example.com";
    const password = "password";
    const profile = await login(email, password);

    expect(globalThis.fetch).toHaveBeenCalledWith(`${apiUrl}/social/auth/login`, {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      "token",
      JSON.stringify("fakeToken"),
    );

    expect(profile).toEqual({ otherData: "example" });
  });

  // Test for removing token from localStorage (logout)
  it("should remove token from browser storage on performLogout", () => {
    // Call the performLogout function
    performLogout();

    // Check if removeItem has been called with the correct key
    expect(localStorageMock.removeItem).toHaveBeenCalledWith("token");
  });
});