/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

/** Íslenskir samhljóðar */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === 'string';

// Prófum fallið
console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = ' ') {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
  if (isString(str)) {
    const words = split(str);
    var longest = "";
    for (const word of words) {
      if (word.length > longest.length) {
        longest = word;
      }
    }
    return longest;
  }
  return null;
}
console.assert(
  longest("halló heimur!") === "heimur!",
  "longest: finnur lengsta orð strengs"
);
console.assert(
  longest("skilar alltaf fyrsta") === "skilar",
  "longest: skilar fyrsta lengsta orðinu ef mörg orð eru lengst"
);
console.assert(
  longest("") === "",
  "longest: skilar tómum streng ef það fær tóman streng"
)
console.assert(
  longest(false) === null,
  "longest: ef ekki strengur, skila null"
)

function shortest(str) {
  if (isString(str)) {
    const words = split(str);
    var shortest = str;
    for (const word of words) {
      if (word.length < shortest.length) {
        shortest = word;
      }
    }
    return shortest;
  }
  return null;
}
console.assert(
  shortest("halló heimur!") === "halló",
  "shortest: finnur stysta orð strengs"
);
console.assert(
  shortest("skilar alltaf fyrsta") === "skilar",
  "shortest: skilar fyrsta stysta orðinu ef mörg orð eru styst"
);
console.assert(
  shortest("") === "",
  "shortest: skilar tómum streng ef það fær tóman streng"
)
console.assert(
  shortest(false) === null,
  "shortest: ef ekki strengur, skila null"
)

function reverse(str) {
  if (isString(str)) {
    const split = str.split("");
    const reversed = split. reverse();
  
    return reversed. join("");
  }
  return null;
}

console.assert(
  reverse("halló heimur") === "rumieh óllah",
  "reverse: snýr viõ einföldum streng"
);
console.assert(
  reverse(false) === null,
  "reverse: ef ekki strengur, skila null"
);
console.assert(
  reverse("") === "",
  "reverse: ef tómur strengur, skila tómum streng"
)

function palindrome(str) {
  if (isString(str) && str !== "") {
    const strengur = str.toLowerCase();
    const reversed = reverse(strengur);
    if (strengur == reversed) {
      return true;
    } 
    return false;
  }
  return false;
}
console.assert(
  palindrome("Halló óllaH") === true,
  "palindrome: skilar true ef strengur er samhverfur"
);
console.assert(
  palindrome("Halló Halló") === false,
  "palindrome: skilar false ef strengur er ekki samhverfur"
);
console.assert(
  palindrome("Halló óllah") === true,
  "palindrome: er sama um hástafi og lágstafi"
);
console.assert(
  palindrome(true) === false,
  "palindrome: ef ekki strengur, skila false"
);
console.assert(
  palindrome("") === false,
  "palindrome: ef tómur strengur, skila false"
);

function vowels(str) {
  if (isString(str) && str !== "") {
    const strengur = str.toLowerCase();
    const letters = split(strengur, "");
    var count = 0;
    for (const vowel of VOWELS) {
      for (const letter of letters) {
        if (vowel == letter) {
          count++
        }
      }
    }
    return count;
  }
  return 0;
}
console.assert(
  vowels("Halló Heimur") === 5,
  "vowels: skilar fjölda íslenska sérhljóða"
);
console.assert(
  vowels("HÆ hæ") === 2,
  "vowels: er sama um hástafi og lágstafi"
);
console.assert(
  vowels(true) === 0,
  "vowels: ef ekki strengur, skila 0"
);
console.assert(
  vowels("") === 0,
  "vowels: ef tómur strengur, skila 0"
);

function consonants(str) {
  if (isString(str) && str !== "") {
    const strengur = str.toLowerCase();
    const letters = split(strengur, "");
    var count = 0;
    for (const consonant of CONSONANTS) {
      for (const letter of letters) {
        if (consonant == letter) {
          count++
        }
      }
    }
    return count;
  }
  return 0;
}
console.assert(
  consonants("halló heimur") === 6,
  "consonants: skilar fjölda íslenska samhljóða"
);
console.assert(
  consonants("HÆ hæ") === 2,
  "consonants: er sama um hástafi og lágstafi"
);
console.assert(
  consonants(true) === 0,
  "consonants: ef ekki strengur, skila 0"
);
console.assert(
  consonants("") === 0,
  "consonants: ef tómur strengur, skila 0"
);

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  alert("Sláðu inn streng til að fá upplýsingar um: \n - Lengsta orð. \n - Stysta orð. \n - Strengurinn Snúinn við. \n - Fjölda sérhljóða í streng. \n - Fjölda samhljóða í streng. \n - Hvort strengurinn er samhverfur.");
  while(true) {
  const strengurinn = prompt("Sláðu inn streng með nokkrum orðum")
  if (strengurinn === null || strengurinn.trim().length === 0) {
    const reynaAftur = confirm("Viltu reyna aftur?")
    if (!reynaAftur) {
      break;
    }
    else {
      continue;
    }
  }
  
  alert(`Lengsta orðið er: ${longest(strengurinn)}
  Stysta orðið er: ${shortest(strengurinn)}
  Strengurinn snúinn við: ${reverse(strengurinn)}  
  Fjöldi sérhljóða í streng: ${vowels(strengurinn)}
  Fjöldi samhljóða í streng: ${consonants(strengurinn)}
  ${palindrome(strengurinn) ? "Strengurinn er samhverfur" : "Strengurinn er ekki samhverfur"}`);
  const haldaAfram = confirm("Viltu reyna aftur?")
    if (!haldaAfram) {
      break;
    }
    else {
      continue;
    }
  }
}
