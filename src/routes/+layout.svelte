<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import '$lib/styles/style.css';

  let token = {"token": "6e484827d6d940bc9806ee8ffc5be0b9"}
</script>

<Navbar />

<main>
  <slot />
<!-- Cloudflare Web Analytics -->
  {@html '<script defer src=\'https://static.cloudflareinsights.com/beacon.min.js\' data-cf-beacon=\'{"token": "6e484827d6d940bc9806ee8ffc5be0b9"}\'></script>'}
<!-- End Cloudflare Web Analytics -->
</main>

