const profile = {
    firstname: "Saya",
    familyname: "Matsumoto",
    age: 20,
    major: "international culture",
    hobby: "movie",
    job: "student"
};

const keys = Object.keys(profile);

for (let i = 0; i < keys.length; i = i + 1) {
   const key = keys[i];
   const value = profile[key];
   const text = "私の" + key + "は、"　+ value + "です。";
   console.log(text); 
}

