import { autoRaw } from "./autoRaw.js";

/**
 * 11ty Bricks Plugin
 * 
 * A collection of helpful utilities and filters for Eleventy (11ty).
 * Can be used as a plugin or by importing individual helpers.
 * 
 * @param {Object} eleventyConfig - The Eleventy configuration object
 * @param {Object} options - Plugin options
 * @param {boolean} options.autoRaw - Enable autoRaw preprocessor (default: false)
 */
export default function eleventyBricksPlugin(eleventyConfig, options = {}) {
  const { autoRaw: enableAutoRaw = false } = options;

  // Register helpers based on options
  if (enableAutoRaw) {
    autoRaw(eleventyConfig);
  }
}

// Export individual helpers for granular usage
export { autoRaw };

