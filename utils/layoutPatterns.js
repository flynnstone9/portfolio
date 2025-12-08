/**
 * Layout patterns for bento-style image grids
 * Defines column spans for different image counts in a 12-column grid
 */

export const LAYOUT_PATTERNS = {
  1: [{ span: 12 }],
  2: [{ span: 6 }, { span: 6 }],
  3: [{ span: 8 }, { span: 4 }, { span: 12 }],
  4: [{ span: 6 }, { span: 6 }, { span: 4 }, { span: 4 }, { span: 4 }],
  5: [{ span: 12 }, { span: 6 }, { span: 6 }, { span: 6 }, { span: 6 }],
};

/**
 * Get layout configuration for a given number of images
 * @param {number} count - Number of images
 * @param {Array<{span: number}>} customLayout - Optional custom layout override
 * @returns {Array<{span: number}>} Array of layout configs with column spans
 */
export function getLayoutForImageCount(count, customLayout = null) {
  // If custom layout provided, use it
  if (customLayout && Array.isArray(customLayout)) {
    return customLayout;
  }

  // Otherwise use defaults
  if (count <= 5) {
    return LAYOUT_PATTERNS[count];
  }

  // For 6+ images: alternating rows of 2 (6+6) and 3 (4+4+4) images
  const layout = [];
  for (let i = 0; i < count; i++) {
    layout.push({ span: Math.floor(i / 2) % 2 === 0 ? 6 : 4 });
  }
  return layout;
}

/**
 * Generate optimized sizes attribute for Next.js Image based on grid span
 * @param {number} span - Column span (1-12)
 * @returns {string} Sizes attribute value
 */
export function getSizesForSpan(span) {
  const desktop = Math.round((span / 12) * 100);
  const tablet = Math.min(Math.round((span / 6) * 100), 100);
  return `(max-width: 768px) 100vw, (max-width: 1024px) ${tablet}vw, ${desktop}vw`;
}
