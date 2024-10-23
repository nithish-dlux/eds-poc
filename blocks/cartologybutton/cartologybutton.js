export default function decorate(block) {
  console.log(block); // Check if the block is correct
  
  block.textContent = '';  // Clear existing content

  const buttonContainer = document.createElement('div');
  buttonContainer.innerHTML = `
    <div class="theme--grey-dark">
      <button class="cta cta--primary">
        <span class="cta__label">Button</span>
      </button>
    </div>
  `;

  block.append(buttonContainer);
}
