export async function load({ params }){
  const post = await import(`../${params.id}.md`)
  const { title, date } = post.metadata
  const content = post.default

  return {
    content,
    title,
    date,
  }
}
