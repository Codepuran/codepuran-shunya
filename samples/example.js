// Modern JavaScript example with async/await and ES6+ features
const fetchUserData = async (userId) => {
  try {
    // Simulated API call
    const response = await new Promise((resolve) =>
      setTimeout(
        () =>
          resolve({
            id: userId,
            name: "John Doe",
            email: "john@example.com",
          }),
        1000
      )
    );

    const { name, email } = response;
    return `User: ${name} (${email})`;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};

// Array methods and arrow functions
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
const sum = numbers.reduce((acc, curr) => acc + curr, 0);

// Example usage
console.log("Processing...");
fetchUserData(123).then(console.log);
