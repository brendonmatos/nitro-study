export default defineEventHandler(() => `<div>
  <h1>Home!</h1>
  <p>

    <a href="/brendon">brendon - static</a><br />
    <a href="/brendon5sec">brendon5sec - ssr with 5 sec cache age</a><br />
    <a href="/nitro">nitro - static with subpage</a>
  </p>
</div>`);
