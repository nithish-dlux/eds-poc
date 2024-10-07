import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * Loads and decorates the cartology button block
 * @param {Element} block The cartologybutton block element
 */
export default function decorate(block) {
    // Clear existing content in the block
    block.textContent = '';
  
    // Set the inner HTML for the button
    block.innerHTML = `
      <div class="theme--grey-dark">
        <button class="cta cta--primary">
          <span class="cta__label"></span>
        </button>
      </div>
    `;
  }
