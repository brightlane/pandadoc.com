const fs = require('fs');
const path = require('path');
const affiliates = require('./lib/affiliates-validator');
const agent1 = require('./agents/agent-1-keyword');
const agent10 = require('./agents/agent-10-policy');

const PALM_LINK = 'https://pandadoc.partnerlinks.io/Palm';  // FIXED HERE
const ELITE_GEOS = ['france', 'germany', 'brazil'];

async function generateElitePages() {
  console.log('🔥 Generating 150 Elite /Palm pages...');
  
  for (const geo of ELITE_GEOS) {
    const keywords = await agent1.generatePredictiveKeywords(geo);
    
    for (let i = 0; i < 50; i++) {
      const pageType = ['pricing', 'demo', 'vs-docusign'][i % 3];
      const title = `${keywords[0]} ${pageType.toUpperCase()}`;
      
      let content = `
        <h1>${title}</h1>
        <p>Best PandaDoc ${pageType} for ${geo} businesses 2026.</p>
        {{PRIMARY_CTA}}
        <p>Save 40% time vs DocuSign + Stripe integration.</p>
        {{PRICING_CTA}}
      `;
      
      content = affiliates.injectPalmAffiliate(content);
      const compliant = await agent10.addCompliance({content}, geo);
      
      fs.mkdirSync(`public/${geo}`, { recursive: true });
      fs.writeFileSync(`public/${geo}/${pageType}-${i}.html`, 
        `<!DOCTYPE html><html><head><title>${title}</title></head><body>${compliant.content}</body></html>`);
      
      console.log(`✅ public/${geo}/${pageType}-${i}.html → ${PALM_LINK}`);  // FIXED
    }
  }
  console.log('🎉 150 unstoppable pages ready!');
}

generateElitePages();
