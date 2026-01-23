import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import {docsSource} from "@/lib/source";

export default function Layout({ children }: LayoutProps<'/g'>) {
  return (
      <DocsLayout
          tree={docsSource.pageTree}
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
