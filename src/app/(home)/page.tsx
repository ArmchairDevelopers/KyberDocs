import Link from 'next/link';
import {RedirectByHost} from "@/lib/redirect";

export default function HomePage() {
      return (
        <div className="flex flex-col justify-center text-center flex-1">
            <RedirectByHost />
          <p>
            You can open{' '}
            <Link href="/g" className="font-medium underline">
              /g
            </Link>{' '}
            and see the documentation.
          </p>
        </div>
      );
}
