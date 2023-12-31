import { Icon } from '@iconify/react';
import Div from '../Div';
import Link from 'next/link';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <Link href="https://www.linkedin.com/company/semantix-labs/" className="cs-center">
        <Icon icon="fa6-brands:linkedin-in" />
      </Link>
      <Link href="https://www.instagram.com/semantixlabs/" className="cs-center">
        <Icon icon="fa6-brands:instagram" />
      </Link>
      <Link href="https://www.facebook.com/people/Semantix-labs/61552217791739/" className="cs-center">
        <Icon icon="fa6-brands:facebook" />
      </Link>
      <Link href="/" className="cs-center">
        <Icon icon="fa6-brands:slack" />
      </Link>
    </Div>
  );
}
