// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

// Write your unit tests here!
test("Return 'nonprofit' as value of key 'organization'.", function() {
expect(launchcode.organization).toBe("nonprofit");
});

// Write your unit tests here!
test("Return 'Jeff' as value of key 'executiveDirector'.", function() {
expect(launchcode.executiveDirector).toBe("Jeff");
});

// Write your unit tests here!
test("Return 'Jeff' as value of key 'executiveDirector'.", function() {
expect(launchcode.executiveDirector).toBe("Jeff");
});

// Write your unit tests here!
test("Return value of percentageCoolEmployees.", function() {
expect(launchcode.percentageCoolEmployees).toBe(100);
});

// Write your unit tests here!
test("Return the appropriate values in the array, and check the array size.", function() {
expect(launchcode.programsOffered[0]).toBe("Web Development");
expect(launchcode.programsOffered[1]).toBe("Data Analysis");
expect(launchcode.programsOffered[2]).toBe("Liftoff");
expect(launchcode.programsOffered.length).toBe(3);
});

// Write your unit tests here!
test("Returns 'Launch!' if only divisble by 2.", function() {
expect(launchcode.launchOutput(2)).toBe("Launch!");
});

// Write your unit tests here!
test("Returns 'Code!' if only divisble by 3.", function() {
expect(launchcode.launchOutput(3)).toBe("Code!");
});

// Write your unit tests here!
test("Returns 'Rocks!' if only divisble by 5.", function() {
expect(launchcode.launchOutput(5)).toBe("Rocks!");
});

// Write your unit tests here!
test("Returns 'LaunchCode!' if divisble by 2 AND 3.", function() {
expect(launchcode.launchOutput(6)).toBe("LaunchCode!");
});

// Write your unit tests here!
test("Returns 'Code Rocks!' if divisble by 3 AND 5.", function() {
expect(launchcode.launchOutput(15)).toBe("Code Rocks!");
});

// Write your unit tests here!
test("Returns 'Launch Rocks!' if divisble by 2 AND 5.", function() {
expect(launchcode.launchOutput(10)).toBe("Launch Rocks! (CRASH!!!!)");
});

// Write your unit tests here!
test("Returns 'LaunchCode Rocks!' if divisble by 2 3, AND 5.", function() {
expect(launchcode.launchOutput(30)).toBe("LaunchCode Rocks!");
});

// Write your unit tests here!
test("Returns 'LaunchCode Rocks!' if NOT divisble by 2 3, AND 5.", function() {
expect(launchcode.launchOutput(11)).toBe("Rutabagas! That doesn't work.");
});



});
