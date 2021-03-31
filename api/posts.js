import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
  url: 'https://blogedu.ghost.io',
  key: 'd2d616bf45f3d3e46b7618ee3b',
  version: "v2"

})

export async function getPosts() {
  return await api.posts
    .browse({
      limit: "all",
      include: "tags,authors"
    })
    .catch(err => {
      console.log(err)
    })
}
