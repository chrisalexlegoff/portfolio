import { Icon } from '@iconify/react';
import Link from 'next/link';

type Props = {
  src: string;
  name: string;
  officialLink: string;
};

const SkillIcon = ({ src, name, officialLink }: Props) => {
  return (
    <div className="text-2xl relative bg-bg-secondary shadow-md dark:shadow-xl rounded-full h-14 w-14 sm:h-16 sm:w-16 grid place-items-center group">
      <Link
        href={officialLink}
        target="_blank"
        className="hover:scale-110 hover:rotate-12"
      >
        <Icon icon={src} width="32" height="32" />
      </Link>
      <div className="opacity-0 invisible w-max group-hover:opacity-100 group-hover:visible absolute -top-8 rounded capitalize bg-slate-900/75 dark:bg-slate-700/90 text-white dark:text-slate-100 py-1 px-2 text-sm duration-200">
        {name}
        <svg
          className="absolute text-slate-900/75 dark:text-slate-700/90 h-2 w-full left-0 top-full"
          x="0px"
          y="0px"
          viewBox="0 0 255 255"
          xmlSpace="preserve"
        >
          <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
        </svg>
      </div>
    </div>
  );
};

export default SkillIcon;
