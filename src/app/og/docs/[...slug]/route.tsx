import {combinedSource, docsSource, getPageImage, helpSource} from '@/lib/source';
import {notFound} from 'next/navigation';
import {ImageResponse} from 'next/og';
import {generate as DefaultImage} from 'fumadocs-ui/og';

export const revalidate = false;

export async function GET(
    _req: Request,
    {params}: RouteContext<'/og/docs/[...slug]'>,
) {
    const {slug} = await params;
    const page = combinedSource.getPage(slug.slice(0, -1));
    if (!page) notFound();

    return new ImageResponse(
        (
            <DefaultImage
                title={page.data.title}
                description={page.data.description}
                primaryColor="#000000"
                primaryTextColor="#ffffff"
                icon={(
                    <>
                        <img
                            alt="KYBER Docs"
                            src="https://docs.kyber.gg/logo.png"
                            width="50"
                            height="50"
                            aria-label="KYBER Logo"
                        />
                    </>
                )}
                site="KYBER Docs"
            />
        ),
        {
            width: 1200,
            height: 630,
        },
    );
}

export function generateStaticParams() {
    const mappedHelpSource = helpSource.getPages();
    const mappedDocsSource = docsSource.getPages();

    return [...mappedHelpSource, ...mappedDocsSource].map((page) => ({
        lang: page.locale,
        slug: getPageImage(page).segments,
    }));
}
