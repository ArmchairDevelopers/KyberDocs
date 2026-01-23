import {docs, help} from 'fumadocs-mdx:collections/server';
import {type InferPageType, loader, multiple} from 'fumadocs-core/source';
import {lucideIconsPlugin} from 'fumadocs-core/source/lucide-icons';

export const docsSource = loader({
    baseUrl: '/g',
    source: docs.toFumadocsSource(),
    plugins: [lucideIconsPlugin()],
});

export const helpSource = loader({
    baseUrl: '/w',
    source: help.toFumadocsSource(),
    plugins: [lucideIconsPlugin()],
});

export const combinedSource = loader({
    baseUrl: '/',
    source: multiple({
        docs: docs.toFumadocsSource(),
        help: help.toFumadocsSource(),
    }),
    plugins: [lucideIconsPlugin()],
});

export function getPageImage(page: InferPageType<typeof docsSource>) {
    const segments = [...page.slugs, 'image.png'];

    return {
        segments,
        url: `https://docs.kyber.gg/og/docs/${segments.join('/')}`,
    };
}

export async function getLLMText(page: InferPageType<typeof docsSource>) {
    const processed = await page.data.getText('processed');

    return `# ${page.data.title}

${processed}`;
}
