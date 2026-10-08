import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from 'fumadocs-mdx/config';
import {rehypeCodeDefaultOptions} from "fumadocs-core/mdx-plugins";
import {transformerTypeLinks} from "@/lib/type-links-helper";

export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: frontmatterSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

export const help = defineDocs({
    dir: 'content/help',
    docs: {
        schema: frontmatterSchema,
        postprocess: {
            includeProcessedMarkdown: true,
        },
    },
    meta: {
        schema: metaSchema,
    },
});

export default defineConfig({
    mdxOptions: {
        rehypeCodeOptions: {
            themes: {
                dark: 'github-dark',
            },
            langs: ['lua'],
            transformers: [
                ...(rehypeCodeDefaultOptions.transformers ?? []),
                transformerTypeLinks(),
            ],
        },
    },
});
