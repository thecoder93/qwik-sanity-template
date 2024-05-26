import { component$ } from '@builder.io/qwik';
import { routeLoader$, type DocumentHead } from '@builder.io/qwik-city';
import { getHeroBlock } from '~/lib/sanityApi';
import imageUrlFor from '~/utils/imageUrlFor';

export const usePageLoader = routeLoader$(async () => {
	return await getHeroBlock();
});

export default component$(() => {
	const t = usePageLoader();

	// useTask$(async ({ track }) => {
	// 	const heroBlock = t.value;

	// 	track(() =>
	// 		console.log(
	// 			'heroBlock => ',
	// 			heroBlock.at(0).sections.at(0).image.asset._ref
	// 		)
	// 	);
	// });
	const heroBlock = t.value;

	// const destructuringHeroBlock = () => {
	// 	console.log(heroBlock.at(0))
	// }
	return (
		<div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
			<div class="absolute inset-0">
				<img
					src={imageUrlFor(
						heroBlock.at(0).sections.at(0).image.asset._ref
					)
						.ignoreImageParams()
						.url()}
					alt="Background Image"
					class="object-cover object-center w-full h-full"
					width={100}
					height={100}
				/>
				<div class="absolute inset-0 bg-black opacity-50"></div>
			</div>

			<div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
				<h1 class="text-5xl font-bold leading-tight mb-4">
					Welcome to Our Awesome Website
				</h1>
				<p class="text-lg text-gray-300 mb-8">
					Discover amazing features and services that await you.
				</p>
				<a
					href="#"
					class="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
				>
					Get Started
				</a>
			</div>
		</div>
	);
});

export const head: DocumentHead = {
	title: 'Welcome to Qwik - Sanity',
	meta: [
		{
			name: 'description',
			content: 'Qwik Sanity sample'
		}
	]
};
