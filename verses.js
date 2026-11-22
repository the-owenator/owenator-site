// Footer verse: one of the 30 verses from YouVersion's "30 Famous Bible Verses Explained"
// plan (NKJV), picked at random on each page load.
const VERSES = [
  { ref: "Genesis 1:1", text: "In the beginning God created the heavens and the earth." },
  { ref: "Exodus 14:14", text: "The LORD will fight for you, and you shall hold your peace." },
  { ref: "Psalm 23:1", text: "The LORD is my shepherd; I shall not want." },
  { ref: "Psalm 46:1", text: "God is our refuge and strength, A very present help in trouble." },
  { ref: "Psalm 119:105", text: "Your word is a lamp to my feet And a light to my path." },
  { ref: "Proverbs 3:5-6", text: "Trust in the LORD with all your heart, And lean not on your own understanding; In all your ways acknowledge Him, And He shall direct your paths." },
  { ref: "Isaiah 40:31", text: "But those who wait on the LORD Shall renew their strength; They shall mount up with wings like eagles, They shall run and not be weary, They shall walk and not faint." },
  { ref: "Jeremiah 29:11", text: "For I know the thoughts that I think toward you, says the LORD, thoughts of peace and not of evil, to give you a future and a hope." },
  { ref: "Lamentations 3:22-23", text: "Through the LORD’s mercies we are not consumed, Because His compassions fail not. They are new every morning; Great is Your faithfulness." },
  { ref: "Micah 6:8", text: "He has shown you, O man, what is good; And what does the LORD require of you But to do justly, To love mercy, And to walk humbly with your God?" },
  { ref: "Luke 2:11", text: "For there is born to you this day in the city of David a Savior, who is Christ the Lord." },
  { ref: "Matthew 5:14", text: "You are the light of the world. A city that is set on a hill cannot be hidden." },
  { ref: "Matthew 7:1", text: "Judge not, that you be not judged." },
  { ref: "Matthew 11:28", text: "Come to Me, all you who labor and are heavy laden, and I will give you rest." },
  { ref: "Matthew 22:37-39", text: "Jesus said to him, ‘“You shall love the LORD your God with all your heart, with all your soul, and with all your mind.” This is the first and great commandment. And the second is like it: “You shall love your neighbor as yourself.”’" },
  { ref: "John 3:16", text: "For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life." },
  { ref: "John 14:6", text: "Jesus said to him, ‘I am the way, the truth, and the life. No one comes to the Father except through Me.’" },
  { ref: "Matthew 28:19-20", text: "Go therefore and make disciples of all the nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all things that I have commanded you; and lo, I am with you always, even to the end of the age." },
  { ref: "Romans 3:23-24", text: "for all have sinned and fall short of the glory of God, being justified freely by His grace through the redemption that is in Christ Jesus." },
  { ref: "Romans 8:28", text: "And we know that all things work together for good to those who love God, to those who are the called according to His purpose." },
  { ref: "Romans 12:2", text: "And do not be conformed to this world, but be transformed by the renewing of your mind, that you may prove what is that good and acceptable and perfect will of God." },
  { ref: "1 Corinthians 13:4-7", text: "Love suffers long and is kind; love does not envy; love does not parade itself, is not puffed up; does not behave rudely, does not seek its own, is not provoked, thinks no evil; does not rejoice in iniquity, but rejoices in the truth; bears all things, believes all things, hopes all things, endures all things." },
  { ref: "2 Corinthians 5:17", text: "Therefore, if anyone is in Christ, he is a new creation; old things have passed away; behold, all things have become new." },
  { ref: "Galatians 5:22-23", text: "But the fruit of the Spirit is love, joy, peace, longsuffering, kindness, goodness, faithfulness, gentleness, self-control. Against such there is no law." },
  { ref: "Ephesians 2:8-9", text: "For by grace you have been saved through faith, and that not of yourselves; it is the gift of God, not of works, lest anyone should boast." },
  { ref: "Philippians 4:13", text: "I can do all things through Christ who strengthens me." },
  { ref: "Philippians 4:6-7", text: "Be anxious for nothing, but in everything by prayer and supplication, with thanksgiving, let your requests be made known to God; and the peace of God, which surpasses all understanding, will guard your hearts and minds through Christ Jesus." },
  { ref: "2 Timothy 1:7", text: "For God has not given us a spirit of fear, but of power and of love and of a sound mind." },
  { ref: "James 1:2-3", text: "My brethren, count it all joy when you fall into various trials, knowing that the testing of your faith produces patience." },
  { ref: "Revelation 21:4", text: "And God will wipe away every tear from their eyes; there shall be no more death, nor sorrow, nor crying. There shall be no more pain, for the former things have passed away." },
];

(function showVerse() {
  if (!VERSES.length) return;
  const v = VERSES[Math.floor(Math.random() * VERSES.length)];
  document.getElementById("verse-text").textContent = "“" + v.text + "”";
  document.getElementById("verse-ref").textContent = v.ref + " (NKJV)";
})();
