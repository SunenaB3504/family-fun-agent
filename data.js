// Family members data
const familyMembers = [
    {
        id: 1,
        name: "Appuppan",
        birthDate: "January 26, 1936",
        birthDay: 26,
        birthMonth: 0, // 0-indexed (January is 0)
        birthYear: 1936,
        birthWeekday: "Sunday",
        zodiacSign: "Aquarius",
        season: "Winter",
        group: "Paternal",
        milestones: {
            collegeCompleted: {
                age: 22,
                year: 1958,
                description: "Completed college degree"
            },
            firstJob: {
                age: 23,
                year: 1959,
                description: "Started first job"
            },
            married: {
                age: 26,
                year: 1962,
                description: "Got married"
            },
            firstChild: {
                age: 28,
                year: 1964,
                description: "Had first child"
            },
            ownHouse: {
                age: 30,
                year: 1966,
                description: "Bought first house"
            },
            ownCar: {
                age: 34,
                year: 1970,
                description: "Bought first car"
            },
            retirement: {
                age: 60,
                year: 1996,
                description: "Retired from work"
            }
        }
    },
    {
        id: 2,
        name: "Ammumma",
        birthDate: "March 14, 1946",
        birthDay: 14,
        birthMonth: 2, // 0-indexed (March is 2)
        birthYear: 1946,
        birthWeekday: "Thursday",
        zodiacSign: "Pisces",
        season: "Spring",
        group: "Paternal",
        milestones: {
            collegeCompleted: {
                age: 23,
                year: 1969,
                description: "Completed college degree"
            },
            firstJob: {
                age: 23,
                year: 1969,
                description: "Started first job"
            },
            married: {
                age: 25,
                year: 1971,
                description: "Got married"
            },
            firstChild: {
                age: 29,
                year: 1975,
                description: "Had first child"
            },
            ownHouse: {
                age: 30,
                year: 1976,
                description: "Bought first house"
            },
            ownCar: {
                age: 32,
                year: 1978,
                description: "Bought first car"
            },
            retirement: {
                age: 60,
                year: 2006,
                description: "Retired from work"
            }
        }
    },
    {
        id: 3,
        name: "Ajiamma",
        birthDate: "May 4, 1975",
        birthDay: 4,
        birthMonth: 4, // 0-indexed (May is 4)
        birthYear: 1975,
        birthWeekday: "Sunday",
        zodiacSign: "Taurus",
        season: "Spring",
        group: "Paternal",
        milestones: {
            collegeCompleted: {
                age: 21,
                year: 1996,
                description: "Completed college degree"
            },
            firstJob: {
                age: 22,
                year: 1997,
                description: "Started first job"
            },
            married: {
                age: 26,
                year: 2001,
                description: "Got married"
            },
            firstChild: {
                age: 28,
                year: 2003,
                description: "Had first child"
            },
            ownHouse: {
                age: 30,
                year: 2005,
                description: "Bought first house"
            },
            ownCar: {
                age: 32,
                year: 2007,
                description: "Bought first car"
            }
        }
    },
    {
        id: 4,
        name: "Kochchan",
        birthDate: "May 11, 1979",
        birthDay: 11,
        birthMonth: 4, // 0-indexed (May is 4)
        birthYear: 1979,
        birthWeekday: "Friday",
        zodiacSign: "Taurus",
        season: "Spring",
        group: "Paternal",
        milestones: {
            collegeCompleted: {
                age: 22,
                year: 2001,
                description: "Completed college degree"
            },
            firstJob: {
                age: 23,
                year: 2002,
                description: "Started first job"
            },
            married: {
                age: 28,
                year: 2007,
                description: "Got married"
            },
            firstChild: {
                age: 30,
                year: 2009,
                description: "Had first child"
            },
            ownHouse: {
                age: 31,
                year: 2010,
                description: "Bought first house"
            },
            ownCar: {
                age: 29,
                year: 2008,
                description: "Bought first car"
            }
        }
    },
    {
        id: 5,
        name: "Achan",
        birthDate: "May 14, 1972",
        birthDay: 14,
        birthMonth: 4, // 0-indexed (May is 4)
        birthYear: 1972,
        birthWeekday: "Sunday",
        zodiacSign: "Taurus",
        season: "Spring",
        group: "Own",
        milestones: {
            collegeCompleted: {
                age: 22,
                year: 1994,
                description: "Completed college degree"
            },
            firstJob: {
                age: 23,
                year: 1995,
                description: "Started first job"
            },
            married: {
                age: 27,
                year: 1999,
                description: "Got married"
            },
            firstChild: {
                age: 30,
                year: 2002,
                description: "Had first child (Nandu)"
            },
            secondChild: {
                age: 36,
                year: 2008,
                description: "Had second child (Neelu)"
            },
            thirdChild: {
                age: 43,
                year: 2015,
                description: "Had third child (Nia)"
            },
            ownHouse: {
                age: 32,
                year: 2004,
                description: "Bought first house"
            },
            ownCar: {
                age: 28,
                year: 2000,
                description: "Bought first car"
            }
        }
    },
    {
        id: 6,
        name: "Amma",
        birthDate: "May 27, 1980",
        birthDay: 27,
        birthMonth: 4, // 0-indexed (May is 4)
        birthYear: 1980,
        birthWeekday: "Tuesday",
        zodiacSign: "Gemini",
        season: "Spring",
        group: "Own",
        milestones: {
            collegeCompleted: {
                age: 21,
                year: 2001,
                description: "Completed college degree"
            },
            firstJob: {
                age: 21,
                year: 2001,
                description: "Started first job"
            },
            married: {
                age: 19,
                year: 1999,
                description: "Got married"
            },
            firstChild: {
                age: 22,
                year: 2002,
                description: "Had first child (Nandu)"
            },
            secondChild: {
                age: 28,
                year: 2008,
                description: "Had second child (Neelu)"
            },
            thirdChild: {
                age: 35,
                year: 2015,
                description: "Had third child (Nia)"
            },
            ownHouse: {
                age: 24,
                year: 2004,
                description: "Bought first house"
            },
            ownCar: {
                age: 25,
                year: 2005,
                description: "Bought first car"
            }
        }
    },
    {
        id: 7,
        name: "Nandu",
        birthDate: "April 8, 2002",
        birthDay: 8,
        birthMonth: 3, // 0-indexed (April is 3)
        birthYear: 2002,
        birthWeekday: "Monday",
        zodiacSign: "Aries",
        season: "Spring",
        group: "Own",
        milestones: {
            birth: {
                months: 9,
                description: "Born after 9 months of pregnancy"
            },
            firstSteps: {
                months: 11,
                description: "Started walking at 11 months"
            },
            firstWords: {
                months: 12,
                description: "Said first word 'Amma' at 12 months"
            },
            weaning: {
                months: 6,
                description: "Started eating solid foods at 6 months"
            },
            pottyTraining: {
                months: 24,
                description: "Was potty trained at 2 years old"
            },
            shortSentences: {
                months: 20,
                description: "Started speaking in short sentences at 20 months"
            },
            readingWriting: {
                months: 72,
                description: "Started learning to read and write at 6 years"
            },
            socialInteraction: {
                months: 42,
                description: "Began cooperative play at 3.5 years"
            },
            rightWrong: {
                months: 30,
                description: "Developed sense of right and wrong at 2.5 years"
            },
            school: {
                months: 36,
                description: "Started preschool at 3 years"
            }
        }
    },
    {
        id: 8,
        name: "Neelu",
        birthDate: "March 19, 2008",
        birthDay: 19,
        birthMonth: 2, // 0-indexed (March is 2)
        birthYear: 2008,
        birthWeekday: "Wednesday",
        zodiacSign: "Pisces",
        season: "Spring",
        group: "Own",
        milestones: {
            birth: {
                months: 9,
                description: "Born after 9 months of pregnancy"
            },
            firstSteps: {
                months: 13,
                description: "Started walking at 13 months"
            },
            firstWords: {
                months: 11,
                description: "Said first word 'Papa' at 11 months"
            },
            weaning: {
                months: 6,
                description: "Started eating solid foods at 6 months"
            },
            pottyTraining: {
                months: 28,
                description: "Was potty trained at 28 months"
            },
            shortSentences: {
                months: 21,
                description: "Started speaking in short sentences at 21 months"
            },
            readingWriting: {
                months: 66,
                description: "Started learning to read and write at 5.5 years"
            },
            socialInteraction: {
                months: 38,
                description: "Began cooperative play at 38 months"
            },
            rightWrong: {
                months: 26,
                description: "Developed sense of right and wrong at 26 months"
            },
            school: {
                months: 40,
                description: "Started preschool at 3 years and 4 months"
            }
        }
    },
    {
        id: 9,
        name: "Varun",
        birthDate: "January 30, 1987",
        birthDay: 30,
        birthMonth: 0, // 0-indexed (January is 0)
        birthYear: 1987,
        birthWeekday: "Friday",
        zodiacSign: "Aquarius",
        season: "Winter",
        group: "Maternal",
        milestones: {
            collegeCompleted: {
                age: 23,
                year: 2010,
                description: "Completed college degree"
            },
            firstJob: {
                age: 24,
                year: 2011,
                description: "Started first job"
            },
            married: {
                age: 28,
                year: 2015,
                description: "Got married"
            },
            firstChild: {
                age: 30,
                year: 2017,
                description: "Had first child"
            },
            ownHouse: {
                age: 32,
                year: 2019,
                description: "Bought first house"
            },
            ownCar: {
                age: 27,
                year: 2014,
                description: "Bought first car"
            }
        }
    },
    {
        id: 10,
        name: "Mema",
        birthDate: "August 18, 1953",
        birthDay: 18,
        birthMonth: 7, // 0-indexed (August is 7)
        birthYear: 1953,
        birthWeekday: "Tuesday",
        zodiacSign: "Leo",
        season: "Summer",
        group: "Maternal",
        milestones: {
            collegeCompleted: {
                age: 22,
                year: 1975,
                description: "Completed college degree"
            },
            firstJob: {
                age: 22,
                year: 1975,
                description: "Started first job"
            },
            married: {
                age: 25,
                year: 1978,
                description: "Got married"
            },
            firstChild: {
                age: 27,
                year: 1980,
                description: "Had first child"
            },
            ownHouse: {
                age: 29,
                year: 1982,
                description: "Bought first house"
            },
            ownCar: {
                age: 30,
                year: 1983,
                description: "Bought first car"
            },
            retirement: {
                age: 60,
                year: 2013,
                description: "Retired from work"
            }
        }
    },
    {
        id: 11,
        name: "Appa",
        birthDate: "February 2, 1945",
        birthDay: 2,
        birthMonth: 1, // 0-indexed (February is 1)
        birthYear: 1945,
        birthWeekday: "Friday",
        zodiacSign: "Aquarius",
        season: "Winter",
        group: "Maternal",
        milestones: {
            collegeCompleted: {
                age: 23,
                year: 1968,
                description: "Completed college degree"
            },
            firstJob: {
                age: 23,
                year: 1968,
                description: "Started first job"
            },
            married: {
                age: 26,
                year: 1971,
                description: "Got married"
            },
            firstChild: {
                age: 28,
                year: 1973,
                description: "Had first child"
            },
            ownHouse: {
                age: 30,
                year: 1975,
                description: "Bought first house"
            },
            ownCar: {
                age: 32,
                year: 1977,
                description: "Bought first car"
            },
            retirement: {
                age: 60,
                year: 2005,
                description: "Retired from work"
            }
        }
    },
    {
        id: 12,
        name: "Nia",
        birthDate: "November 27, 2015",
        birthDay: 27,
        birthMonth: 10, // 0-indexed (November is 10)
        birthYear: 2015,
        birthWeekday: "Friday",
        zodiacSign: "Sagittarius",
        season: "Fall",
        group: "Own",
        milestones: {
            birth: {
                months: 9,
                description: "Born after 9 months of pregnancy"
            },
            firstSteps: {
                months: 14,
                description: "Started walking at 14 months"
            },
            firstWords: {
                months: 13,
                description: "Said first word 'Dada' at 13 months"
            },
            weaning: {
                months: 7,
                description: "Started eating solid foods at 7 months"
            },
            pottyTraining: {
                months: 30,
                description: "Was potty trained at 2.5 years"
            },
            shortSentences: {
                months: 22,
                description: "Started speaking in short sentences at 22 months"
            },
            readingWriting: {
                months: 70,
                description: "Started learning to read and write at almost 6 years"
            },
            socialInteraction: {
                months: 40,
                description: "Began cooperative play at 40 months"
            },
            rightWrong: {
                months: 28,
                description: "Developed sense of right and wrong at 28 months"
            },
            school: {
                months: 42,
                description: "Started preschool at 3.5 years"
            }
        }
    }
];

// Question types and templates
const questionTypes = {
    weekdayRelated: (person) => {
        const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const daysOffset = Math.floor(Math.random() * 6) + 1; // 1-6 days
        const birthWeekdayIndex = weekdays.indexOf(person.birthWeekday);
        const newWeekdayIndex = (birthWeekdayIndex + daysOffset) % 7;
        const correctAnswer = weekdays[newWeekdayIndex];
        
        // Generate wrong answers (different weekdays)
        const wrongAnswers = weekdays.filter(day => day !== correctAnswer);
        const shuffledWrongAnswers = shuffleArray(wrongAnswers).slice(0, 3);
        
        return {
            question: `If ${person.name} was born on a ${person.birthWeekday}, what day of the week was it ${daysOffset} days later?`,
            answers: shuffleArray([correctAnswer, ...shuffledWrongAnswers]),
            correctAnswer: correctAnswer
        };
    },
    
    monthRelated: (person) => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const monthOffset = Math.floor(Math.random() * 5) + 1; // 1-5 months
        const birthMonthIndex = person.birthMonth;
        const newMonthIndex = (birthMonthIndex + monthOffset) % 12;
        const correctAnswer = months[newMonthIndex];
        
        // Generate wrong answers (different months)
        const wrongAnswers = months.filter(month => month !== correctAnswer);
        const shuffledWrongAnswers = shuffleArray(wrongAnswers).slice(0, 3);
        
        return {
            question: `The doctor suggested ${person.name} should get a checkup ${monthOffset} months after their birth in ${months[birthMonthIndex]}. Which month was that?`,
            answers: shuffleArray([correctAnswer, ...shuffledWrongAnswers]),
            correctAnswer: correctAnswer
        };
    },
    
    zodiacRelated: (person) => {
        const zodiacSigns = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
        const correctAnswer = person.zodiacSign;
        
        // Generate wrong answers (different zodiac signs)
        const wrongAnswers = zodiacSigns.filter(sign => sign !== correctAnswer);
        const shuffledWrongAnswers = shuffleArray(wrongAnswers).slice(0, 3);
        
        return {
            question: `What zodiac sign is ${person.name} born under?`,
            answers: shuffleArray([correctAnswer, ...shuffledWrongAnswers]),
            correctAnswer: correctAnswer
        };
    },
    
    seasonRelated: (person) => {
        const seasons = ["Spring", "Summer", "Fall", "Winter"];
        const correctAnswer = person.season;
        
        // All other seasons as wrong answers
        const wrongAnswers = seasons.filter(season => season !== correctAnswer);
        
        return {
            question: `In which season was ${person.name} born?`,
            answers: shuffleArray([correctAnswer, ...wrongAnswers]),
            correctAnswer: correctAnswer
        };
    },
    
    arithmeticAddition: (person) => {
        const num1 = Math.floor(Math.random() * 5) + 1; // 1-5
        const num2 = Math.floor(Math.random() * 5) + 1; // 1-5
        const correctAnswer = num1 + num2;
        
        // Generate wrong answers (different sums)
        const wrongAnswers = [correctAnswer - 1, correctAnswer + 1, correctAnswer + 2].filter(num => num > 0);
        
        return {
            question: `If ${person.name} got ${num1} gifts from Mom and ${num2} gifts from Dad on their birthday, how many gifts did they get in total?`,
            answers: shuffleArray([correctAnswer.toString(), ...wrongAnswers.map(String)]),
            correctAnswer: correctAnswer.toString()
        };
    },
    
    arithmeticSubtraction: (person) => {
        const num1 = Math.floor(Math.random() * 5) + 6; // 6-10
        const num2 = Math.floor(Math.random() * 5) + 1; // 1-5
        const correctAnswer = num1 - num2;
        
        // Generate wrong answers (different differences)
        const wrongAnswers = [correctAnswer - 1, correctAnswer + 1, correctAnswer + 2].filter(num => num > 0);
        
        return {
            question: `${person.name} had ${num1} candies and gave ${num2} to their friend. How many candies did ${person.name} have left?`,
            answers: shuffleArray([correctAnswer.toString(), ...wrongAnswers.map(String)]),
            correctAnswer: correctAnswer.toString()
        };
    },
    
    daysInMonth: (person) => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        const randomMonthIndex = Math.floor(Math.random() * 12);
        const correctAnswer = daysInMonth[randomMonthIndex];
        
        // Generate wrong answers (different number of days)
        const possibleDays = [28, 29, 30, 31];
        const wrongAnswers = possibleDays.filter(days => days !== correctAnswer);
        const shuffledWrongAnswers = shuffleArray(wrongAnswers).slice(0, 3);
        
        return {
            question: `How many days are there in ${months[randomMonthIndex]}?`,
            answers: shuffleArray([correctAnswer.toString(), ...shuffledWrongAnswers.map(String)]),
            correctAnswer: correctAnswer.toString()
        };
    },
    
    // New question types
    
    // Spelling questions
    spellingMonths: (person) => {
        const months = ["January", "February", "March", "April", "May", "June", 
                       "July", "August", "September", "October", "November", "December"];
        const randomMonth = months[Math.floor(Math.random() * months.length)];
        
        // Generate misspelled versions as wrong answers
        const wrongAnswers = [];
        
        // Common misspellings for months
        const misspellings = {
            "January": ["Januery", "Januwary", "Januarey"],
            "February": ["Febuary", "Feburary", "Februry"],
            "March": ["Murch", "Marche", "Martch"],
            "April": ["Aprill", "Aprel", "Appril"],
            "May": ["Mai", "Mey", "Maye"],
            "June": ["Joon", "Jun", "Junn"],
            "July": ["Juley", "Jully", "Juuly"],
            "August": ["Augst", "Aguust", "Augest"],
            "September": ["Septmber", "Septtember", "Septembur"],
            "October": ["Octobur", "Ocktober", "Octuber"],
            "November": ["Novembur", "Novvember", "Novmber"],
            "December": ["Desember", "Decmber", "Decembur"]
        };
        
        if (misspellings[randomMonth]) {
            wrongAnswers.push(...misspellings[randomMonth]);
        } else {
            // If specific misspellings aren't defined, generate them
            let wrongAnswer1 = randomMonth.substring(0, randomMonth.length - 1) + 'e';
            let wrongAnswer2 = randomMonth.replace('e', 'u');
            let wrongAnswer3 = randomMonth.replace('a', 'e');
            
            wrongAnswers.push(wrongAnswer1, wrongAnswer2, wrongAnswer3);
        }
        
        return {
            question: `Which is the correct spelling of the month when ${person.name} was born?`,
            answers: shuffleArray([randomMonth, ...wrongAnswers.slice(0, 3)]),
            correctAnswer: randomMonth
        };
    },
    
    spellingWeekdays: (person) => {
        const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const randomWeekday = weekdays[Math.floor(Math.random() * weekdays.length)];
        
        // Generate misspelled versions as wrong answers
        const misspellings = {
            "Sunday": ["Sonday", "Sundy", "Sundey"],
            "Monday": ["Munday", "Mondy", "Mondey"],
            "Tuesday": ["Tusday", "Teusday", "Tuseday"],
            "Wednesday": ["Wensday", "Wenesday", "Wednesdey"],
            "Thursday": ["Thersday", "Thurday", "Thursdey"],
            "Friday": ["Fryday", "Friedy", "Fridey"],
            "Saturday": ["Saterday", "Satruday", "Saterdy"]
        };
        
        const wrongAnswers = misspellings[randomWeekday] || [
            randomWeekday.replace('a', 'e'),
            randomWeekday.replace('e', 'a'),
            randomWeekday.substring(0, randomWeekday.length - 1) + 'ey'
        ];
        
        return {
            question: `Which is the correct spelling of the day of the week?`,
            answers: shuffleArray([randomWeekday, ...wrongAnswers]),
            correctAnswer: randomWeekday
        };
    },
    
    spellingZodiac: (person) => {
        const zodiacSigns = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", 
                           "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
        const randomSign = zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
        
        // Generate misspelled versions as wrong answers
        const misspellings = {
            "Aries": ["Ares", "Ariez", "Areis"],
            "Taurus": ["Tauros", "Tauruss", "Torrus"],
            "Gemini": ["Gemeni", "Jemini", "Geminee"],
            "Cancer": ["Cancur", "Canser", "Kancer"],
            "Leo": ["Leeo", "Lio", "Leoh"],
            "Virgo": ["Virgo", "Vergo", "Virgo"],
            "Libra": ["Leebra", "Libruh", "Lybra"],
            "Scorpio": ["Scorpeo", "Scorpeeo", "Scorpyo"],
            "Sagittarius": ["Sagitarius", "Sagitarius", "Sagiterius"],
            "Capricorn": ["Capricorne", "Capricornn", "Caprecorn"],
            "Aquarius": ["Aquaris", "Aquarious", "Aquariuss"],
            "Pisces": ["Pisses", "Piscees", "Pisec"]
        };
        
        const wrongAnswers = misspellings[randomSign] || [
            randomSign.replace('a', 'e'),
            randomSign.replace('i', 'y'),
            randomSign + 's'
        ];
        
        // Get descriptions to use instead of the sign name
        const zodiacDescriptions = {
            "Aries": "the ram zodiac sign (March 21 - April 19)",
            "Taurus": "the bull zodiac sign (April 20 - May 20)",
            "Gemini": "the twins zodiac sign (May 21 - June 20)",
            "Cancer": "the crab zodiac sign (June 21 - July 22)",
            "Leo": "the lion zodiac sign (July 23 - August 22)",
            "Virgo": "the virgin zodiac sign (August 23 - September 22)",
            "Libra": "the scales zodiac sign (September 23 - October 22)",
            "Scorpio": "the scorpion zodiac sign (October 23 - November 21)",
            "Sagittarius": "the archer zodiac sign (November 22 - December 21)",
            "Capricorn": "the goat zodiac sign (December 22 - January 19)",
            "Aquarius": "the water bearer zodiac sign (January 20 - February 18)",
            "Pisces": "the fish zodiac sign (February 19 - March 20)"
        };
        
        return {
            question: `Which is the correct spelling of ${zodiacDescriptions[randomSign]}?`,
            answers: shuffleArray([randomSign, ...wrongAnswers]),
            correctAnswer: randomSign
        };
    },
    
    // Sequence questions
    monthSequence: (person) => {
        const months = ["January", "February", "March", "April", "May", "June", 
                       "July", "August", "September", "October", "November", "December"];
        
        // Choose a random starting month and sequence length
        const startIndex = Math.floor(Math.random() * 9); // Allows up to 3 months in sequence
        const sequenceLength = Math.floor(Math.random() * 2) + 2; // 2 or 3 months in sequence
        
        const sequence = [];
        for (let i = 0; i < sequenceLength; i++) {
            sequence.push(months[(startIndex + i) % 12]);
        }
        
        // Create options for the next month in sequence
        const correctAnswer = months[(startIndex + sequenceLength) % 12];
        
        // Generate wrong answers (different months)
        const wrongAnswers = months.filter(month => month !== correctAnswer);
        const shuffledWrongAnswers = shuffleArray(wrongAnswers).slice(0, 3);
        
        return {
            question: `What month comes next in this sequence: ${sequence.join(", ")}...?`,
            answers: shuffleArray([correctAnswer, ...shuffledWrongAnswers]),
            correctAnswer: correctAnswer
        };
    },
    
    weekdaySequence: (person) => {
        const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        
        // Choose a random starting weekday and sequence length
        const startIndex = Math.floor(Math.random() * 5); // Allows up to 3 days in sequence
        const sequenceLength = Math.floor(Math.random() * 2) + 2; // 2 or 3 days in sequence
        
        const sequence = [];
        for (let i = 0; i < sequenceLength; i++) {
            sequence.push(weekdays[(startIndex + i) % 7]);
        }
        
        // Create options for the next day in sequence
        const correctAnswer = weekdays[(startIndex + sequenceLength) % 7];
        
        // Generate wrong answers (different days)
        const wrongAnswers = weekdays.filter(day => day !== correctAnswer);
        const shuffledWrongAnswers = shuffleArray(wrongAnswers).slice(0, 3);
        
        return {
            question: `What day comes next in this sequence: ${sequence.join(", ")}...?`,
            answers: shuffleArray([correctAnswer, ...shuffledWrongAnswers]),
            correctAnswer: correctAnswer
        };
    },
    
    seasonSequence: (person) => {
        const seasons = ["Spring", "Summer", "Fall", "Winter"];
        
        // Choose a random starting season and display all but the last one
        const startIndex = Math.floor(Math.random() * 4);
        
        const sequence = [];
        for (let i = 0; i < 3; i++) {
            sequence.push(seasons[(startIndex + i) % 4]);
        }
        
        // Create options for the next season in sequence
        const correctAnswer = seasons[(startIndex + 3) % 4];
        
        return {
            question: `What season comes next in this sequence: ${sequence.join(", ")}...?`,
            answers: shuffleArray([correctAnswer, ...seasons.filter(s => s !== correctAnswer)]),
            correctAnswer: correctAnswer
        };
    },
    
    numberSequence: (person) => {
        // Generate different types of simple sequences
        const sequenceTypes = [
            // Counting up by 1
            () => {
                const start = Math.floor(Math.random() * 5) + 1; // 1-5
                return {
                    sequence: [start, start + 1, start + 2],
                    next: start + 3,
                    pattern: "counting up by 1"
                };
            },
            // Counting up by 2
            () => {
                const start = Math.floor(Math.random() * 5) + 1; // 1-5
                return {
                    sequence: [start, start + 2, start + 4],
                    next: start + 6,
                    pattern: "counting up by 2"
                };
            },
            // Counting down by 1
            () => {
                const start = Math.floor(Math.random() * 5) + 6; // 6-10
                return {
                    sequence: [start, start - 1, start - 2],
                    next: start - 3,
                    pattern: "counting down by 1"
                };
            }
        ];
        
        // Choose random sequence type
        const sequenceGenerator = sequenceTypes[Math.floor(Math.random() * sequenceTypes.length)];
        const { sequence, next, pattern } = sequenceGenerator();
        
        // Generate wrong answers (off by 1 or 2)
        const wrongAnswers = [next - 1, next + 1, next + 2].filter(num => !sequence.includes(num));
        
        return {
            question: `What number comes next in this sequence: ${sequence.join(", ")}...?`,
            answers: shuffleArray([next.toString(), ...wrongAnswers.map(String)]),
            correctAnswer: next.toString()
        };
    },
    
    // Multiplication questions (simplified for beginners)
    multiplicationSimple: (person) => {
        // Use small numbers for easier multiplication
        const num1 = Math.floor(Math.random() * 5) + 1; // 1-5
        const num2 = Math.floor(Math.random() * 3) + 1; // 1-3
        const correctAnswer = num1 * num2;
        
        // Generate wrong answers (plausible mistakes)
        const wrongAnswers = [
            num1 + num2, // Addition instead of multiplication
            Math.abs(num1 - num2), // Subtraction instead of multiplication
            correctAnswer + 1, // Off by one
            correctAnswer - 1 // Off by one
        ].filter(ans => ans !== correctAnswer && ans > 0);
        
        return {
            question: `If ${person.name} has ${num1} basket${num1 > 1 ? 's' : ''} with ${num2} toy${num2 > 1 ? 's' : ''} in each, how many toys does ${person.name} have in total?`,
            answers: shuffleArray([correctAnswer.toString(), ...shuffleArray(wrongAnswers).slice(0, 3).map(String)]),
            correctAnswer: correctAnswer.toString()
        };
    },
    
    // Division questions (simplified for beginners)
    divisionSimple: (person) => {
        // For simple division, create problems with no remainder
        const divisor = Math.floor(Math.random() * 3) + 2; // 2-4
        const correctAnswer = Math.floor(Math.random() * 3) + 1; // 1-3
        const dividend = divisor * correctAnswer;
        
        // Generate wrong answers (plausible mistakes)
        const wrongAnswers = [
            dividend + divisor, // Addition instead of division
            Math.max(1, dividend - divisor), // Subtraction instead of division
            correctAnswer + 1, // Off by one
            Math.max(1, correctAnswer - 1) // Off by one, minimum 1
        ].filter(ans => ans !== correctAnswer);
        
        return {
            question: `${person.name} has ${dividend} cookies to share equally among ${divisor} friends. How many cookies will each friend get?`,
            answers: shuffleArray([correctAnswer.toString(), ...shuffleArray(wrongAnswers).slice(0, 3).map(String)]),
            correctAnswer: correctAnswer.toString()
        };
    },
    
    // Enhanced subtraction with visuals described
    subtractionVisual: (person) => {
        // Create subtraction problems in the 1-10 range for beginners
        const num1 = Math.floor(Math.random() * 5) + 6; // 6-10
        const num2 = Math.floor(Math.random() * 5) + 1; // 1-5
        const correctAnswer = num1 - num2;
        
        // Generate wrong answers (plausible mistakes)
        const wrongAnswers = [
            num1 + num2, // Addition instead of subtraction
            num2 - num1, // Reversed subtraction
            correctAnswer + 1, // Off by one
            correctAnswer - 1 // Off by one
        ].filter(ans => ans !== correctAnswer && ans > 0);
        
        const visualDescription = `Imagine ${num1} ${getRandomItem()}${num1 > 1 ? 's' : ''}, then ${num2} ${getRandomItem()}${num2 > 1 ? 's' : ''} are taken away.`;
        
        return {
            question: `${visualDescription} How many remain? (${num1} - ${num2} = ?)`,
            answers: shuffleArray([correctAnswer.toString(), ...shuffleArray(wrongAnswers).slice(0, 3).map(String)]),
            correctAnswer: correctAnswer.toString()
        };
    },
    
    // Help with understanding passage of time
    timePassage: (person) => {
        // Generate a random start hour
        const startHour = Math.floor(Math.random() * 12) + 1; // 1-12
        
        // Hours to pass (1-3)
        const hoursToPass = Math.floor(Math.random() * 3) + 1;
        
        // Calculate end hour (handling 12-hour clock wraparound)
        const endHour = ((startHour + hoursToPass - 1) % 12) + 1;
        
        // Generate wrong answers (off by 1 or 2 hours)
        const wrongAnswers = [
            ((endHour) % 12) + 1,
            ((endHour + 1) % 12) + 1,
            ((endHour + 2) % 12) + 1
        ];
        
        return {
            question: `If ${person.name}'s class starts at ${startHour} o'clock and lasts ${hoursToPass} hour${hoursToPass > 1 ? 's' : ''}, what time will it be when class ends?`,
            answers: shuffleArray([`${endHour} o'clock`, ...wrongAnswers.map(h => `${h} o'clock`)]),
            correctAnswer: `${endHour} o'clock`
        };
    },
    
    // Help with understanding addition with time
    calendarAddition: (person) => {
        const months = ["January", "February", "March", "April", "May", "June", 
                       "July", "August", "September", "October", "November", "December"];
                       
        // Choose a random start month
        const startMonthIndex = Math.floor(Math.random() * 12);
        const startMonth = months[startMonthIndex];
        
        // Months to add (1-3)
        const monthsToAdd = Math.floor(Math.random() * 3) + 1;
        
        // Calculate end month
        const endMonthIndex = (startMonthIndex + monthsToAdd) % 12;
        const endMonth = months[endMonthIndex];
        
        // Generate wrong answers (off by 1 or 2 months)
        const wrongAnswers = [
            months[(endMonthIndex + 1) % 12],
            months[(endMonthIndex + 2) % 12],
            months[(endMonthIndex - 1 + 12) % 12]
        ];
        
        return {
            question: `If ${person.name}'s birthday is in ${startMonth} and we need to plan a party ${monthsToAdd} month${monthsToAdd > 1 ? 's' : ''} later, in which month will the party be?`,
            answers: shuffleArray([endMonth, ...wrongAnswers]),
            correctAnswer: endMonth
        };
    },
    
    // Milestone milestones (keeping existing content)
    milestoneAge: (person) => {
        if (!person.milestones) return generateFallbackQuestion(person);
        
        // Get random milestone
        const milestoneKeys = Object.keys(person.milestones);
        const randomMilestoneKey = milestoneKeys[Math.floor(Math.random() * milestoneKeys.length)];
        const milestone = person.milestones[randomMilestoneKey];
        
        // Format the milestone age in years and months for display
        let ageDisplay = '';
        if (milestone.months < 12) {
            ageDisplay = `${milestone.months} months`;
        } else if (milestone.months === 12) {
            ageDisplay = `1 year`;
        } else {
            const years = Math.floor(milestone.months / 12);
            const remainingMonths = milestone.months % 12;
            ageDisplay = `${years} year${years > 1 ? 's' : ''}${remainingMonths > 0 ? ` and ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}` : ''}`;
        }
        
        // Get milestone description with a more friendly name
        const milestoneFriendlyNames = {
            birth: "birth",
            firstSteps: "first steps",
            firstWords: "first words",
            weaning: "starting solid foods",
            pottyTraining: "potty training",
            shortSentences: "speaking in short sentences",
            readingWriting: "learning to read and write",
            socialInteraction: "engaging in cooperative play",
            rightWrong: "understanding right from wrong",
            school: "starting preschool/kindergarten"
        };
        
        const friendlyName = milestoneFriendlyNames[randomMilestoneKey] || randomMilestoneKey;
        
        // Generate wrong ages (within reasonable range)
        let wrongAges = [];
        const minAge = Math.max(1, milestone.months - 6);
        const maxAge = milestone.months + 6;
        
        while (wrongAges.length < 3) {
            const wrongAge = Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;
            if (wrongAge !== milestone.months && !wrongAges.includes(wrongAge)) {
                wrongAges.push(wrongAge);
            }
        }
        
        // Format wrong ages for display
        const formattedWrongAges = wrongAges.map(months => {
            if (months < 12) {
                return `${months} months`;
            } else if (months === 12) {
                return `1 year`;
            } else {
                const years = Math.floor(months / 12);
                const remainingMonths = months % 12;
                return `${years} year${years > 1 ? 's' : ''}${remainingMonths > 0 ? ` and ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}` : ''}`;
            }
        });
        
        return {
            question: `At what age did ${person.name} reach the milestone of ${friendlyName}?`,
            answers: shuffleArray([ageDisplay, ...formattedWrongAges]),
            correctAnswer: ageDisplay
        };
    },
    
    milestoneCause: (person) => {
        if (!person.milestones) return generateFallbackQuestion(person);
        
        // Standard milestone pattern questions
        const milestonePatterns = [
            {
                question: `If ${person.name} said their first words at AGE, around what age would they typically start speaking in short sentences?`,
                firstMilestone: 'firstWords',
                secondMilestone: 'shortSentences',
                typicalGap: [7, 10] // typical gap in months
            },
            {
                question: `If ${person.name} started walking at AGE, around what age would they typically start cooperative play with other children?`,
                firstMilestone: 'firstSteps',
                secondMilestone: 'socialInteraction',
                typicalGap: [24, 42] // typical gap in months
            },
            {
                question: `If ${person.name} began solid foods at AGE, around what age would they typically be potty trained?`,
                firstMilestone: 'weaning',
                secondMilestone: 'pottyTraining',
                typicalGap: [18, 36] // typical gap in months
            }
        ];
        
        // Select a random milestone pattern
        const pattern = milestonePatterns[Math.floor(Math.random() * milestonePatterns.length)];
        
        // Make sure both milestones exist for this person
        if (!person.milestones[pattern.firstMilestone] || !person.milestones[pattern.secondMilestone]) {
            return generateFallbackQuestion(person);
        }
        
        const firstMilestoneAge = person.milestones[pattern.firstMilestone].months;
        const secondMilestoneAge = person.milestones[pattern.secondMilestone].months;
        
        // Format the first milestone age
        let firstAgeDisplay = '';
        if (firstMilestoneAge < 12) {
            firstAgeDisplay = `${firstMilestoneAge} months`;
        } else if (firstMilestoneAge === 12) {
            firstAgeDisplay = `1 year`;
        } else {
            const years = Math.floor(firstMilestoneAge / 12);
            const remainingMonths = firstMilestoneAge % 12;
            firstAgeDisplay = `${years} year${years > 1 ? 's' : ''}${remainingMonths > 0 ? ` and ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}` : ''}`;
        }
        
        // Format the second milestone age (correct answer)
        let secondAgeDisplay = '';
        if (secondMilestoneAge < 12) {
            secondAgeDisplay = `${secondMilestoneAge} months`;
        } else if (secondMilestoneAge === 12) {
            secondAgeDisplay = `1 year`;
        } else {
            const years = Math.floor(secondMilestoneAge / 12);
            const remainingMonths = secondMilestoneAge % 12;
            secondAgeDisplay = `${years} year${years > 1 ? 's' : ''}${remainingMonths > 0 ? ` and ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}` : ''}`;
        }
        
        // Generate wrong ages
        let wrongAges = [];
        const minAge = Math.max(firstMilestoneAge + pattern.typicalGap[0] - 3, firstMilestoneAge + 1);
        const maxAge = firstMilestoneAge + pattern.typicalGap[1] + 3;
        
        while (wrongAges.length < 3) {
            const wrongAge = Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;
            if (wrongAge !== secondMilestoneAge && !wrongAges.includes(wrongAge)) {
                wrongAges.push(wrongAge);
            }
        }
        
        // Format wrong ages
        const formattedWrongAges = wrongAges.map(months => {
            if (months < 12) {
                return `${months} months`;
            } else if (months === 12) {
                return `1 year`;
            } else {
                const years = Math.floor(months / 12);
                const remainingMonths = months % 12;
                return `${years} year${years > 1 ? 's' : ''}${remainingMonths > 0 ? ` and ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}` : ''}`;
            }
        });
        
        const questionText = pattern.question.replace('AGE', firstAgeDisplay);
        
        return {
            question: questionText,
            answers: shuffleArray([secondAgeDisplay, ...formattedWrongAges]),
            correctAnswer: secondAgeDisplay
        };
    },
    
    milestoneSequence: (person) => {
        if (!person.milestones) return generateFallbackQuestion(person);
        
        // Define milestone pairs for sequencing questions
        const milestonePairs = [
            { first: 'weaning', second: 'firstWords', name1: 'eating solid foods', name2: 'saying first words' },
            { first: 'firstWords', second: 'firstSteps', name1: 'saying first words', name2: 'taking first steps' },
            { first: 'firstSteps', second: 'shortSentences', name1: 'taking first steps', name2: 'speaking in short sentences' },
            { first: 'shortSentences', second: 'rightWrong', name1: 'speaking in short sentences', name2: 'understanding right from wrong' },
            { first: 'rightWrong', second: 'pottyTraining', name1: 'understanding right from wrong', name2: 'being potty trained' },
            { first: 'pottyTraining', second: 'school', name1: 'being potty trained', name2: 'starting preschool' },
            { first: 'socialInteraction', second: 'readingWriting', name1: 'engaging in cooperative play', name2: 'learning to read and write' }
        ];
        
        // Filter pairs where both milestones exist for this person
        const validPairs = milestonePairs.filter(pair => 
            person.milestones[pair.first] && person.milestones[pair.second]
        );
        
        if (validPairs.length === 0) {
            return generateFallbackQuestion(person);
        }
        
        // Select a random valid pair
        const selectedPair = validPairs[Math.floor(Math.random() * validPairs.length)];
        
        // Get the correct order
        const firstMilestone = person.milestones[selectedPair.first];
        const secondMilestone = person.milestones[selectedPair.second];
        
        // Determine if we'll ask for the correct order or intentionally reverse it for a "which came first" question
        const askCorrectOrder = Math.random() > 0.5;
        const correctAnswer = askCorrectOrder ? 
            `${selectedPair.name1} came before ${selectedPair.name2}` : 
            (firstMilestone.months < secondMilestone.months ? selectedPair.name1 : selectedPair.name2);
        
        if (askCorrectOrder) {
            // "Is this the correct order" question
            return {
                question: `For ${person.name}, is it true that ${selectedPair.name1} came before ${selectedPair.name2}?`,
                answers: shuffleArray([
                    `${selectedPair.name1} came before ${selectedPair.name2}`,
                    `${selectedPair.name2} came before ${selectedPair.name1}`
                ]),
                correctAnswer: firstMilestone.months < secondMilestone.months ? 
                    `${selectedPair.name1} came before ${selectedPair.name2}` : 
                    `${selectedPair.name2} came before ${selectedPair.name1}`
            };
        } else {
            // "Which came first" question
            return {
                question: `For ${person.name}, which came first?`,
                answers: shuffleArray([selectedPair.name1, selectedPair.name2]),
                correctAnswer: firstMilestone.months < secondMilestone.months ? selectedPair.name1 : selectedPair.name2
            };
        }
    },
    
    milestoneArithmetic: (person) => {
        if (!person.milestones) return generateFallbackQuestion(person);
        
        // Make sure we have at least two milestones to work with
        const milestoneKeys = Object.keys(person.milestones);
        if (milestoneKeys.length < 2) {
            return generateFallbackQuestion(person);
        }
        
        // Select two random different milestones
        let index1 = Math.floor(Math.random() * milestoneKeys.length);
        let index2;
        do {
            index2 = Math.floor(Math.random() * milestoneKeys.length);
        } while (index2 === index1);
        
        const milestone1Key = milestoneKeys[index1];
        const milestone2Key = milestoneKeys[index2];
        const milestone1 = person.milestones[milestone1Key];
        const milestone2 = person.milestones[milestone2Key];
        
        // Define milestone friendly names
        const milestoneFriendlyNames = {
            birth: "birth",
            firstSteps: "first steps",
            firstWords: "first words",
            weaning: "starting solid foods",
            pottyTraining: "potty training",
            shortSentences: "speaking in short sentences",
            readingWriting: "learning to read and write",
            socialInteraction: "engaging in cooperative play",
            rightWrong: "understanding right from wrong",
            school: "starting preschool/kindergarten"
        };
        
        const name1 = milestoneFriendlyNames[milestone1Key] || milestone1Key;
        const name2 = milestoneFriendlyNames[milestone2Key] || milestone2Key;
        
        // Calculate the absolute difference between the two milestone ages
        const ageDifference = Math.abs(milestone1.months - milestone2.months);
        
        // Format the difference for display
        let differenceDisplay = '';
        if (ageDifference < 12) {
            differenceDisplay = `${ageDifference} months`;
        } else {
            const years = Math.floor(ageDifference / 12);
            const remainingMonths = ageDifference % 12;
            if (remainingMonths === 0) {
                differenceDisplay = `${years} year${years > 1 ? 's' : ''}`;
            } else {
                differenceDisplay = `${years} year${years > 1 ? 's' : ''} and ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
            }
        }
        
        // Generate wrong answers (within reasonable range)
        const minDiff = Math.max(1, ageDifference - 5);
        const maxDiff = ageDifference + 5;
        let wrongDiffs = [];
        
        while (wrongDiffs.length < 3) {
            const wrongDiff = Math.floor(Math.random() * (maxDiff - minDiff + 1)) + minDiff;
            if (wrongDiff !== ageDifference && !wrongDiffs.includes(wrongDiff)) {
                wrongDiffs.push(wrongDiff);
            }
        }
        
        // Format wrong differences
        const formattedWrongDiffs = wrongDiffs.map(months => {
            if (months < 12) {
                return `${months} months`;
            } else {
                const years = Math.floor(months / 12);
                const remainingMonths = months % 12;
                if (remainingMonths === 0) {
                    return `${years} year${years > 1 ? 's' : ''}`;
                } else {
                    return `${years} year${years > 1 ? 's' : ''} and ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
                }
            }
        });
        
        // Determine which milestone came first for accurate question phrasing
        const firstMilestoneName = milestone1.months < milestone2.months ? name1 : name2;
        const secondMilestoneName = milestone1.months < milestone2.months ? name2 : name1;
        
        return {
            question: `How much time passed between when ${person.name} reached the milestone of ${firstMilestoneName} and ${secondMilestoneName}?`,
            answers: shuffleArray([differenceDisplay, ...formattedWrongDiffs]),
            correctAnswer: differenceDisplay
        };
    },
    
    // Adult milestone questions
    adultMilestoneAge: (person) => {
        if (!person.milestones || !hasAdultMilestones(person)) return generateFallbackQuestion(person);
        
        // Get only adult milestones
        const adultMilestoneKeys = getAdultMilestoneKeys().filter(key => person.milestones[key]);
        if (adultMilestoneKeys.length === 0) return generateFallbackQuestion(person);
        
        // Pick a random adult milestone
        const randomMilestoneKey = adultMilestoneKeys[Math.floor(Math.random() * adultMilestoneKeys.length)];
        const milestone = person.milestones[randomMilestoneKey];
        
        // Get milestone friendly name
        const milestoneFriendlyNames = {
            collegeCompleted: "completing college",
            firstJob: "getting their first job",
            married: "getting married",
            firstChild: "having their first child",
            secondChild: "having their second child",
            thirdChild: "having their third child",
            ownHouse: "buying their first house",
            ownCar: "buying their first car",
            retirement: "retiring from work"
        };
        
        const friendlyName = milestoneFriendlyNames[randomMilestoneKey] || randomMilestoneKey;
        
        // Generate wrong ages (within reasonable range)
        const correctAge = milestone.age;
        let wrongAges = [];
        const minAge = Math.max(18, correctAge - 5);
        const maxAge = correctAge + 5;
        
        while (wrongAges.length < 3) {
            const wrongAge = Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;
            if (wrongAge !== correctAge && !wrongAges.includes(wrongAge)) {
                wrongAges.push(wrongAge);
            }
        }
        
        return {
            question: `At what age did ${person.name} reach the milestone of ${friendlyName}?`,
            answers: shuffleArray([`${correctAge} years old`, ...wrongAges.map(age => `${age} years old`)]),
            correctAnswer: `${correctAge} years old`
        };
    },
    
    adultMilestoneYear: (person) => {
        if (!person.milestones || !hasAdultMilestones(person)) return generateFallbackQuestion(person);
        
        // Get only adult milestones
        const adultMilestoneKeys = getAdultMilestoneKeys().filter(key => person.milestones[key]);
        if (adultMilestoneKeys.length === 0) return generateFallbackQuestion(person);
        
        // Pick a random adult milestone
        const randomMilestoneKey = adultMilestoneKeys[Math.floor(Math.random() * adultMilestoneKeys.length)];
        const milestone = person.milestones[randomMilestoneKey];
        
        // Get milestone friendly name
        const milestoneFriendlyNames = {
            collegeCompleted: "completing college",
            firstJob: "getting their first job",
            married: "getting married",
            firstChild: "having their first child",
            secondChild: "having their second child",
            thirdChild: "having their third child",
            ownHouse: "buying their first house",
            ownCar: "buying their first car",
            retirement: "retiring from work"
        };
        
        const friendlyName = milestoneFriendlyNames[randomMilestoneKey] || randomMilestoneKey;
        
        // Generate wrong years (within reasonable range)
        const correctYear = milestone.year;
        let wrongYears = [];
        const minYear = correctYear - 5;
        const maxYear = correctYear + 5;
        
        while (wrongYears.length < 3) {
            const wrongYear = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
            if (wrongYear !== correctYear && !wrongYears.includes(wrongYear)) {
                wrongYears.push(wrongYear);
            }
        }
        
        return {
            question: `In what year did ${person.name} reach the milestone of ${friendlyName}?`,
            answers: shuffleArray([`${correctYear}`, ...wrongYears.map(String)]),
            correctAnswer: `${correctYear}`
        };
    },
    
    adultMilestoneSequence: (person) => {
        if (!person.milestones || !hasAdultMilestones(person)) return generateFallbackQuestion(person);
        
        // Define milestone pairs for sequencing questions
        const milestonePairs = [
            { first: 'collegeCompleted', second: 'firstJob', name1: 'completing college', name2: 'getting first job' },
            { first: 'firstJob', second: 'married', name1: 'getting first job', name2: 'getting married' },
            { first: 'married', second: 'firstChild', name1: 'getting married', name2: 'having first child' },
            { first: 'firstChild', second: 'ownHouse', name1: 'having first child', name2: 'buying first house' },
            { first: 'ownHouse', second: 'ownCar', name1: 'buying first house', name2: 'buying first car' },
            { first: 'firstChild', second: 'secondChild', name1: 'having first child', name2: 'having second child' },
            { first: 'secondChild', second: 'thirdChild', name1: 'having second child', name2: 'having third child' },
            { first: 'firstJob', second: 'retirement', name1: 'getting first job', name2: 'retirement' }
        ];
        
        // Filter pairs where both milestones exist for this person
        const validPairs = milestonePairs.filter(pair => 
            person.milestones[pair.first] && person.milestones[pair.second]
        );
        
        if (validPairs.length === 0) {
            return generateFallbackQuestion(person);
        }
        
        // Select a random valid pair
        const selectedPair = validPairs[Math.floor(Math.random() * validPairs.length)];
        
        // Get the milestone years
        const milestone1Year = person.milestones[selectedPair.first].year;
        const milestone2Year = person.milestones[selectedPair.second].year;
        
        // Format question and answers based on whether asking which came first or the correct order
        const askCorrectOrder = Math.random() > 0.5;
        
        if (askCorrectOrder) {
            // "Is this the correct order" question
            return {
                question: `For ${person.name}, is it true that ${selectedPair.name1} came before ${selectedPair.name2}?`,
                answers: shuffleArray([
                    `${selectedPair.name1} came before ${selectedPair.name2}`,
                    `${selectedPair.name2} came before ${selectedPair.name1}`
                ]),
                correctAnswer: milestone1Year <= milestone2Year ? 
                    `${selectedPair.name1} came before ${selectedPair.name2}` : 
                    `${selectedPair.name2} came before ${selectedPair.name1}`
            };
        } else {
            // "Which came first" question
            return {
                question: `For ${person.name}, which came first?`,
                answers: shuffleArray([selectedPair.name1, selectedPair.name2]),
                correctAnswer: milestone1Year <= milestone2Year ? selectedPair.name1 : selectedPair.name2
            };
        }
    },
    
    adultMilestoneArithmetic: (person) => {
        if (!person.milestones || !hasAdultMilestones(person)) return generateFallbackQuestion(person);
        
        // Get only adult milestones
        const adultMilestoneKeys = getAdultMilestoneKeys().filter(key => person.milestones[key]);
        if (adultMilestoneKeys.length < 2) return generateFallbackQuestion(person);
        
        // Select two different milestones
        let index1 = Math.floor(Math.random() * adultMilestoneKeys.length);
        let index2;
        do {
            index2 = Math.floor(Math.random() * adultMilestoneKeys.length);
        } while (index2 === index1);
        
        const milestone1Key = adultMilestoneKeys[index1];
        const milestone2Key = adultMilestoneKeys[index2];
        const milestone1 = person.milestones[milestone1Key];
        const milestone2 = person.milestones[milestone2Key];
        
        // Get milestone friendly names
        const milestoneFriendlyNames = {
            collegeCompleted: "completing college",
            firstJob: "getting their first job",
            married: "getting married",
            firstChild: "having their first child",
            secondChild: "having their second child",
            thirdChild: "having their third child",
            ownHouse: "buying their first house",
            ownCar: "buying their first car",
            retirement: "retiring from work"
        };
        
        const name1 = milestoneFriendlyNames[milestone1Key] || milestone1Key;
        const name2 = milestoneFriendlyNames[milestone2Key] || milestone2Key;
        
        // Calculate the years difference between the two milestones
        const yearDifference = Math.abs(milestone1.year - milestone2.year);
        
        // Generate wrong answers (within reasonable range)
        let wrongDiffs = [];
        const minDiff = Math.max(1, yearDifference - 3);
        const maxDiff = yearDifference + 3;
        
        while (wrongDiffs.length < 3) {
            const wrongDiff = Math.floor(Math.random() * (maxDiff - minDiff + 1)) + minDiff;
            if (wrongDiff !== yearDifference && !wrongDiffs.includes(wrongDiff)) {
                wrongDiffs.push(wrongDiff);
            }
        }
        
        // Determine which milestone came first for accurate question phrasing
        const firstMilestoneName = milestone1.year <= milestone2.year ? name1 : name2;
        const secondMilestoneName = milestone1.year <= milestone2.year ? name2 : name1;
        
        return {
            question: `How many years passed between when ${person.name} reached the milestone of ${firstMilestoneName} and ${secondMilestoneName}?`,
            answers: shuffleArray([`${yearDifference} years`, ...wrongDiffs.map(diff => `${diff} years`)]),
            correctAnswer: `${yearDifference} years`
        };
    },
    
    // New questions for time calculations - hours and minutes
    hourMinuteAddition: (person) => {
        // Generate a starting time (hours between 1-11, minutes that are multiples of 5)
        const startHour = Math.floor(Math.random() * 11) + 1; // 1-11
        const startMinuteOptions = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
        const startMinuteIndex = Math.floor(Math.random() * startMinuteOptions.length);
        const startMinute = startMinuteOptions[startMinuteIndex];
        
        // Format starting time
        const startTimeFormatted = `${startHour}:${startMinute.toString().padStart(2, '0')}`;
        
        // Minutes to add (between 5 and 60 minutes, in 5-minute intervals)
        const minutesToAdd = (Math.floor(Math.random() * 12) + 1) * 5; // 5, 10, 15, ..., 60
        
        // Calculate result time
        const totalMinutes = startHour * 60 + startMinute + minutesToAdd;
        const endHour = Math.floor(totalMinutes / 60) % 12 || 12; // Keep in 12-hour format
        const endMinute = totalMinutes % 60;
        
        // Format result time
        const correctAnswer = `${endHour}:${endMinute.toString().padStart(2, '0')}`;
        
        // Generate wrong answers (off by 5, 10, or 15 minutes)
        const offsets = [5, 10, 15];
        const wrongAnswers = offsets.map(offset => {
            // Randomly add or subtract the offset
            const offsetDirection = Math.random() > 0.5 ? 1 : -1;
            const wrongTotalMinutes = totalMinutes + (offset * offsetDirection);
            
            const wrongHour = Math.floor(wrongTotalMinutes / 60) % 12 || 12;
            const wrongMinute = wrongTotalMinutes % 60;
            return `${wrongHour}:${wrongMinute.toString().padStart(2, '0')}`;
        });
        
        return {
            question: `If ${person.name}'s class starts at ${startTimeFormatted} and lasts ${minutesToAdd} minutes, what time will it end?`,
            answers: shuffleArray([correctAnswer, ...wrongAnswers]),
            correctAnswer: correctAnswer
        };
    },
    
    hourMinuteSubtraction: (person) => {
        // Generate an ending time (hours between 1-11, minutes that are multiples of 5)
        const endHour = Math.floor(Math.random() * 11) + 1; // 1-11
        const endMinuteOptions = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
        const endMinuteIndex = Math.floor(Math.random() * endMinuteOptions.length);
        const endMinute = endMinuteOptions[endMinuteIndex];
        
        // Format ending time
        const endTimeFormatted = `${endHour}:${endMinute.toString().padStart(2, '0')}`;
        
        // Minutes to subtract (between 5 and 60 minutes, in 5-minute intervals)
        const minutesToSubtract = (Math.floor(Math.random() * 12) + 1) * 5; // 5, 10, 15, ..., 60
        
        // Calculate start time
        let totalMinutes = endHour * 60 + endMinute - minutesToSubtract;
        // Ensure positive value by adding 12 hours if needed
        if (totalMinutes < 0) {
            totalMinutes += 12 * 60;
        }
        
        const startHour = Math.floor(totalMinutes / 60) % 12 || 12; // Keep in 12-hour format
        const startMinute = totalMinutes % 60;
        
        // Format start time
        const correctAnswer = `${startHour}:${startMinute.toString().padStart(2, '0')}`;
        
        // Generate wrong answers (off by 5, 10, or 15 minutes)
        const offsets = [5, 10, 15];
        const wrongAnswers = offsets.map(offset => {
            // Randomly add or subtract the offset
            const offsetDirection = Math.random() > 0.5 ? 1 : -1;
            let wrongTotalMinutes = totalMinutes + (offset * offsetDirection);
            // Ensure positive
            if (wrongTotalMinutes < 0) {
                wrongTotalMinutes += 12 * 60;
            }
            
            const wrongHour = Math.floor(wrongTotalMinutes / 60) % 12 || 12;
            const wrongMinute = wrongTotalMinutes % 60;
            return `${wrongHour}:${wrongMinute.toString().padStart(2, '0')}`;
        });
        
        return {
            question: `${person.name}'s music lesson ends at ${endTimeFormatted}. If the lesson lasts ${minutesToSubtract} minutes, what time did it start?`,
            answers: shuffleArray([correctAnswer, ...wrongAnswers]),
            correctAnswer: correctAnswer
        };
    },
    
    readClockTime: (person) => {
        // Array of possible hour positions for a clock
        const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        
        // Minute positions that are easy to read (multiples of 5)
        const minutes = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
        
        // Select random hour and minute
        const hour = hours[Math.floor(Math.random() * hours.length)];
        const minute = minutes[Math.floor(Math.random() * minutes.length)];
        
        // Format the correct time
        const correctAnswer = `${hour}:${minute.toString().padStart(2, '0')}`;
        
        // Generate clock description
        let clockDescription;
        if (minute === 0) {
            clockDescription = `the hour hand is at ${hour} and the minute hand is at 12`;
        } else if (minute === 30) {
            clockDescription = `the hour hand is halfway between ${hour} and ${hour % 12 + 1}, and the minute hand is at 6`;
        } else if (minute === 15) {
            clockDescription = `the hour hand is a little past ${hour}, and the minute hand is at 3`;
        } else if (minute === 45) {
            clockDescription = `the hour hand is almost at ${hour % 12 + 1}, and the minute hand is at 9`;
        } else {
            // Which number the minute hand points to
            const minuteHand = minute / 5;
            clockDescription = `the hour hand is ${minute < 30 ? 'a little' : 'more than halfway'} between ${hour} and ${hour % 12 + 1}, and the minute hand points to ${minuteHand}`;
        }
        
        // Generate wrong answers
        const wrongAnswers = [];
        while (wrongAnswers.length < 3) {
            // Generate a different time
            const wrongHour = hours[Math.floor(Math.random() * hours.length)];
            const wrongMinute = minutes[Math.floor(Math.random() * minutes.length)];
            const wrongTime = `${wrongHour}:${wrongMinute.toString().padStart(2, '0')}`;
            
            // Only add if it's not the correct time and not already in wrong answers
            if (wrongTime !== correctAnswer && !wrongAnswers.includes(wrongTime)) {
                wrongAnswers.push(wrongTime);
            }
        }
        
        return {
            question: `On an analog clock, when ${clockDescription}, what time is it?`,
            answers: shuffleArray([correctAnswer, ...wrongAnswers]),
            correctAnswer: correctAnswer
        };
    },
    
    timeElapsed: (person) => {
        // Generate start and end times with a reasonable difference
        
        // Start with whole hours for simplicity
        const startHour = Math.floor(Math.random() * 11) + 1; // 1-11
        const startMinute = 0; // Start with zero minutes
        
        // Elapsed time between 1 and 3 hours, in 15-minute increments
        const hoursElapsed = Math.floor(Math.random() * 3) + 1; // 1, 2, or 3 hours
        const minutesElapsed = Math.floor(Math.random() * 4) * 15; // 0, 15, 30, or 45 minutes
        
        // Calculate end time
        const totalStartMinutes = startHour * 60 + startMinute;
        const totalEndMinutes = totalStartMinutes + (hoursElapsed * 60) + minutesElapsed;
        
        const endHour = Math.floor(totalEndMinutes / 60) % 12 || 12; // Keep in 12-hour format
        const endMinute = totalEndMinutes % 60;
        
        // Format start and end times
        const startTime = `${startHour}:00`;
        const endTime = `${endHour}:${endMinute.toString().padStart(2, '0')}`;
        
        // Format correct answer
        let correctAnswer;
        if (minutesElapsed === 0) {
            correctAnswer = `${hoursElapsed} hour${hoursElapsed !== 1 ? 's' : ''}`;
        } else if (hoursElapsed === 0) {
            correctAnswer = `${minutesElapsed} minute${minutesElapsed !== 1 ? 's' : ''}`;
        } else {
            correctAnswer = `${hoursElapsed} hour${hoursElapsed !== 1 ? 's' : ''} and ${minutesElapsed} minute${minutesElapsed !== 1 ? 's' : ''}`;
        }
        
        // Generate wrong answers with plausible but incorrect elapsed times
        const wrongTimes = [];
        while (wrongTimes.length < 3) {
            const wrongHoursOffset = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
            const wrongMinutesOffset = Math.floor(Math.random() * 4 - 2) * 15; // -30, -15, 0, 15, or 30 minutes
            
            let wrongHours = hoursElapsed + wrongHoursOffset;
            let wrongMinutes = minutesElapsed + wrongMinutesOffset;
            
            // Adjust for overflow
            if (wrongMinutes >= 60) {
                wrongHours += 1;
                wrongMinutes -= 60;
            } else if (wrongMinutes < 0) {
                wrongHours -= 1;
                wrongMinutes += 60;
            }
            
            // Ensure positive values
            if (wrongHours < 0 || (wrongHours === 0 && wrongMinutes === 0)) {
                continue;
            }
            
            // Format wrong answer
            let wrongAnswer;
            if (wrongMinutes === 0) {
                wrongAnswer = `${wrongHours} hour${wrongHours !== 1 ? 's' : ''}`;
            } else if (wrongHours === 0) {
                wrongAnswer = `${wrongMinutes} minute${wrongMinutes !== 1 ? 's' : ''}`;
            } else {
                wrongAnswer = `${wrongHours} hour${wrongHours !== 1 ? 's' : ''} and ${wrongMinutes} minute${wrongMinutes !== 1 ? 's' : ''}`;
            }
            
            if (wrongAnswer !== correctAnswer && !wrongTimes.includes(wrongAnswer)) {
                wrongTimes.push(wrongAnswer);
            }
        }
        
        return {
            question: `If ${person.name}'s party started at ${startTime} and ended at ${endTime}, how much time elapsed?`,
            answers: shuffleArray([correctAnswer, ...wrongTimes]),
            correctAnswer: correctAnswer
        };
    },
    
    // Month number identification question
    monthNumber: (person) => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
        // Random month selection
        const randomMonthIndex = Math.floor(Math.random() * 12);
        const correctAnswer = randomMonthIndex + 1; // Convert to 1-indexed for month numbers
        
        // Generate wrong answers (different month numbers)
        const wrongAnswers = [];
        while (wrongAnswers.length < 3) {
            const wrongAnswer = Math.floor(Math.random() * 12) + 1;
            if (wrongAnswer !== correctAnswer && !wrongAnswers.includes(wrongAnswer)) {
                wrongAnswers.push(wrongAnswer);
            }
        }
        
        return {
            question: `What is the number of the month ${months[randomMonthIndex]} in the calendar?`,
            answers: shuffleArray([correctAnswer.toString(), ...wrongAnswers.map(String)]),
            correctAnswer: correctAnswer.toString()
        };
    },
    
    // Month name from number question
    monthName: (person) => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
        // Random month number
        const randomMonthNumber = Math.floor(Math.random() * 12) + 1; // 1-12
        const correctAnswer = months[randomMonthNumber - 1];
        
        // Generate wrong answers (different months)
        const wrongAnswers = [];
        while (wrongAnswers.length < 3) {
            const wrongMonthIndex = Math.floor(Math.random() * 12);
            const wrongMonth = months[wrongMonthIndex];
            if (wrongMonth !== correctAnswer && !wrongAnswers.includes(wrongMonth)) {
                wrongAnswers.push(wrongMonth);
            }
        }
        
        return {
            question: `What is the name of month #${randomMonthNumber} in the calendar year?`,
            answers: shuffleArray([correctAnswer, ...wrongAnswers]),
            correctAnswer: correctAnswer
        };
    },
    
    // Week number within a month question
    weekInMonth: (person) => {
        // Create a scenario about a specific week in a month
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const randomMonthIndex = Math.floor(Math.random() * 12);
        const randomMonth = months[randomMonthIndex];
        
        // Random week number (1-4)
        const weekNumber = Math.floor(Math.random() * 4) + 1;
        const correctAnswer = weekNumber;
        
        // Generate descriptions for the week
        let weekDescription;
        switch(weekNumber) {
            case 1:
                weekDescription = "first week";
                break;
            case 2:
                weekDescription = "second week";
                break;
            case 3:
                weekDescription = "third week";
                break;
            case 4:
                weekDescription = "fourth week";
                break;
        }
        
        // Generate days for that week
        // Here we'll approximate since calendar weeks can vary
        const startDay = (weekNumber - 1) * 7 + 1;
        const endDay = Math.min(startDay + 6, [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][randomMonthIndex]);
        
        // Generate wrong answers (different week numbers)
        const wrongAnswers = [1, 2, 3, 4].filter(num => num !== weekNumber);
        
        const ordinals = ['first', 'second', 'third', 'fourth'];
        
        return {
            question: `If ${person.name} visits from ${randomMonth} ${startDay} to ${randomMonth} ${endDay}, which week of ${randomMonth} is this?`,
            answers: shuffleArray([ordinals[weekNumber-1], ...wrongAnswers.map(num => ordinals[num-1])]),
            correctAnswer: ordinals[weekNumber-1]
        };
    },
    
    // Week order in a month
    weekOrder: (person) => {
        const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
        // Choose a random month
        const randomMonthIndex = Math.floor(Math.random() * 12);
        const randomMonth = months[randomMonthIndex];
        
        // Choose a random weekday
        const randomWeekdayIndex = Math.floor(Math.random() * 7);
        const randomWeekday = weekdays[randomWeekdayIndex];
        
        // Choose which occurrence (1st, 2nd, 3rd, or 4th) of the weekday
        const occurrenceNum = Math.floor(Math.random() * 4) + 1;
        let occurrenceWord;
        switch(occurrenceNum) {
            case 1: occurrenceWord = "first"; break;
            case 2: occurrenceWord = "second"; break;
            case 3: occurrenceWord = "third"; break;
            case 4: occurrenceWord = "fourth"; break;
            default: occurrenceWord = "first";
        }
        
        const correctAnswer = occurrenceWord;
        
        // Generate wrong options - different occurrences
        const wrongAnswers = ["first", "second", "third", "fourth"].filter(occ => occ !== occurrenceWord);
        
        return {
            question: `${person.name}'s music class is on the ${occurrenceWord} ${randomWeekday} of ${randomMonth}. Which ${randomWeekday} of the month is this?`,
            answers: shuffleArray([correctAnswer, ...wrongAnswers.slice(0, 3)]),
            correctAnswer: correctAnswer
        };
    },
    
    // Counting weeks in a month
    weeksInMonth: (person) => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
        // Different months can have 4 or 5 full or partial weeks
        // Most months are considered to have 4 weeks, though they actually have a bit more
        const monthsWithFourWeeks = [1]; // February (in non-leap years) is closest to exactly 4 weeks
        const monthsWithFiveWeeks = [0, 2, 4, 6, 7, 9, 11]; // Months with 31 days
        
        // Pick a random scenario
        const useExactWeeks = Math.random() > 0.5;
        
        let randomMonthIndex, correctAnswer;
        if (useExactWeeks) {
            // For exact weeks scenario (focusing on just full weeks)
            correctAnswer = "4";
            // Pick a month commonly thought of as having 4 weeks
            randomMonthIndex = monthsWithFourWeeks[Math.floor(Math.random() * monthsWithFourWeeks.length)];
        } else {
            // For calendar weeks scenario (where parts of weeks count)
            correctAnswer = "5";
            // Pick a month that typically has 5 calendar weeks
            randomMonthIndex = monthsWithFiveWeeks[Math.floor(Math.random() * monthsWithFiveWeeks.length)];
        }
        
        const randomMonth = months[randomMonthIndex];
        
        // Generate wrong answers
        const wrongAnswers = ["3", "4", "5", "6"].filter(num => num !== correctAnswer);
        
        let questionText;
        if (useExactWeeks) {
            questionText = `How many complete weeks (7 days each) are there typically in ${randomMonth}?`;
        } else {
            questionText = `How many calendar weeks (including partial weeks) are usually shown on a calendar for ${randomMonth}?`;
        }
        
        return {
            question: questionText,
            answers: shuffleArray([correctAnswer, ...wrongAnswers.slice(0, 3)]),
            correctAnswer: correctAnswer
        };
    },
    
    // Weekday number identification question (where Sunday=1)
    weekdayNumber: (person) => {
        const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        
        // Random weekday selection
        const randomWeekdayIndex = Math.floor(Math.random() * 7);
        const weekdayName = weekdays[randomWeekdayIndex];
        const correctAnswer = randomWeekdayIndex + 1; // Convert to 1-indexed with Sunday=1
        
        // Generate wrong answers (different weekday numbers)
        const wrongAnswers = [];
        while (wrongAnswers.length < 3) {
            const wrongAnswer = Math.floor(Math.random() * 7) + 1; // 1-7
            if (wrongAnswer !== correctAnswer && !wrongAnswers.includes(wrongAnswer)) {
                wrongAnswers.push(wrongAnswer);
            }
        }
        
        return {
            question: `If Sunday is day 1, Monday is day 2, and so on, what number is assigned to ${weekdayName}?`,
            answers: shuffleArray([correctAnswer.toString(), ...wrongAnswers.map(String)]),
            correctAnswer: correctAnswer.toString()
        };
    },
    
    // Weekday name from number question (where Sunday=1)
    weekdayName: (person) => {
        const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        
        // Random weekday number (1-7, with Sunday=1)
        const randomWeekdayNumber = Math.floor(Math.random() * 7) + 1; // 1-7
        const correctAnswer = weekdays[randomWeekdayNumber - 1];
        
        // Generate wrong answers (different weekdays)
        const wrongAnswers = [];
        while (wrongAnswers.length < 3) {
            const wrongWeekdayIndex = Math.floor(Math.random() * 7);
            const wrongWeekday = weekdays[wrongWeekdayIndex];
            if (wrongWeekday !== correctAnswer && !wrongAnswers.includes(wrongWeekday)) {
                wrongAnswers.push(wrongWeekday);
            }
        }
        
        return {
            question: `If Sunday is day 1, Monday is day 2, and so on, which day of the week is day ${randomWeekdayNumber}?`,
            answers: shuffleArray([correctAnswer, ...wrongAnswers]),
            correctAnswer: correctAnswer
        };
    },
    
    // Week position from birthdate (where Sunday=1)
    birthWeekdayNumber: (person) => {
        const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const weekdayIndex = weekdays.indexOf(person.birthWeekday);
        const correctAnswer = weekdayIndex + 1; // Convert to 1-indexed with Sunday=1
        
        // Generate wrong answers (different day numbers)
        const wrongAnswers = [];
        while (wrongAnswers.length < 3) {
            const wrongAnswer = Math.floor(Math.random() * 7) + 1; // 1-7
            if (wrongAnswer !== correctAnswer && !wrongAnswers.includes(wrongAnswer)) {
                wrongAnswers.push(wrongAnswer);
            }
        }
        
        return {
            question: `${person.name} was born on a ${person.birthWeekday}. If Sunday is day 1, Monday is day 2, and so on, what day number is ${person.name}'s birth weekday?`,
            answers: shuffleArray([correctAnswer.toString(), ...wrongAnswers.map(String)]),
            correctAnswer: correctAnswer.toString()
        };
    },
    
    // Day calculation based on weekday numbers (where Sunday=1)
    weekdayCalculation: (person) => {
        const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        
        // Random starting day (1-7)
        const startDayNumber = Math.floor(Math.random() * 7) + 1;
        const startDayName = weekdays[startDayNumber - 1];
        
        // Days to add (2-5 days)
        const daysToAdd = Math.floor(Math.random() * 4) + 2;
        
        // Calculate result day
        const resultDayNumber = ((startDayNumber + daysToAdd - 1) % 7) + 1;
        const correctAnswer = resultDayNumber;
        
        // Generate wrong answers
        const wrongAnswers = [];
        while (wrongAnswers.length < 3) {
            const wrongAnswer = Math.floor(Math.random() * 7) + 1;
            if (wrongAnswer !== correctAnswer && !wrongAnswers.includes(wrongAnswer)) {
                wrongAnswers.push(wrongAnswer);
            }
        }
        
        return {
            question: `If ${startDayName} is day ${startDayNumber}, and ${person.name} has a ${daysToAdd}-day project, on which day number will the project end?`,
            answers: shuffleArray([correctAnswer.toString(), ...wrongAnswers.map(String)]),
            correctAnswer: correctAnswer.toString()
        };
    },
    
    // New advanced weekday calculation question
    advancedWeekdayNumbering: (person) => {
        const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        
        // Choose two random weekdays
        const firstWeekdayIndex = Math.floor(Math.random() * 7);
        let secondWeekdayIndex;
        do {
            secondWeekdayIndex = Math.floor(Math.random() * 7);
        } while (secondWeekdayIndex === firstWeekdayIndex);
        
        const firstWeekday = weekdays[firstWeekdayIndex];
        const secondWeekday = weekdays[secondWeekdayIndex];
        
        // Calculate the difference in days
        let difference = (secondWeekdayIndex - firstWeekdayIndex + 7) % 7;
        if (difference === 0) difference = 7; // Full week
        
        const correctAnswer = difference.toString();
        
        // Generate wrong answers (different but plausible day counts)
        const wrongAnswers = [];
        while (wrongAnswers.length < 3) {
            let wrongDiff = Math.floor(Math.random() * 6) + 1; // 1-6
            if (wrongDiff === difference) wrongDiff = (wrongDiff % 6) + 1; // Make sure it's different
            
            if (!wrongAnswers.includes(wrongDiff.toString())) {
                wrongAnswers.push(wrongDiff.toString());
            }
        }
        
        return {
            question: `If Sunday is day 1 and ${person.name} starts a task on ${firstWeekday} and finishes it on ${secondWeekday}, how many days did the task take?`,
            answers: shuffleArray([correctAnswer, ...wrongAnswers]),
            correctAnswer: correctAnswer
        };
    },
    
    // Weekday position in month question
    weekdayPositionInMonth: (person) => {
        const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
        // Pick a random weekday
        const randomWeekdayIndex = Math.floor(Math.random() * 7);
        const weekdayName = weekdays[randomWeekdayIndex];
        
        // Pick a random month
        const randomMonthIndex = Math.floor(Math.random() * 12);
        const monthName = months[randomMonthIndex];
        
        // Generate a position number (1-4)
        const positionNumber = Math.floor(Math.random() * 4) + 1;
        let positionWord;
        switch(positionNumber) {
            case 1: positionWord = "first"; break;
            case 2: positionWord = "second"; break;
            case 3: positionWord = "third"; break;
            case 4: positionWord = "fourth"; break;
        }
        
        const correctDay = randomWeekdayIndex + 1; // Sunday = 1, Monday = 2, etc.
        
        // Generate wrong answers (different day numbers)
        const wrongAnswers = [];
        while (wrongAnswers.length < 3) {
            const wrongDay = Math.floor(Math.random() * 7) + 1; // 1-7
            if (wrongDay !== correctDay && !wrongAnswers.includes(wrongDay.toString())) {
                wrongAnswers.push(wrongDay.toString());
            }
        }
        
        return {
            question: `${person.name} has ${monthName} events on the ${positionWord} ${weekdayName} of the month. If Sunday is day 1, what day number is this event on?`,
            answers: shuffleArray([correctDay.toString(), ...wrongAnswers]),
            correctAnswer: correctDay.toString()
        };
    }
};

// Helper function to shuffle arrays (for randomizing answer options)
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Helper function to generate a fallback question if milestone data is missing
function generateFallbackQuestion(person) {
    return questionTypes.zodiacRelated(person);
}

// Helper function to check if a person has adult milestones
function hasAdultMilestones(person) {
    if (!person.milestones) return false;
    const adultMilestoneKeys = getAdultMilestoneKeys();
    return adultMilestoneKeys.some(key => person.milestones[key]);
}

// Helper function to get adult milestone keys
function getAdultMilestoneKeys() {
    return ['collegeCompleted', 'firstJob', 'married', 'firstChild', 'secondChild', 
            'thirdChild', 'ownHouse', 'ownCar', 'retirement'];
}

// Helper function for visual subtraction questions
function getRandomItem() {
    const items = ['apple', 'ball', 'toy', 'cookie', 'flower', 'star', 'balloon'];
    return items[Math.floor(Math.random() * items.length)];
}

// Define rewards based on score thresholds
const rewards = [
    { score: 3, name: "Bronze Badge", image: "🥉" },
    { score: 6, name: "Silver Badge", image: "🥈" },
    { score: 9, name: "Gold Badge", image: "🥇" },
    { score: 12, name: "Trophy", image: "🏆" }
];