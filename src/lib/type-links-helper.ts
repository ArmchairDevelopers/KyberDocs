import type { ShikiTransformer } from 'shiki';
import type { Element, Text } from 'hast';
import {TYPE_LINKS} from './type-links';

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export function transformerTypeLinks(): ShikiTransformer {
    const names = Object.keys(TYPE_LINKS);
    const re = new RegExp(`\\b(${names.map(escape).join('|')})\\b`, 'g');

    return {
        name: 'transformer:type-links',
        span(node) {
            if (this.options.lang !== 'lua') {
                return;
            }

            const meta = this.options.meta?.__raw ?? '';
            if (!meta.split(/\s+/).includes('linkTypes')) {
                return;
            }

            const child = node.children[0];
            if (child?.type !== 'text') {
                return;
            }

            const text = child.value;
            if (!re.test(text)) {
                return;
            }

            re.lastIndex = 0;

            const parts: (Text | Element)[] = [];
            let last = 0;
            for (const m of text.matchAll(re)) {
                const start = m.index!;
                if (start > last) {
                    parts.push({type: 'text', value: text.slice(last, start)});
                }

                parts.push({
                    type: 'element',
                    tagName: 'a',
                    properties: {
                        href: TYPE_LINKS[m[1]],
                        className: ['underline', 'underline-offset-2', 'decoration-1', 'hover:decoration-2'],
                    },
                    children: [{ type: 'text', value: m[1] }],
                });

                last = start + m[1].length;
            }

            if (last < text.length) {
                parts.push({type: 'text', value: text.slice(last)});
            }

            node.children = parts;
        },
    };
}