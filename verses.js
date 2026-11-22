// Footer verse: one of the 30 verses from YouVersion's "30 Famous Bible Verses Explained"
// plan (NKJV), picked at random on each page load.
const VERSES = [
  // Filled from tmp/verses-nkjv.json once the list is confirmed.
];

(function showVerse() {
  if (!VERSES.length) return;
  const v = VERSES[Math.floor(Math.random() * VERSES.length)];
  document.getElementById("verse-text").textContent = "“" + v.text + "”";
  document.getElementById("verse-ref").textContent = v.ref + " (NKJV)";
})();
