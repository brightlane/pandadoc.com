module.exports = {
  async addCompliance(article, geo) {
    const banners = {
      france: '<div class="gdpr">GDPR Compliant | Politique de confidentialité</div>',
      germany: '<div class="gdpd">DSGVO konform</div>',
      brazil: '<div class="lgpd">LGPD Compliant</div>'
    };
    article.content = (banners[geo] || '') + article.content;
    return article;
  }
};
