document.addEventListener('DOMContentLoaded', function() {
            const questions = [
  {
    text: "How will you improve the pick-up experience of Uber at Dubai Mall?",
    tag: "product-design"
  },
  {
    text: "How will you improve Google Pay specially for paying bills?",
    tag: "product-design"
  },
  {
    text: "Design a loyalty program for Blinkit that increases user retention.",
    tag: "product-design"
  },
  {
    text: "How would you design a mobile app for retired individuals that just helps them handle loneliness and live happily?",
    tag: "product-design"
  },
  {
    text: "How would you design a payment app for kids of 12 - 18 yrs of age?",
    tag: "product-design"
  },
  {
    text: "How would you build a app for kids that encourages learnings around savings and investment?",
    tag: "product-design"
  },
  {
    text: "Design a feature for Spotify that helps users discover new artists based on their listening habits.",
    tag: "product-design"
  },
  {
    text: "How would you improve the food delivery experience for customers with dietary restrictions?",
    tag: "product-design"
  },
  {
    text: "Create a feature for a Uber or Ola that prioritizes safety for late-night passengers.",
    tag: "product-design"
  },
  {
    text: "How would you improve the online learning experience for a massive open online course (MOOC) platform?",
    tag: "product-design"
  },
  {
    text: "Should Swiggy Instamart enter into e-commerce? If yes, why?",
    tag: "product-strategy"
  },
  {
    text: "How should Zerodha position itself against new entrants in the stock trading space?",
    tag: "product-strategy"
  },
  {
    text: "Propose a market entry strategy for Cred to expand into international markets like the Middle East, Dubai etc.",
    tag: "product-strategy"
  },
  {
    text: "How should Netflix respond to the increasing competition in the streaming space from Disney+, Amazon Prime, and others?",
    tag: "product-strategy"
  },
  {
    text: "Should Airbnb expand into long-term / 12 months+ rentals? If yes, how would you approach this expansion?",
    tag: "product-strategy"
  },
  {
    text: "Propose a strategy for Spotify to increase its revenue beyond music streaming.",
    tag: "product-strategy"
  },
  {
    text: "How should LinkedIn diversify its product offerings to maintain growth in the face of emerging professional networking platforms?",
    tag: "product-strategy"
  },
  {
    text: "How should Slack respond to the increasing integration of communication tools within productivity suites like Microsoft 365?",
    tag: "product-strategy"
  },
  {
    text: "How should YouTube monetize its platform more effectively without compromising user experience?",
    tag: "product-strategy"
  },
  {
    text: "How should Duolingo expand its product offerings to capture a larger share of the language learning market?",
    tag: "product-strategy"
  },
  {
    text: "Do you think CRED should expand into investments business like Zerodha? If yes, how will you go about it.",
    tag: "product-strategy"
  },
  {
    text: "Uber Eats notices a 15% increase in order cancellations over the past month. How would you investigate the cause and propose solutions?",
    tag: "execution"
  },
  {
    text: "Spotify observes that podcast listener retention has dropped significantly. What could be the reasons, and how would you approach solving this issue?",
    tag: "execution"
  },
  {
    text: "Airbnb sees a decline in bookings for urban properties while rural properties are thriving. How would you analyze this trend and what strategies would you propose to address it?",
    tag: "execution"
  },
  {
    text: "LinkedIn notices a decrease in user engagement with its newsfeed. How would you diagnose the problem and what steps would you take to improve engagement?",
    tag: "execution"
  },
  {
    text: "Amazon Prime Video experiences a higher than usual churn rate after users finish watching a popular series. How would you investigate this and what retention strategies would you suggest?",
    tag: "execution"
  },
  {
    text: "Paytm witnesses a sudden drop in daily transactions, how will you identify the root cause and build initiatives to solve the same?",
    tag: "execution"
  },
  {
    text: "Myntra observes a decrease in new user signups by 8%. What factors could be impacting signups, and how would you investigate them?",
    tag: "execution"
  },
  {
    text: "Moj experiences a decline in user-generated content creation. How would you approach this problem? What data analysis techniques will you use to understand the reason behind this decrease?",
    tag: "execution"
  },
  {
    text: "Google Maps sees a decrease in user-submitted reviews and ratings. How would you investigate this issue and what strategies would you propose to encourage more user contributions?",
    tag: "execution"
  },
  {
    text: "Netflix observes that viewers are spending less time browsing before selecting content. How would you analyze this behavior change and what improvements would you suggest for the content discovery experience?",
    tag: "execution"
  },
  {
    text: "Coursera sees a decline in course completion rates. How would you investigate the factors contributing to this and what strategies would you suggest to improve completion rates?",
    tag: "execution"
  },
  {
    text: "Flipkart observes a higher than usual cart abandonment rate during its Big Billion Days sale. What could be the reasons, and how would you approach solving this problem?",
    tag: "execution"
  },
  {
    text: "PhonePe sees a sudden drop in UPI transactions in a particular region. How would you go about identifying the root cause and proposing solutions?",
    tag: "execution"
  },
  {
    text: "Ola notices a decrease in driver availability during peak hours in major metros. What factors might be contributing to this, and how would you address the issue?",
    tag: "execution"
  },
  {
    text: "Swiggy observes that its newly launched Swiggy Instamart service is not gaining traction in certain cities. How would you investigate the reasons and propose strategies to improve adoption?",
    tag: "execution"
  },
  {
    text: "BigBasket observes an increase in negative reviews related to product quality. How would you analyze this trend and what steps would you take to address the issue?",
    tag: "execution"
  },
  {
    text: "What metrics would you track to measure the success of a new feature on Swiggy that allows users to tip delivery riders?",
    tag: "analytical"
  },
  {
    text: "What metrics do you think Google Pay tracks every day?",
    tag: "analytical"
  },
  {
    text: "How would you measure the impact of CRED's cashback offers on user retention?",
    tag: "analytical"
  },
  {
    text: "What KPIs would you track to assess the performance of Ola's auto booking service?",
    tag: "analytical"
  },
  {
    text: "How would you measure the effectiveness of Lenskart's AR-powered virtual try-on feature?",
    tag: "analytical"
  },
  {
    text: "What metrics would you use to evaluate the success of Zomato's loyalty program?",
    tag: "analytical"
  },
  {
    text: "How would you measure the effectiveness of Flipkart's new voice search feature?",
    tag: "analytical"
  },
  {
    text: "What metrics would you use to evaluate the success of Cred's expansion into travel bookings?",
    tag: "analytical"
  },
  {
    text: "How would you measure the effectiveness of Netflix's personalized recommendation algorithm?",
    tag: "analytical"
  },
  {
    text: "How would you measure the impact of Spotify's podcast investment strategy on user engagement and retention?",
    tag: "analytical"
  },
  {
    text: "What metrics would you use to evaluate the success of Apple's App Tracking Transparency feature?",
    tag: "analytical"
  },
  {
    text: "How would you measure the effectiveness of TikTok's advertising platform for small businesses?",
    tag: "analytical"
  },
  {
    text: "How would you measure the impact of Slack's Huddles feature on team collaboration and productivity?",
    tag: "analytical"
  },
  {
    text: "What KPIs would you track to assess the performance of Notion's AI features in improving user productivity?",
    tag: "analytical"
  },
  {
    text: "How would you measure the impact of Duolingo's gamification elements on user learning outcomes and engagement?",
    tag: "analytical"
  }
];

            

            let currentCategory = 'all';
            let currentQuestions = [];
            let timer;

            const startScreen = document.getElementById('start-screen');
            const questionScreen = document.getElementById('question-screen');
            const logoElement = document.getElementById('logo');
            const categoryButtons = document.querySelectorAll('.category-btn');
            const footerLinks = document.querySelectorAll('.footer-link');

            function shuffleArray(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
            }

            function filterQuestions() {
                if (currentCategory === 'all') {
                    currentQuestions = [...questions];
                } else {
                    currentQuestions = questions.filter(q => q.tag === currentCategory);
                }
                shuffleArray(currentQuestions);
            }

            function showQuestion() {
                if (currentQuestions.length === 0) {
                    filterQuestions();
                }
                
                const question = currentQuestions.pop();
                document.getElementById('question').textContent = question.text;
                document.getElementById('tag').textContent = question.tag;
                document.getElementById('time').textContent = '0:00';
                startTimer();
            }

            function startTimer() {
                let seconds = 0;
                clearInterval(timer);
                timer = setInterval(() => {
                    seconds++;
                    const minutes = Math.floor(seconds / 60);
                    const remainingSeconds = seconds % 60;
                    document.getElementById('time').textContent = 
                        `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
                }, 1000);
            }

            function resetApp() {
                startScreen.classList.remove('hidden');
                questionScreen.classList.add('hidden');
                clearInterval(timer);
            }

            function startQuestions(category) {
                currentCategory = category;
                filterQuestions();
                startScreen.classList.add('hidden');
                questionScreen.classList.remove('hidden');
                showQuestion();
            }

            function handleNavigation(e) {
                if (!questionScreen.classList.contains('hidden')) {
                    if (e.type === 'keydown' && (e.key !== 'Enter' && e.key !== ' ')) {
                        return;
                    }
                    if (e.target.closest('.logo') || e.target.closest('footer')) {
                        return;
                    }
                    e.preventDefault();
                    showQuestion();
                }
            }

            // Event Listeners
            logoElement.addEventListener('click', resetApp);

            categoryButtons.forEach(button => {
                button.addEventListener('click', (e) => startQuestions(e.target.dataset.category));
            });

            footerLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    resetApp();
                });
            });

            // Navigation events
            document.addEventListener('keydown', handleNavigation);
            document.addEventListener('click', handleNavigation);
            document.addEventListener('touchstart', handleNavigation);
        });