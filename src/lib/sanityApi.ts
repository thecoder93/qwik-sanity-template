// sanity.js
import { client } from '~/sanity/config/sanity.client'
import { GET_HEROBLOCK, GET_PAGE } from './GROQ/sanityQuery'
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getPages() {
  const page = await client.fetch(GET_PAGE)
  return page
}

export async function getHeroBlock() {
  const page = await client.fetch(GET_HEROBLOCK)
  return page
}