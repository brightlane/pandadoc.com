const PALM_LINK = 'https://pandadoc.partnerlinks.io/Palm';
module.exports = {
  injectPalmAffiliate(content) {
    return content
      .replace('{{PRIMARY_CTA}}', `<a href="${PALM_LINK}">🚀 Free PandaDoc Trial</a>`)
      .replace('{{PRICING_CTA}}', `<a href="${PALM_LINK}">Pricing (VAT incl)</a>`);
  }
};
