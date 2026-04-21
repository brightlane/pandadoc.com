module.exports = {
  async generatePredictiveKeywords(geo) {
    const keywords = {
      france: ['PandaDoc France 2026', 'signature PandaDoc prix'],
      germany: ['PandaDoc Deutschland', 'Vertrag PandaDoc VAT'],
      brazil: ['PandaDoc Brasil', 'assinatura eletrônica']
    }[geo] || ['PandaDoc global'];
    return keywords;
  }
};
