const fs = require('fs');
const path = 'E:/WEBSITE/wisesa/kopi/wisesa/assets/index-BV-0ijXJ.js';
let js = fs.readFileSync(path, 'utf8');

// 1. "Get Inspired with Us" -> "Wisesa Coffee Beans"
const oldTitle = '["Get ",X.jsx("span",{className:"font-serif italic font-normal",children:"Inspired"})," with Us"]';
const newTitle = '["Wisesa Coffee Beans"]';
let c = 0;
while (js.includes(oldTitle)) { js = js.replace(oldTitle, newTitle); c++; }
console.log('Title replaced:', c);

// 2. Subtitle replacement
const oldSub = '"Join our feed for meaningful updates, news around technology and a shared journey toward depth and direction."';
const newSub = '"Your life\'s moments, roasted to perfection and Taste the essence of your journey."';
c = 0;
while (js.includes(oldSub)) { js = js.replace(oldSub, newSub); c++; }
console.log('Subtitle replaced:', c);

// 3. "Search has changed. Have you?" -> "Our Signature Beans"
const oldSearch = '["Search has ",X.jsx("span",{className:"font-serif italic font-normal",children:"changed."})," Have you?"]';
const newSearch = '["Our Signature Beans"]';
c = 0;
while (js.includes(oldSearch)) { js = js.replace(oldSearch, newSearch); c++; }
console.log('Search->Signature replaced:', c);

// 4. Button target: philosophy -> how-it-works
const oldPh = 'onClick:()=>Cl("philosophy")';
const newPh = 'onClick:()=>Cl("how-it-works")';
c = 0;
while (js.includes(oldPh)) { js = js.replace(oldPh, newPh); c++; }
console.log('Button target fixed:', c);

// Verify syntax
try {
  new Function(js);
  console.log('SYNTAX OK');
} catch(e) {
  console.log('SYNTAX ERROR:', e.message.substring(0, 120));
}

fs.writeFileSync(path, js, 'utf8');
console.log('Done!');
