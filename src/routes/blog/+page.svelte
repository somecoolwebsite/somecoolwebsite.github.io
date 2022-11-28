<script>
  export let data;
</script>

<h1>Blog</h1>

<p>Here are some cool things I guess</p>

{#each data.posts as post}
  <div>
    <h2>
      <a href={post.path}>
        {post.meta.title}
      </a>
    </h2>
    Published: {post.meta.date}
  </div>
{/each}
