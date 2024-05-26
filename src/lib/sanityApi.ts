// sanity.js
import { client } from '~/sanity/config/sanity.client'
import { GET_HEROBLOCK } from './GROQ/sanityQuery'
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getHeroBlock() {
  const heroBlock = await client.fetch(GET_HEROBLOCK)
  return heroBlock
}