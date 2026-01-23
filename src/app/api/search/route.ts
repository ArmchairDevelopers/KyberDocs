import {createSearchAPI} from 'fumadocs-core/search/server';
import {docsSource, helpSource} from "@/lib/source";

export const revalidate = false;

const mappedHelpSource = helpSource.getPages().map((page) => ({
    title: page.data.title,
    description: page.data.description,
    url: page.url,
    id: page.url,
    structuredData: page.data.structuredData,
}))

const mappedDocsSource = docsSource.getPages().map((page) => ({
    title: page.data.title,
    description: page.data.description,
    url: page.url,
    id: page.url,
    structuredData: page.data.structuredData,
}))

export const {staticGET: GET} = createSearchAPI('advanced', {
    language: 'english',
    indexes: [...mappedDocsSource, ...mappedHelpSource],
});
