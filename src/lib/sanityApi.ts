// sanity.js
import { client } from '~/sanity/config/sanity.client'
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'


// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getPages() {
  const page = await client.fetch('*[_type == "page"]')
  return page
}

// export async function createPost(post: Post) {
//   const result = client.create(post)
//   return result
// }

// export async function updateDocumentTitle(_id, title) {
//   const result = client.patch(_id).set({title})
//   return result
// }