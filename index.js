/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: https://github.com/andrewklmn/a-tiny-JS-world
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
const dog = {
  species: 'dog',
  name: 'Dyuka',
  gender: 'male',
  legs: 4,
  hands: 0,
  saying: 'woof!',
  friends: ['Leeloo', 'Korben' ],
};

const cat = {
  species: 'cat',
  name: 'Barsik',
  gender: 'male',
  legs: 4,
  hands: 0,
  saying: 'meow!',
  friends: ['Leeloo', 'Korben' ],
};

const woman = {
  species: 'woman',
  name: 'Leeloo Dallas',
  gender: 'female',
  legs: 2,
  hands: 2,
  saying: 'People hi!',
  friends: [ 'Korben', 'Dyuka', 'Barsik' ],
};

const man = {
  species: 'man',
  name: 'Korben Dallas',
  gender: 'male',
  legs: 2,
  hands: 2,
  saying: 'Hello there!',
  friends: [ 'Leeloo', 'Dyuka', 'Barsik' ],
};

const catWoman = Object.assign({}, woman);
catWoman.name = 'Cat-woman';
catWoman.saying = cat.saying;
catWoman.friends = ['Cat-man'];


const output = (obj)=> {
  return Object.entries(obj).map((a)=>{ 
      if (typeof(a[1]) == 'object') {
        return a[1].join(",");
      };
      return a[1];
  }).join(";");
};

// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */


  // ... other objects ...
  /*
    print(dog.species + ';' + dog.name + ';' + dog.gender + ';' + 
      dog.legs + ';' + dog.hands + ';' + dog.saying);
  */

  print(output(dog));
  print(output(cat));
  print(output(woman));
  print(output(man));
  print(output(catWoman));

  // ... other print-outs ...

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */


