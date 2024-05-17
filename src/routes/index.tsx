import {  component$, useTask$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { getPages } from "~/lib/sanityApi";


export const usePageLoader = routeLoader$(async () => {
  return await getPages();
});

export default component$(() => {

  const t = usePageLoader()

  useTask$(async ({ track }) => {
		track(() => console.log('BLA BBLA BLA', JSON.stringify(t.value)));
    
  })
  
  return (
    <>
       <h1 class="text-3xl font-bold underline">
      Hello World!
    </h1>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik - Sanity",
  meta: [
    {
      name: "description",
      content: "Qwik Sanity template",
    },
  ],
};
