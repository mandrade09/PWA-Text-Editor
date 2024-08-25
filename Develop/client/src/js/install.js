const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

// TODO: Add an event handler to the `beforeinstallprompt` event

// Handle the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    window.deferredPrompt = event;
    butInstall.style.display = 'block'; // Show the install button
  });

// TODO: Implement a click event handler on the `butInstall` element

// Implement click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) return;
  
    promptEvent.prompt();
    window.deferredPrompt = null;
    butInstall.style.display = 'none'; // Hide the install button
  });


// TODO: Add an handler for the `appinstalled` event

// Handle the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('PWA was installed', event);
    window.deferredPrompt = null;
  });

  