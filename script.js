const ayurvedicTips = [
  "Start your day with warm water and lemon.",
  "Sleep before 10 PM to balance your body’s doshas.",
  "Use turmeric daily for better immunity.",
  "Practice yoga and pranayama for mental clarity.",
  "Avoid eating heavy meals after sunset."
];

window.onload = () => {
  const randomTip = ayurvedicTips[Math.floor(Math.random() * ayurvedicTips.length)];
  alert("🌿 Ayurvedic Tip: " + randomTip);
};