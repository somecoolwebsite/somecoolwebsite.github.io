<script>
  export let data;
</script>

<article>
  <h1>{ data.title }</h1>
  <p>Published: {data.date}</p>
  <hr />
  <div class="main-post">
    <svelte:component this={data.content} />
  </div>
</article>

<style>
  h1 {
    font-size: 30px;
  }
</style>
