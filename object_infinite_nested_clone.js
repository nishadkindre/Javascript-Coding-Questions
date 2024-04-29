function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    // If the input is not an object or is null, return the input itself
    return obj;
  }

  // Create an empty object or array to store the cloned properties
  const clone = Array.isArray(obj) ? [] : {};

  // Iterate through each property of the object
  for (let key in obj) {
    // Recursively clone nested objects and arrays
    clone[key] = deepClone(obj[key]);
  }

  return clone;
}

// Example usage:
const originalObject = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
  hobbies: ["Reading", "Traveling"],
  education: {
    higher: {
      college: "MIT",
      CGPA: 8.4,
    },
    bachelors: {
      college: "Yale",
      CGPA: 7.3,
    },
  },
};

const clonedObject = deepClone(originalObject);
clonedObject.name = "Nishad";
clonedObject.address.city = "Las Vegas";
clonedObject.hobbies[1] = "Chess";
clonedObject.education.bachelors.college = "IIT";
clonedObject.education.bachelors.CGPA = 9.6;

console.log("Original: ", originalObject); // Output: Deep copy of originalObject
console.log("-".repeat(60));
console.log("Clone: ", clonedObject); // Output: Deep copy of originalObject
