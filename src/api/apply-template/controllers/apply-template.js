'use strict';

/**
 * A set of functions called "actions" for `apply-template`
 */

module.exports = {
  applyTemplate: async (ctx, next) => {
    try {
      const { template_documentId } = ctx.request.body;
      const result = await strapi.db.connection('templates')
        .where({ document_id: template_documentId })
        .increment('total_used', 1)

      if (result) {
        const updatedProduct = await strapi.documents('api::template.template').findOne({
          documentId: template_documentId
        });
      }
      ctx.body = 'success';
      ctx.status = 200;
    } catch (err) {
      ctx.body = {
        error: 'An error occurred while fetching the summary data',
        details: err instanceof Error ? err.message : 'Unknown error',
      };
      ctx.status = 500;
    }
  }
};
