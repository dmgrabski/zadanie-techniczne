const employee = [
    {
      personalInfo: {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        address: {
          city: 'Anytown',
          state: 'NY',
          postalCode: '12345',
        },
      },
    },
    {
      employmentDetails: {
        position: 'Software Engineer',
        department: 'Engineering',
        startDate: '2022-01-01',
        endDate: null,
        manager: {
          firstName: 'Alice',
          lastName: 'Smith',
          email: 'alice@example.com',
        },
      },
    },
  ];
  
  function getEmployeeInfo(employee, key) {
    function searchObject(obj, key) {
      if (obj.hasOwnProperty(key)) {
        return obj[key];
      }
      for (let prop in obj) {
        if (obj[prop] && typeof obj[prop] === 'object') {
          let result = searchObject(obj[prop], key);
          if (result !== undefined) {
            return result;
          }
        }
      }
      return undefined;
    }
  
    for (let obj of employee) {
      let result = searchObject(obj, key);
      if (result !== undefined) {
        return result;
      }
    }
    return "Klucz nie istnieje";
  }
  
  console.log(getEmployeeInfo(employee, "firstName")); // Powinno zwrócić: "John"
  console.log(getEmployeeInfo(employee, "lastName")); // Powinno zwrócić: "Doe"
  console.log(getEmployeeInfo(employee, "position")); // Powinno zwrócić: "Software Engineer"
  console.log(getEmployeeInfo(employee, "street")); // Powinno zwrócić: "Klucz nie istnieje"
  