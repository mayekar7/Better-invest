// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Function to handle animation
function handleAnimation() {
  // Trigger the animation
  gsap.to('#small', { duration: 1, morphSVG: '#large', ease: 'power4.out' });
  // Remove the scroll trigger to stop observing
  scrollTrigger.kill();
}

// Create a scroll trigger
const scrollTrigger = ScrollTrigger.create({
  trigger: '#small', // Element to trigger the animation
  start: 'top center', // Animation starts when the top of the trigger element reaches the center of the viewport
  onEnter: handleAnimation, // Function to call when the animation is triggered
  once: true, // Animation only plays once
});
