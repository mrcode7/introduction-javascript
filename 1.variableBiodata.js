// Buat variabel dengan nama biodata dan tipe data object dengan value dan tipe data

// Object
const biodata = {
  // String
  name: "John Doe",

  // Number
  age: 20,

  // Array
  hobbies: ["Playing Game", "Listening Music", "Watching Movie"],

  // Boolean
  isMarried: false,

  // Array of object
  schoolList: [
    {
      name: "SDN 1 Malang",

      yearIn: 2005,

      yearOut: 2011,

      major: null,
    },

    {
      name: "SMPN 1 Malang",

      yearIn: 2011,

      yearOut: 2014,

      major: null,
    },

    {
      name: "SMAN 1 Malang",

      yearIn: 2014,

      yearOut: 2017,

      major: "IPA",
    },
  ],

  skills: [
    {
      skillName: "HTML",

      level: "beginner",
    },

    {
      skillName: "CSS",

      level: "beginner",
    },

    {
      skillName: "Javascript",

      level: "beginner",
    },
  ],

  // Boolean
  interestInCoding: true,
};

// Cetak variabel biodata
console.log(biodata);
