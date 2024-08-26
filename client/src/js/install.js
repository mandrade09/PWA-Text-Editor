const butInstall = document.getElementById('buttonInstall');

// Variable to hold the deferred prompt event
let deferredPrompt;

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the mini-infobar from appearing on mobile
  event.preventDefault();
  // Stash the event so it can be triggered later
  deferredPrompt = event;
  // Update UI to notify the user they can add to home screen
  butInstall.classList.toggle('hidden', false);
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  // Hide the install button
  butInstall.classList.toggle('hidden', true);
  // Show the install prompt
  if (deferredPrompt) {
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      console.log('User accepted the A2HS prompt');
    } else {
      console.log('User dismissed the A2HS prompt');
    }
    // Clear the deferredPrompt variable, it can only be used once
    deferredPrompt = null;
  }
});

// Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  // Log install to analytics or perform other tasks
  console.log('App installed:', event);
});
