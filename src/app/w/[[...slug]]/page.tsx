import {getPageImage, helpSource} from '@/lib/source';
import {DocsBody, DocsDescription, DocsPage, DocsTitle,} from 'fumadocs-ui/page';
import {notFound} from 'next/navigation';
import {getMDXComponents} from '@/mdx-components';
import type {Metadata} from 'next';
import {createRelativeLink} from 'fumadocs-ui/mdx';

const disabledTocPages = [
    '/w/faq',
    '/w/issues',
];

export default async function Page(props: PageProps<'/w/[[...slug]]'>) {
    const params = await props.params;
    const page = helpSource.getPage(params.slug);
    if (!page) notFound();

    const MDX = page.data.body;
    const tocEnabled = !disabledTocPages.includes(page.url);

    return (
        <DocsPage
            tableOfContent={{enabled: tocEnabled}}
            tableOfContentPopover={{enabled: tocEnabled}}
            toc={page.data.toc}
            full={page.data.full}
        >
            <DocsTitle>{page.data.title}</DocsTitle>
            <DocsDescription>{page.data.description}</DocsDescription>
            <DocsBody>
                <MDX
                    components={getMDXComponents({
                        // this allows you to link to other pages with relative file paths
                        a: createRelativeLink(helpSource, page),
                    })}
                />
            </DocsBody>
        </DocsPage>
    );
}

export async function generateStaticParams() {
    return helpSource.generateParams();
}

export async function generateMetadata(
    props: PageProps<'/w/[[...slug]]'>,
): Promise<Metadata> {
    const params = await props.params;
    const page = helpSource.getPage(params.slug);
    if (!page) notFound();

    return {
        title: page.data.title,
        description: page.data.description,
        openGraph: {
            url: 'https://docs.kyber.gg',
            images: getPageImage(page).url,
        },
    };
}
