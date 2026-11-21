/* ===== YOUR CONTENT =====
   Edit the text, links and image names below to update the site.
   Images live in the /images folder. Videos: ig = Instagram reel code,
   or add src:"videos/name.mp4" (an .mp4 in a /videos folder) or yt:"VIDEO_ID" for YouTube. */
const CAMPAIGNS=[
 {t:"Girls Beyond Limit 2.0",img:"images/gbl.jpg",tag:"SheCanDo: Dream. Solve. Lead.",d:"The campaign aimed to reach girls across 20 states in Nigeria. My role involved coordinating state-level volunteer recruitment, exploring creative approaches to securing sponsorships, and overseeing the social media team to support campaign awareness and communication.",link:"presentations/gbl-media-strategy.pdf"},
 {t:"GOtv Jam Festival",img:"images/jam.jpg",tag:"Boxing and entertainment festival",d:"A boxing and entertainment festival campaign. I collaborated with the digital media team to develop creative marketing ideas, create promotional content, and explore influencer collaborations to increase awareness and encourage ticket purchases online.",link:"presentations/gotv-campaign-roadmap.pdf"},
 {t:"BBN Prize Presentation",img:"images/bbn.jpg",tag:"Event coverage for NBG Africa",d:"An event coverage project documenting the Big Brother prize presentation for NBG Africa's digital platforms. I worked with the team on event coverage and content production, capturing key moments and helping develop engaging content to communicate the event experience to the brand's online audience.",reels:["DPgUqX1iDwQ","DPgVEQkCFUQ","DPgXUXqCLxG","DPgXdz2iPQ1","DPgYtwPiBE_"],link:"presentations/bbn-live-prize-presentation.pdf"}
];
/* Videos: ig = Instagram reel code. src = an .mp4 in the /videos folder (plays on the site; falls back to Instagram if the file is missing). */
const VIDEOS=[
 {t:"TNT Files",s:"Video coverage",img:"images/tnt.jpg",ig:"DeZeYfFMjew"},
 {t:"Multichoice x Kuramo College",s:"Video content",img:"images/multichoice.jpg",ig:"DQZ21B8iGqg"},
 {t:"Cakes by Yosola",s:"Video coverage",img:"images/yosola.jpg",ig:"Debpv1ABtU2"},
 {t:"NBG Africa x BBN",s:"Video coverage",img:"images/nbg-interview.jpg",ig:"DPhFcFOCFUJ"}
];
const POSTS=[
 {t:"Iyabo Ojo and Priscilla have always been the iconic mother-daughter duo",img:"images/post1.jpg",url:"https://www.instagram.com/p/DQ338VQCPGA/"},
 {t:"Who do you think slayed the “Beez in the Trap” trend?",img:"images/post2.jpg",url:"https://www.instagram.com/p/DQrrJHLiFaR/"},
 {t:"Unforgettable Big Brother friendships that defined the show",img:"images/post3.jpg",url:"https://www.instagram.com/p/DPvy5vekW5Q/"},
 {t:"Iconic siblings that keep serving family goals",img:"images/post4.jpg",url:"https://www.instagram.com/p/DQJDnNLiN0q/"}
];
/* Personal brand posts: img = cover image in /images, url = the Instagram link. */
const PERSONAL=[
 {img:"images/personal1.jpg",url:"https://www.instagram.com/reel/DFNY4tVpJPC/"},
 {img:"images/personal2.jpg",url:"https://www.instagram.com/reel/DfZyiwIA8oj/"},
 {img:"images/personal3.jpg",url:"https://www.instagram.com/p/Dfsr5CXAMZw/"},
 {img:"images/personal4.jpg",url:"https://www.instagram.com/reel/DeZIYuJMI9b/"}
];
/* Editorial: replace the sample entries with your real articles. body = paragraphs. link = optional Google Doc link. */
const EDITORIAL=[
 {
  "t": "Celebrity Feuds That Broke the Internet",
  "tag": "",
  "body": [
   "Nothing is more entertaining than the chaos one celebrity can unleash on another. It’s seeing a side of their menace you never get to witness normally. It makes them look more relatable, and honestly, we are here for it. We love a good drama.",
   "It’s not exciting when celebrities are friends. If they’re cordial with each other, everything is fine, but if they are rivals, all hell breaks loose: sub tweets, diss tracks, bold callouts, tense encounters, you name it—it’s all going to go down.",
   "In NBG’s quest to give you all the tea, we have made a breakdown of some of the biggest celebrity feuds that had the internet in a frenzy.",
   "## 1. Donald Trump vs. Elon Musk",
   "The world’s richest man and the world’s most powerful man in a feud on social media? Shocked? Yes. Disappointing? No. After what seemed like a strong bromance, things went downhill just six months after the 2024 election over a spending bill championed by Trump, which Musk felt would greatly increase the federal deficit. The beef was initiated by Elon Musk, who repeatedly threatened to create a new political party if the agenda bill passes.",
   "Other prominent figures from the president’s and the tech leader’s respective orbits also joined in, some taking sides and others calling for the feud to end. Just about a week after it began, Musk apologized for his very public criticism of Trump, but for about that period of time, it was a sight to behold.",
   "## 2. Nicki Minaj vs. Cardi B",
   "Everyone knows Nicki Minaj is the number one mean girl of the century, picking a major fight with everyone. But the one that caught our eye the most is her long-term rivalry with Cardi B.",
   "In 2018, sparks flew between two of the biggest female rappers, and this was just not based on diss tracks; they had solely made it their goal to avoid each other. They couldn’t even be caught in the same room for their motorsport feature with the Migos.",
   "Fast forward to 2025, when everything finally exploded on Twitter. Not only were they going bar-for-bar at each other, but their children also got dragged into the mess. At that point, nobody was holding back.",
   "The two biggest rap queens made sure to be very creative with their use of words; after all, they are rappers indeed.",
   "## 3. Kendrick Lamar vs. Drake",
   "Speaking of rappers, another feud that completely shook the industry was Kendrick Lamar vs. Drake.",
   "From “Like That” to “Not Like Us” to the Pop Out and unprecedented lawsuits, the whole situation had us gagged! With a single guest verse on Future and Metro Boomin’s “Like That,” Kendrick launched a public and deeply personal war against Drake. And yes, Drake responded, but many would argue that was his biggest mistake.",
   "His response led to many more tracks from Kendrick. Kendrick didn’t just win musically; he went on to collect Grammy Awards and then publicly dissed Drake AGAIN at the Super Bowl halftime show.",
   "To crown it all, Drake lost his lawsuit with Universal Music Group.",
   "## 4. Will Smith vs. Chris Rock",
   "If one slap has ever echoed across the globe, it would be the one Will Smith delivered to Chris Rock.",
   "During the 94th Academy Awards, Smith casually walked onstage and slapped Rock across the face after he made an unscripted joke about Jada Pinkett Smith’s shaved head, a result of alopecia.",
   "But this feud didn’t start that night. According to Smith supporters, Chris Rock had been throwing shade at Jada as far back as 2016 during his hosting gig at the Oscars, where he mocked her boycott of the event.",
   "So when did the slap finally happen? The internet collectively froze.",
   "## Why Do We Love the Drama?",
   "Maybe it’s the chaos. Maybe it’s entertainment.",
   "Celebrity feuds remind us that fame doesn’t erase ego, insecurity, pride, or emotion. It only magnifies it publicly.",
   "And while we act shocked, the fact never changes that the internet will forever be prepared for a celebrity beef served hot, messy, and very public."
  ],
  "link": ""
 },
 {
  "t": "Is Age Really Just a Number?",
  "tag": "",
  "sub": "A 20-year-old woman shares the paradox of falling in love with older men",
  "body": [
   "Before you scream, “YES, older men are always better!” or “No, they’re the real devils!”",
   "Let’s break down what truly comes with loving a man older than you—the paradox of it all.",
   "Gen Z men are still figuring themselves out, are often emotionally confused, and tend to value vibes rather than commitment. Hence, behind every woman in a mature relationship is literally an \"older man.\"",
   "Because let’s be honest: Gen Z women believe “men are scum,” so it’s about time we explore Millennials instead. But does that actually constitute a better choice?",
   "These observations are based on general trends that have been analysed regarding older men, not your specific “Uncle Michael.” Calm down.",
   "## 1. The Chase is Always the Highlight",
   "Nobody chases a woman the way an older man will. He is always knowledgeable in the game of chase and yearning. “20 questions?” No. “Come over to my place for a meal while we talk?” Definitely not. But reading your mind and knowing the proper way you want to be approached and treated? A big yes.",
   "The first goal is always to get you hooked. There could be other motives, but what comes first is how to make you feel seen and not scanned.",
   "But here’s the flip side: They don’t know when to draw the line in the chase. It’s as if ‘NO’ is a serious bruise to their ego, one they are not willing to take.",
   "## 2. They are Goal-Oriented",
   "They don’t dawdle; they know what they are looking for and are not here to waste your time. Period. If they are not feeling it, he isn’t as likely to waste time stringing a woman along just for the heck of it.",
   "But if they’re into you? They move with intention.",
   "They’re quick to become exclusive and seal the deal, especially with marriage. This could come across as pressure to the ladies. If you’re not ready, priorities will clash, and it becomes a silent war.",
   "## 3. Experience is their Middle Name",
   "Whatever you think you’ve lived through, they’ve experienced it twice, maybe three times.",
   "Hence, there’s always this sense of authority around them, one that is a bit too hard to shake off. He is able to give you the advice and full support you need—something a man your age can’t offer. But then, it all boils down to whether this undermines respect in the relationship or not.",
   "Nobody is prouder than a man who knows his worth and level, and best believe they will show it off. It can be sexy, but it can also be aggravating—the kind that leaves you angry but not angry enough to leave him—and toxicity starts. The level of disrespect and gaslighting that could be faced in such a relationship could be the deal-breaker for some women.",
   "## 4. You Know Exactly What You’re Getting",
   "If you’re choosing based on aesthetics only, you might miss out on someone whose character outlives his hairline.",
   "Dating your age mate is like buying a mystery box. Dating an older man? You can see the final draft.",
   "I mean, those young men who look full of life now... you might as well know what you are getting into with older men whose appearance is already accurate. Their full hair could become a receding hairline, and we can’t be too sure we want that for our kids, right?",
   "We need to help the “girlies” love what they can look at until the end of time. Then again, looks will fade, but your peace doesn’t.",
   "## 5. Can Both Worlds Co-exist?",
   "Dating older means navigating different generations, values, and even friend circles. You could find yourself shrinking to fit his world, instead of both worlds merging equally.",
   "Both parties tend to forget they have different circles, especially in terms of age. It always boils down to if both can live in each person’s world, something a lot of relationships find hard to pull off. There’s a high chance you’ll start discovering things you never knew about all those so-called “experiences” that shaped who he is today.",
   "## So, What is Reality?",
   "It’s truly not about age. A good man is a good man. A manipulator is a manipulator. Age doesn’t change character; it only reveals it faster.",
   "Older men come with intentionality, experience, and clarity, but they can also come with ego, control, and unhealed habits built long before you arrived. The harsh reality is there are no rules or playbooks to understand a man. It all boils down to how events turn out.",
   "You can find love in your age group.",
   "You can find love outside it.",
   "Age is a factor, but it should never be the guarantee."
  ],
  "link": ""
 }
];
