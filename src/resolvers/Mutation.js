function newSong(root, args, context, info) {
  const { title, description, url, composer, conductedBy } = args;
  return context.prisma.createSong({
    title,
    description,
    url,
    composer,
    conductedBy
  })
}

module.exports = {
  newSong
}