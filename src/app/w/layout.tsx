import { helpSource } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/w'>) {
  return (
    <DocsLayout
        tree={helpSource.pageTree}
        {...baseOptions()}
        sidebar={{
            tabs: [
                {
                    title: 'Documentation',
                    description: 'Docs and guides',
                    url: '/g',
                    unlisted: false,
                },
                {
                    title: 'Help Center',
                    description: 'FAQs and help articles',
                    url: '/w',
                    unlisted: false,
                },
            ],
        }}
    >
      {children}
    </DocsLayout>
  );
}
