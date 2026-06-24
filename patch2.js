const fs = require('fs');
const path = 'E:/WEBSITE/wisesa/kopi/wisesa/assets/index-BV-0ijXJ.js';
let js = fs.readFileSync(path, 'utf8');

// SVG data URIs for coffee products
function svgDataUri(svg) {
  return 'data:image/svg+xml,' + encodeURIComponent(svg);
}

const rootSvg = svgDataUri('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="#5C3A21"/><text x="50" y="50" text-anchor="middle" dominant-baseline="central" font-size="48" font-family="serif" fill="#F5E6D0" font-style="italic">R</text></svg>');
const bloomSvg = svgDataUri('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="#C8924B"/><text x="50" y="50" text-anchor="middle" dominant-baseline="central" font-size="48" font-family="serif" fill="#FFF8E7" font-style="italic">B</text></svg>');
const veilSvg = svgDataUri('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="#6B2737"/><text x="50" y="50" text-anchor="middle" dominant-baseline="central" font-size="48" font-family="serif" fill="#E8D5D0" font-style="italic">V</text></svg>');

// 1. Replace the Vk array (3 AI products -> 3 coffee products)
const oldVk = 'const Vk=[{name:"ChatGPT",description:"Answers in seconds \u2014 but whose perspective shapes the narrative?",iconSrc:Yc.chatgpt},{name:"Perplexity",description:"Research-grade answers with citations \u2014 the new default for discovery.",iconSrc:Yc.perplexity},{name:"Google AI",description:"Search reimagined \u2014 summaries before you click, context before you commit.",iconSrc:Yc.googleAi}]';
const newVk = 'const Vk=[{name:"Wisesa: ROOT",description:"Return to the soil, where everything begins.",iconSrc:"' + rootSvg + '"},{name:"Wisesa: BLOOM",description:"Life is not a race, but a rhythm of grace.",iconSrc:"' + bloomSvg + '"},{name:"Wisesa: VEIL",description:"True transformation happens in the quiet dark.",iconSrc:"' + veilSvg + '"}]';

let c = 0;
while (js.includes(oldVk)) { js = js.replace(oldVk, newVk); c++; }
console.log('Vk array replaced:', c);

// 2. Replace subtitle
const oldSub = 'AI assistants now shape how people discover ideas, brands, and voices. Your perspective needs a home that search engines cannot replace.';
const newSub = 'Three expressions of the same earth. Each process reveals a different story of the bean.';
c = 0;
while (js.includes(oldSub)) { js = js.replace(oldSub, newSub); c++; }
console.log('Subtitle replaced:', c);

// 3. Replace bottom text
const oldBottom = "If you don't answer the questions, someone else will.";
const newBottom = 'Every bean has a voice. Listen closely.';
c = 0;
while (js.includes(oldBottom)) { js = js.replace(oldBottom, newBottom); c++; }
console.log('Bottom text replaced:', c);

// 4. Replace the Kk array (solution cards)
const oldKk = 'const Kk=[{title:"Curated Feed",description:"Hand-picked stories and insights delivered on your schedule \u2014 depth over noise."},{title:"Writer Tools",description:"Compose, schedule, and analyze newsletters with a workflow built for clarity."},{title:"Community",description:"Readers and writers in one loop \u2014 replies, threads, and shared discovery."},{title:"Distribution",description:"Reach inboxes, archives, and syndication channels from a single dashboard."}]';
const newKk = 'const Kk=[{title:"The Art of Slow Maturation",description:"Wisesa Arabica is born in the mist-shrouded highlands, where cooler temperatures whisper patience to the coffee cherries. This prolonged ripening process allows the trees to slowly infuse the beans with natural sugars, resulting in dense, hard beans (Strictly Hard Beans) that hold a reservoir of complex floral, fruity, and vibrant acidic notes."},{title:"The Human Touch of Perfection",description:"We renounce the haste of mechanical harvesting. Every single cherry destined for Wisesa is selectively hand-picked at the absolute zenith of its ripeness\u2014vibrant crimson red. This meticulous discipline ensures the highest Brix (sugar) content, unlocking an unrivaled, pristine natural sweetness in your cup."},{title:"Mastering the Evolution of Flavor",description:"Upon harvest, the cherries instantly enter a controlled sanctuary of processing to capture their purest character. Whether through the pristine clarity of the Washed Process, the uninhibited wild fruitiness of the Natural Process, or the harmonious, honeyed balance of the Honey Process, each method is executed with uncompromising hygiene and mastery."},{title:"The Quest for Zero Defects",description:"Before the green beans meet the fire of our roaster, they undergo a ruthless multi-stage sorting process. Adhering to the stringent standards of the Specialty Coffee Association (SCA), we ensure our beans are entirely free from primary defects, leaving only the most flawless, immaculate beans to define our batches."},{title:"Preserving the Soul of the Bean",description:"Time and climate are carefully measured during the drying phase to lock the beans into the golden moisture window of 10% to 12%. This exact science protects the green beans from atmospheric spoilage while perfectly preserving the volatile aromatic compounds that will erupt into life during roasting."}]';
c = 0;
while (js.includes(oldKk)) { js = js.replace(oldKk, newKk); c++; }
console.log('Kk array replaced:', c);

// 5. Replace SOLUTION section heading
const oldHeading1 = 'Where every cup writes a new chapter.';
const newHeading1 = 'Crafted by Nature, Perfected by Hand.';
c = 0;
while (js.includes(oldHeading1)) { js = js.replace(oldHeading1, newHeading1); c++; }
console.log('Heading 1 replaced:', c);

const oldHeading2 = 'Your life\\u2019s moments, roasted to perfection.';
const newHeading2 = 'From seed to cup, a story of devotion.';
c = 0;
while (js.includes(oldHeading2)) { js = js.replace(oldHeading2, newHeading2); c++; }
console.log('Heading 2 replaced:', c);

// 6. Replace the grid class and card structure
const oldGrid = 'X.jsx("div",{className:"grid md:grid-cols-4 gap-8",children:Kk.map((i,e)=>X.jsxs(gt.div,{...wt(.2+e*.06),children:[X.jsx("h3",{className:"font-semibold text-base mb-2 text-white",children:i.title}),X.jsx("p",{className:"text-white/70 text-sm",children:i.description})]},i.title))})';
const newGrid = 'X.jsx("div",{className:"max-w-4xl mx-auto space-y-14 text-left",children:Kk.map((i,e)=>X.jsxs(gt.div,{...wt(.2+e*.06),children:[X.jsx("h3",{className:"font-serif italic text-2xl md:text-3xl text-white mb-4",children:i.title}),X.jsx("p",{className:"text-white/80 text-base md:text-lg leading-relaxed",children:i.description})]},i.title))})';
c = 0;
while (js.includes(oldGrid)) { js = js.replace(oldGrid, newGrid); c++; }
console.log('Grid structure replaced:', c);

// Verify syntax
try {
  new Function(js);
  console.log('SYNTAX OK');
} catch(e) {
  console.log('SYNTAX ERROR:', e.message.substring(0, 120));
}

fs.writeFileSync(path, js, 'utf8');
console.log('Done!');
