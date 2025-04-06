// Game state variables
let currentPerson = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let currentScore = 0;
let earnedRewards = [];

// Define reference data for hints
const hintData = {
    months: [
        { name: "January", number: 1, days: 31, season: "Winter" },
        { name: "February", number: 2, days: "28 (29 in leap years)", season: "Winter" },
        { name: "March", number: 3, days: 31, season: "Spring" },
        { name: "April", number: 4, days: 30, season: "Spring" },
        { name: "May", number: 5, days: 31, season: "Spring" },
        { name: "June", number: 6, days: 30, season: "Summer" },
        { name: "July", number: 7, days: 31, season: "Summer" },
        { name: "August", number: 8, days: 31, season: "Summer" },
        { name: "September", number: 9, days: 30, season: "Fall" },
        { name: "October", number: 10, days: 31, season: "Fall" },
        { name: "November", number: 11, days: 30, season: "Fall" },
        { name: "December", number: 12, days: 31, season: "Winter" }
    ],
    
    weekdays: [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ],
    
    seasons: [
        { name: "Spring", months: "March, April, May", characteristics: "Plants bloom, warming temperatures" },
        { name: "Summer", months: "June, July, August", characteristics: "Hot weather, longest days" },
        { name: "Fall", months: "September, October, November", characteristics: "Leaves change color, cooling temperatures" },
        { name: "Winter", months: "December, January, February", characteristics: "Cold weather, possible snow" }
    ],
    
    zodiacSigns: [
        { sign: "Aries", dates: "March 21 - April 19", element: "Fire" },
        { sign: "Taurus", dates: "April 20 - May 20", element: "Earth" },
        { sign: "Gemini", dates: "May 21 - June 20", element: "Air" },
        { sign: "Cancer", dates: "June 21 - July 22", element: "Water" },
        { sign: "Leo", dates: "July 23 - August 22", element: "Fire" },
        { sign: "Virgo", dates: "August 23 - September 22", element: "Earth" },
        { sign: "Libra", dates: "September 23 - October 22", element: "Air" },
        { sign: "Scorpio", dates: "October 23 - November 21", element: "Water" },
        { sign: "Sagittarius", dates: "November 22 - December 21", element: "Fire" },
        { sign: "Capricorn", dates: "December 22 - January 19", element: "Earth" },
        { sign: "Aquarius", dates: "January 20 - February 18", element: "Air" },
        { sign: "Pisces", dates: "February 19 - March 20", element: "Water" }
    ]
};

// DOM Elements
const screens = {
    welcome: document.getElementById('welcome-screen'),
    familySelection: document.getElementById('family-selection'),
    milestoneInfo: document.getElementById('milestone-info'),
    questionScreen: document.getElementById('question-screen'),
    gameOver: document.getElementById('game-over')
};

// Define family group containers
const familyGroupContainers = {
    'Own': document.getElementById('own-family-members'),
    'Paternal': document.getElementById('paternal-family-members'),
    'Maternal': document.getElementById('maternal-family-members'),
    'Friends': document.getElementById('friends-family-members')
};

// Initialize the game
function init() {
    // Group family members by their group
    const groupedFamilyMembers = {
        'Own': [],
        'Paternal': [],
        'Maternal': [],
        'Friends': []
    };
    
    // Sort family members into their groups
    familyMembers.forEach(person => {
        if (groupedFamilyMembers[person.group]) {
            groupedFamilyMembers[person.group].push(person);
        } else {
            // Default to Friends group if not specified
            groupedFamilyMembers['Friends'].push(person);
        }
    });
    
    // Apply appropriate class to each family group container
    document.querySelectorAll('.family-group').forEach((el, index) => {
        const groups = ['own', 'paternal', 'maternal', 'friends'];
        el.classList.add(groups[index]);
    });
    
    // Populate each group container with its members
    for (const [group, members] of Object.entries(groupedFamilyMembers)) {
        const container = familyGroupContainers[group];
        if (container) {
            container.innerHTML = '';
            
            if (members.length === 0) {
                container.innerHTML = '<p class="empty-group">No family members in this group yet</p>';
                continue;
            }
            
            members.forEach(person => {
                const personCard = document.createElement('div');
                personCard.className = 'family-member-card';
                personCard.setAttribute('data-id', person.id);
                personCard.textContent = person.name;
                personCard.addEventListener('click', () => selectFamilyMember(person));
                container.appendChild(personCard);
            });
        }
    }
    
    // Set up event listeners for navigation
    document.getElementById('start-game-btn').addEventListener('click', startGame);
    document.getElementById('start-questions-btn').addEventListener('click', startQuestions);
    document.getElementById('next-question-btn').addEventListener('click', showNextQuestion);
    document.getElementById('play-again-btn').addEventListener('click', resetGame);
    
    // Navigation buttons for back/home
    document.getElementById('back-to-welcome-btn').addEventListener('click', goToWelcomeScreen);
    document.getElementById('back-to-family-btn').addEventListener('click', goToFamilySelection);
    document.getElementById('back-to-welcome-from-game-over-btn').addEventListener('click', goToWelcomeScreen);
    
    // Directly set up the quit button
    const quitButton = document.getElementById('quit-quiz-btn');
    if (quitButton) {
        // Remove any existing listeners first
        quitButton.replaceWith(quitButton.cloneNode(true));
        // Get the fresh element
        const newQuitButton = document.getElementById('quit-quiz-btn');
        // Add the event listener
        newQuitButton.addEventListener('click', function() {
            if (confirm('Are you sure you want to quit this quiz? Your progress on these questions will be lost.')) {
                currentQuestions = [];
                currentQuestionIndex = 0;
                goToFamilySelection();
            }
        });
    }
    
    // Set up hint buttons
    document.getElementById('months-hint').addEventListener('click', () => showHint('months'));
    document.getElementById('weekdays-hint').addEventListener('click', () => showHint('weekdays'));
    document.getElementById('seasons-hint').addEventListener('click', () => showHint('seasons'));
    document.getElementById('zodiac-hint').addEventListener('click', () => showHint('zodiacSigns'));
    
    // Set up modal close button
    document.querySelector('.close-btn').addEventListener('click', closeHintModal);
    
    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        const modal = document.getElementById('hints-modal');
        if (event.target === modal) {
            closeHintModal();
        }
    });
    
    // Update the score display
    updateScoreDisplay();
}

// Start the game
function startGame() {
    hideAllScreens();
    screens.familySelection.classList.add('active');
}

// Go to welcome screen
function goToWelcomeScreen() {
    hideAllScreens();
    screens.welcome.classList.add('active');
}

// Go to family selection screen
function goToFamilySelection() {
    hideAllScreens();
    screens.familySelection.classList.add('active');
}

// Quit the current quiz and return to family selection
function quitQuiz() {
    if (confirm('Are you sure you want to quit this quiz? Your progress on these questions will be lost.')) {
        currentQuestions = [];
        currentQuestionIndex = 0;
        goToFamilySelection();
    }
}

// Function to go back to main welcome page from anywhere
function goBackToMainPage() {
    if (screens.questionScreen.classList.contains('active')) {
        // If we're in the quiz, confirm before quitting
        if (confirm('Are you sure you want to quit and go to the home page? Your progress on these questions will be lost.')) {
            // Reset quiz state
            currentQuestions = [];
            currentQuestionIndex = 0;
            
            // Go to welcome screen
            hideAllScreens();
            screens.welcome.classList.add('active');
        }
    } else {
        // For other screens, just go to the welcome screen
        hideAllScreens();
        screens.welcome.classList.add('active');
    }
}

// Select a family member
function selectFamilyMember(person) {
    currentPerson = person;
    
    // Update the milestone info screen
    document.getElementById('selected-person-name').textContent = person.name;
    document.getElementById('birth-date').textContent = person.birthDate;
    document.getElementById('birth-weekday').textContent = person.birthWeekday;
    document.getElementById('zodiac-sign').textContent = person.zodiacSign;
    document.getElementById('birth-season').textContent = person.season;
    
    // Display milestone timeline
    displayMilestoneTimeline(person);
    
    // Highlight the selected person card
    const cards = document.querySelectorAll('.family-member-card');
    cards.forEach(card => {
        if (parseInt(card.getAttribute('data-id')) === person.id) {
            card.classList.add('selected');
        } else {
            card.classList.remove('selected');
        }
    });
    
    // Show the milestone info screen
    hideAllScreens();
    screens.milestoneInfo.classList.add('active');
}

// Display milestone timeline for a person
function displayMilestoneTimeline(person) {
    const milestoneList = document.getElementById('milestone-list');
    milestoneList.innerHTML = '';
    
    if (!person.milestones || Object.keys(person.milestones).length === 0) {
        milestoneList.innerHTML = '<div class="milestone-empty">No milestone information available.</div>';
        return;
    }
    
    // Determine if person has child or adult milestones
    const hasChildMilestones = person.milestones.firstSteps || 
                              person.milestones.firstWords || 
                              person.milestones.weaning;
                              
    const hasAdultMilestones = person.milestones.collegeCompleted || 
                              person.milestones.firstJob || 
                              person.milestones.married;
    
    // Current date for age calculation
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const birthYear = person.birthYear;
    const currentAge = currentYear - birthYear;
    
    // Add birth as the first milestone
    const birthItem = document.createElement('div');
    birthItem.className = 'milestone-item';
    birthItem.innerHTML = `
        <span class="milestone-time">${person.birthDate}</span>
        <h4>Birth</h4>
        <p>Born on a ${person.birthWeekday} in ${person.season}</p>
    `;
    // Add click event to toggle details
    birthItem.addEventListener('click', toggleMilestoneDetails);
    milestoneList.appendChild(birthItem);
    
    // Display child milestones
    if (hasChildMilestones) {
        const childMilestones = [
            { key: 'weaning', name: 'Starting Solid Foods' },
            { key: 'firstWords', name: 'First Words' },
            { key: 'firstSteps', name: 'First Steps' },
            { key: 'shortSentences', name: 'Speaking in Short Sentences' },
            { key: 'pottyTraining', name: 'Potty Training' },
            { key: 'rightWrong', name: 'Understanding Right from Wrong' },
            { key: 'socialInteraction', name: 'Social Interaction & Cooperative Play' },
            { key: 'school', name: 'Starting School' },
            { key: 'readingWriting', name: 'Learning to Read and Write' }
        ];
        
        childMilestones.forEach(milestone => {
            if (person.milestones[milestone.key]) {
                const msData = person.milestones[milestone.key];
                const monthsText = formatMonthsToReadableAge(msData.months);
                
                const item = document.createElement('div');
                item.className = 'milestone-item child-milestone';
                item.innerHTML = `
                    <span class="milestone-time">Age: ${monthsText}</span>
                    <h4>${milestone.name}</h4>
                    <p>${msData.description}</p>
                `;
                // Add click event to toggle details
                item.addEventListener('click', toggleMilestoneDetails);
                milestoneList.appendChild(item);
            }
        });
    }
    
    // Display adult milestones
    if (hasAdultMilestones) {
        const adultMilestones = [
            { key: 'collegeCompleted', name: 'College Completion' },
            { key: 'firstJob', name: 'First Job' },
            { key: 'married', name: 'Marriage' },
            { key: 'firstChild', name: 'First Child' },
            { key: 'secondChild', name: 'Second Child' },
            { key: 'thirdChild', name: 'Third Child' },
            { key: 'ownHouse', name: 'First House' },
            { key: 'ownCar', name: 'First Car' },
            { key: 'retirement', name: 'Retirement' }
        ];
        
        adultMilestones.forEach(milestone => {
            if (person.milestones[milestone.key]) {
                const msData = person.milestones[milestone.key];
                
                const item = document.createElement('div');
                item.className = 'milestone-item adult-milestone';
                item.innerHTML = `
                    <span class="milestone-time">Age: ${msData.age} (${msData.year})</span>
                    <h4>${milestone.name}</h4>
                    <p>${msData.description}</p>
                `;
                // Add click event to toggle details
                item.addEventListener('click', toggleMilestoneDetails);
                milestoneList.appendChild(item);
            }
        });
    }
    
    // Add current age if not retired
    if (!person.milestones.retirement && currentAge > 0) {
        const currentAgeItem = document.createElement('div');
        currentAgeItem.className = 'milestone-item';
        currentAgeItem.innerHTML = `
            <span class="milestone-time">${currentYear}</span>
            <h4>Current Age</h4>
            <p>${person.name} is currently ${currentAge} years old</p>
        `;
        // Add click event to toggle details
        currentAgeItem.addEventListener('click', toggleMilestoneDetails);
        milestoneList.appendChild(currentAgeItem);
    }
}

// Function to toggle milestone details when clicked
function toggleMilestoneDetails(event) {
    // Get the clicked milestone item
    const milestoneItem = event.currentTarget;
    
    // Check if any other milestone is expanded and collapse it first
    document.querySelectorAll('.milestone-item.expanded').forEach(item => {
        if (item !== milestoneItem) {
            item.classList.remove('expanded');
        }
    });
    
    // Toggle the expanded class
    milestoneItem.classList.toggle('expanded');
    
    // Add visual feedback for touch
    milestoneItem.classList.add('touch-active');
    setTimeout(() => {
        milestoneItem.classList.remove('touch-active');
    }, 200);
}

// Helper function to format months into readable age
function formatMonthsToReadableAge(months) {
    if (months < 12) {
        return `${months} month${months !== 1 ? 's' : ''}`;
    } else if (months === 12) {
        return '1 year';
    } else {
        const years = Math.floor(months / 12);
        const remainingMonths = months % 12;
        return `${years} year${years !== 1 ? 's' : ''}${remainingMonths > 0 ? ` and ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}` : ''}`;
    }
}

// Start the questions round
function startQuestions() {
    // Generate questions for the selected person
    generateQuestions();
    
    // Reset question index and show first question
    currentQuestionIndex = 0;
    showQuestion(currentQuestions[currentQuestionIndex]);
    
    // Show the question screen
    hideAllScreens();
    screens.questionScreen.classList.add('active');
    
    // Set up the quit button again (to ensure it works after screen transition)
    const quitButton = document.getElementById('quit-quiz-btn');
    if (quitButton) {
        quitButton.onclick = function() {
            if (confirm('Are you sure you want to quit this quiz? Your progress on these questions will be lost.')) {
                currentQuestions = [];
                currentQuestionIndex = 0;
                goToFamilySelection();
            }
        };
    }
}

// Generate a set of questions for the selected person
function generateQuestions() {
    currentQuestions = [];
    
    // Get all available question types
    const standardQuestionGenerators = [
        questionTypes.weekdayRelated,
        questionTypes.monthRelated,
        questionTypes.zodiacRelated,
        questionTypes.seasonRelated,
        questionTypes.arithmeticAddition,
        questionTypes.arithmeticSubtraction,
        questionTypes.daysInMonth
    ];
    
    // New question types focusing on concepts Nia is learning
    const learningConceptQuestions = [
        // Sequence understanding questions
        questionTypes.monthSequence,
        questionTypes.weekdaySequence,
        questionTypes.seasonSequence,
        questionTypes.numberSequence,
        
        // Spelling practice
        questionTypes.spellingMonths,
        questionTypes.spellingWeekdays,
        questionTypes.spellingZodiac,
        
        // Math operations Nia struggles with
        questionTypes.multiplicationSimple,
        questionTypes.divisionSimple,
        questionTypes.subtractionVisual,
        
        // Time concepts
        questionTypes.timePassage,
        questionTypes.calendarAddition
    ];
    
    // Special milestone questions only for people with milestone data
    const childMilestoneQuestionGenerators = [
        questionTypes.milestoneAge,
        questionTypes.milestoneCause,
        questionTypes.milestoneSequence,
        questionTypes.milestoneArithmetic
    ];
    
    // Adult milestone questions only for adults
    const adultMilestoneQuestionGenerators = [
        questionTypes.adultMilestoneAge,
        questionTypes.adultMilestoneYear,
        questionTypes.adultMilestoneSequence,
        questionTypes.adultMilestoneArithmetic
    ];
    
    // Combine question types based on person's data
    let availableQuestionGenerators = [...standardQuestionGenerators, ...learningConceptQuestions];
    
    // Check if person has child milestones
    const hasChildMilestones = 
        currentPerson.milestones && 
        (currentPerson.milestones.firstSteps || 
         currentPerson.milestones.firstWords || 
         currentPerson.milestones.weaning);
    
    // Check if person has adult milestones
    const hasAdultMilestones = 
        currentPerson.milestones && 
        (currentPerson.milestones.collegeCompleted || 
         currentPerson.milestones.firstJob || 
         currentPerson.milestones.married);
    
    // Add milestone questions if appropriate
    if (hasChildMilestones) {
        availableQuestionGenerators = [...availableQuestionGenerators, ...childMilestoneQuestionGenerators];
    }
    
    if (hasAdultMilestones) {
        availableQuestionGenerators = [...availableQuestionGenerators, ...adultMilestoneQuestionGenerators];
    }
    
    // Generate 15 questions with emphasis on learning concept questions
    // We'll ensure at least 10 questions focus on the concepts Nia is struggling with
    const questionCount = 15;
    const learningConceptCount = 10;
    
    // First, add learning concept questions
    for (let i = 0; i < learningConceptCount; i++) {
        const randomTypeIndex = Math.floor(Math.random() * learningConceptQuestions.length);
        const questionGenerator = learningConceptQuestions[randomTypeIndex];
        currentQuestions.push(questionGenerator(currentPerson));
    }
    
    // Then add some standard/milestone questions to complete the set
    const remainingQuestionTypes = [
        ...standardQuestionGenerators,
        ...(hasChildMilestones ? childMilestoneQuestionGenerators : []),
        ...(hasAdultMilestones ? adultMilestoneQuestionGenerators : [])
    ];
    
    for (let i = learningConceptCount; i < questionCount; i++) {
        const randomTypeIndex = Math.floor(Math.random() * remainingQuestionTypes.length);
        const questionGenerator = remainingQuestionTypes[randomTypeIndex];
        currentQuestions.push(questionGenerator(currentPerson));
    }
    
    // Shuffle questions to mix learning concepts with other questions
    currentQuestions = shuffleArray(currentQuestions);
}

// Show a question
function showQuestion(questionData) {
    // Set question text
    document.getElementById('question-text').textContent = questionData.question;
    
    // Set answer options
    const answerOptions = document.getElementById('answer-options');
    answerOptions.innerHTML = '';
    
    questionData.answers.forEach(answer => {
        const answerOption = document.createElement('div');
        answerOption.className = 'answer-option';
        answerOption.textContent = answer;
        answerOption.addEventListener('click', () => checkAnswer(answer, questionData.correctAnswer));
        answerOptions.appendChild(answerOption);
    });
    
    // Hide the feedback area
    const feedback = document.getElementById('feedback');
    feedback.classList.add('hidden');
    feedback.classList.remove('correct', 'incorrect');
}

// Check if the answer is correct
function checkAnswer(selectedAnswer, correctAnswer) {
    const isCorrect = selectedAnswer === correctAnswer;
    const feedback = document.getElementById('feedback');
    const feedbackText = document.getElementById('feedback-text');
    
    // Highlight the selected answer
    const answerOptions = document.querySelectorAll('.answer-option');
    answerOptions.forEach(option => {
        option.style.pointerEvents = 'none'; // Disable further clicks
        
        if (option.textContent === selectedAnswer) {
            option.classList.add(isCorrect ? 'correct' : 'incorrect');
        }
        
        if (!isCorrect && option.textContent === correctAnswer) {
            option.classList.add('correct');
        }
    });
    
    // Show feedback
    feedback.classList.remove('hidden');
    feedback.classList.add(isCorrect ? 'correct' : 'incorrect');
    
    if (isCorrect) {
        feedbackText.textContent = "Well done! That's correct!";
        currentScore++;
        updateScoreDisplay();
        checkForRewards();
    } else {
        feedbackText.textContent = `Oops! The correct answer is: ${correctAnswer}`;
    }
}

// Show the next question
function showNextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion(currentQuestions[currentQuestionIndex]);
    } else {
        endGame();
    }
}

// End the game and show results
function endGame() {
    // Show final score
    document.getElementById('final-score').textContent = currentScore;
    
    // Show rewards
    displayRewards();
    
    // Show the game over screen
    hideAllScreens();
    screens.gameOver.classList.add('active');
}

// Reset the game to play again
function resetGame() {
    currentPerson = null;
    currentQuestions = [];
    currentQuestionIndex = 0;
    
    // Keep the score and rewards for this session
    
    // Return to the family selection screen
    hideAllScreens();
    screens.familySelection.classList.add('active');
}

// Update the score display
function updateScoreDisplay() {
    document.getElementById('score').textContent = currentScore;
}

// Check for earned rewards based on score
function checkForRewards() {
    const newRewards = rewards.filter(reward => 
        reward.score <= currentScore && 
        !earnedRewards.some(earned => earned.name === reward.name)
    );
    
    if (newRewards.length > 0) {
        newRewards.forEach(reward => earnedRewards.push(reward));
    }
}

// Display earned rewards
function displayRewards() {
    const rewardArea = document.getElementById('reward-area');
    rewardArea.innerHTML = '';
    
    if (earnedRewards.length === 0) {
        rewardArea.textContent = 'Keep playing to earn rewards!';
        return;
    }
    
    earnedRewards.forEach(reward => {
        const rewardElement = document.createElement('div');
        rewardElement.className = 'badge';
        rewardElement.innerHTML = `<div style="font-size: 40px;">${reward.image}</div><div>${reward.name}</div>`;
        rewardArea.appendChild(rewardElement);
    });
}

// Helper function to hide all screens
function hideAllScreens() {
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
    });
}

// Show hint modal with appropriate content
function showHint(hintType) {
    const modal = document.getElementById('hints-modal');
    const hintTitle = document.getElementById('hint-title');
    const hintContent = document.getElementById('hint-content');
    
    // Clear previous content
    hintContent.innerHTML = '';
    
    // Set title and content based on hint type
    switch(hintType) {
        case 'months':
            hintTitle.textContent = 'Months of the Year';
            
            const monthsTable = document.createElement('table');
            monthsTable.className = 'hint-table';
            
            // Add header row
            const monthHeader = document.createElement('tr');
            monthHeader.innerHTML = '<th>Name</th><th>Number</th><th>Days</th><th>Season</th>';
            monthsTable.appendChild(monthHeader);
            
            // Add month rows
            hintData.months.forEach(month => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${month.name}</td>
                    <td>${month.number}</td>
                    <td>${month.days}</td>
                    <td>${month.season}</td>
                `;
                monthsTable.appendChild(row);
            });
            
            hintContent.appendChild(monthsTable);
            break;
            
        case 'weekdays':
            hintTitle.textContent = 'Days of the Week';
            
            const weekdaysList = document.createElement('div');
            weekdaysList.className = 'hint-category';
            
            const weekdaysContent = document.createElement('div');
            weekdaysContent.style.display = 'flex';
            weekdaysContent.style.flexWrap = 'wrap';
            weekdaysContent.style.gap = '10px';
            weekdaysContent.style.justifyContent = 'center';
            
            hintData.weekdays.forEach(day => {
                const dayItem = document.createElement('div');
                dayItem.style.padding = '10px 15px';
                dayItem.style.backgroundColor = '#d4e6f1';
                dayItem.style.borderRadius = '5px';
                dayItem.style.fontWeight = 'bold';
                dayItem.textContent = day;
                weekdaysContent.appendChild(dayItem);
            });
            
            weekdaysList.appendChild(weekdaysContent);
            hintContent.appendChild(weekdaysList);
            break;
            
        case 'seasons':
            hintTitle.textContent = 'Seasons of the Year';
            
            const seasonsList = document.createElement('div');
            
            hintData.seasons.forEach(season => {
                const seasonItem = document.createElement('div');
                seasonItem.className = 'hint-category';
                
                const seasonTitle = document.createElement('h3');
                seasonTitle.textContent = season.name;
                
                const seasonDetails = document.createElement('div');
                seasonDetails.innerHTML = `
                    <p><strong>Months:</strong> ${season.months}</p>
                    <p><strong>Characteristics:</strong> ${season.characteristics}</p>
                `;
                
                seasonItem.appendChild(seasonTitle);
                seasonItem.appendChild(seasonDetails);
                seasonsList.appendChild(seasonItem);
            });
            
            hintContent.appendChild(seasonsList);
            break;
            
        case 'zodiacSigns':
            hintTitle.textContent = 'Zodiac Signs';
            
            const zodiacTable = document.createElement('table');
            zodiacTable.className = 'hint-table';
            
            // Add header row
            const zodiacHeader = document.createElement('tr');
            zodiacHeader.innerHTML = '<th>Sign</th><th>Dates</th><th>Element</th>';
            zodiacTable.appendChild(zodiacHeader);
            
            // Add zodiac rows
            hintData.zodiacSigns.forEach(zodiac => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${zodiac.sign}</td>
                    <td>${zodiac.dates}</td>
                    <td>${zodiac.element}</td>
                `;
                zodiacTable.appendChild(row);
            });
            
            hintContent.appendChild(zodiacTable);
            break;
    }
    
    // Show the modal
    modal.style.display = 'block';
    
    // Reset scroll position of hint content
    const hintContentElement = document.getElementById('hint-content');
    if (hintContentElement) {
        hintContentElement.scrollTop = 0;
    }
}

// Close hint modal
function closeHintModal() {
    const modal = document.getElementById('hints-modal');
    modal.style.display = 'none';
}

// Function to handle Android fullscreen mode
function setupMobileOptimizations() {
    // Allow scrolling in specific areas and prevent default touch behavior elsewhere
    document.addEventListener('touchmove', function(event) {
        // Allow scrolling in scrollable areas
        const scrollableElement = event.target.closest('.milestone-list, .hint-content, .game-screen, .modal-content');
        if (!scrollableElement) {
            event.preventDefault();
        }
    }, { passive: false });
    
    // Fix dragging issues by canceling drag events globally
    document.addEventListener('dragstart', function(event) {
        event.preventDefault();
    });
    
    // Fix selection issues for text and elements
    document.addEventListener('selectstart', function(event) {
        if (!event.target.closest('input, textarea')) {
            event.preventDefault();
        }
    });
    
    // Handle orientation changes
    window.addEventListener('orientationchange', handleOrientationChange);
    
    // Improve touch response by adding minimal delay
    document.addEventListener('touchstart', function() {}, {passive: true});
    
    // Apply momentum scrolling to scrollable areas
    applyMomentumScrolling();
    
    // Request fullscreen when launched from home screen
    if (isInStandaloneMode()) {
        enterFullscreen();
    }
    
    // Replace hover styles with active state for touch
    applyTouchFeedback();
}

// Add a function to apply momentum scrolling to scrollable elements
function applyMomentumScrolling() {
    // Add scrolling styles to elements that need them
    const scrollableElements = document.querySelectorAll('.milestone-list, .hint-content, .game-screen, .modal-content');
    
    scrollableElements.forEach(element => {
        element.style.overflowY = 'scroll';
        element.style.WebkitOverflowScrolling = 'touch';
        
        // Handle touch interactions for scroll areas
        element.addEventListener('touchstart', function(e) {
            // Store initial touch position
            this.startY = e.touches[0].pageY;
            this.scrollTop = this.scrollTop;
            this.scrollHeight = this.scrollHeight;
        });
    });
}

// Improve touch feedback with visual indicators and better response time
function applyTouchFeedback() {
    const touchElements = document.querySelectorAll('.btn, .family-member-card, .answer-option, .hint-btn');
    
    touchElements.forEach(el => {
        // Remove any existing event listeners first to avoid duplicates
        const newEl = el.cloneNode(true);
        el.parentNode.replaceChild(newEl, el);
        
        // Add a clear visual indicator for touch
        newEl.addEventListener('touchstart', function(e) {
            this.classList.add('touch-active');
            
            // Don't prevent default on buttons or they won't fire click events
            if (!this.classList.contains('btn') && 
                !e.target.closest('input, textarea, .milestone-list, .hint-content')) {
                e.preventDefault();
            }
        }, {passive: false});
        
        newEl.addEventListener('touchend', function() {
            this.classList.remove('touch-active');
        });
        
        newEl.addEventListener('touchcancel', function() {
            this.classList.remove('touch-active');
        });
        
        // Ensure a click listener for Android - some devices need this redundancy
        if (newEl.id === 'start-game-btn') {
            newEl.addEventListener('click', startGame);
            // Also add direct touchend handler for Android
            newEl.addEventListener('touchend', function(e) {
                e.preventDefault();
                startGame();
            });
        }
    });
    
    // Special direct treatment for the most important buttons to ensure they work
    const criticalButtons = [
        { id: 'start-game-btn', handler: startGame },
        { id: 'start-questions-btn', handler: startQuestions },
        { id: 'next-question-btn', handler: showNextQuestion },
        { id: 'back-to-welcome-btn', handler: goToWelcomeScreen }
    ];
    
    criticalButtons.forEach(button => {
        const el = document.getElementById(button.id);
        if (el) {
            // Remove existing handlers first
            const clonedEl = el.cloneNode(true);
            el.parentNode.replaceChild(clonedEl, el);
            
            // Add direct handlers for both click and touch events
            clonedEl.addEventListener('click', button.handler);
            clonedEl.addEventListener('touchend', function(e) {
                e.preventDefault();
                button.handler();
            });
        }
    });
}

// Check if the web app is in standalone mode (launched from home screen)
function isInStandaloneMode() {
    return (window.matchMedia('(display-mode: standalone)').matches) || 
           (window.navigator.standalone) || 
           (document.referrer.includes('android-app://'));
}

// Handle device orientation changes
function handleOrientationChange() {
    setTimeout(function() {
        // Adjust layout based on orientation
        const isLandscape = window.innerWidth > window.innerHeight;
        
        if (isLandscape) {
            document.body.classList.add('landscape');
            document.body.classList.remove('portrait');
        } else {
            document.body.classList.add('portrait');
            document.body.classList.remove('landscape');
        }
        
        // Force redraw to fix potential rendering issues on orientation change
        const container = document.getElementById('app-container');
        container.style.display = 'none';
        setTimeout(() => { container.style.display = ''; }, 10);
    }, 300); // Small delay to let the orientation change complete
}

// Enter fullscreen mode
function enterFullscreen() {
    const docEl = document.documentElement;
    
    if (docEl.requestFullscreen) {
        docEl.requestFullscreen();
    } else if (docEl.webkitRequestFullscreen) {
        docEl.webkitRequestFullscreen();
    } else if (docEl.mozRequestFullscreen) {
        docEl.mozRequestFullscreen();
    } else if (docEl.msRequestFullscreen) {
        docEl.msRequestFullscreen();
    }
}

// Exit fullscreen mode
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

// Toggle fullscreen mode
function toggleFullscreen() {
    if (document.fullscreenElement || 
        document.webkitFullscreenElement ||
        document.mozFullScreenElement) {
        exitFullscreen();
    } else {
        enterFullscreen();
    }
}

// Initialize the game when the page loads
window.addEventListener('load', function() {
    init(); // Original initialization
    setupMobileOptimizations(); // Add mobile/tablet optimizations
    
    // Initial orientation check
    handleOrientationChange();
});