import type { IconType } from 'react-icons'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube } from 'react-icons/fa6'
import { socials, type SocialKey } from '../../data/site'
import { cn, whatsappLink } from '../../lib/utils'

const socialIcon: Record<SocialKey | 'whatsapp', IconType> = {
  instagram: FaInstagram,
  facebook: FaFacebookF,
  youtube: FaYoutube,
  linkedin: FaLinkedinIn,
  whatsapp: FaWhatsapp,
}

type Props = {
  className?: string
  itemClassName?: string
  withWhatsapp?: boolean
  size?: 'sm' | 'md'
}

export function SocialIcons({ className, itemClassName, withWhatsapp = false, size = 'md' }: Props) {
  const items = [
    ...socials,
    ...(withWhatsapp ? [{ key: 'whatsapp' as const, label: 'WhatsApp', href: whatsappLink() }] : []),
  ]
  return (
    <ul className={cn('flex flex-wrap items-center gap-2.5', className)}>
      {items.map(({ key, label, href }) => {
        const Icon = socialIcon[key]
        return (
          <li key={key}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Singer Afe Paul on ${label}`}
              title={label}
              className={cn(
                'flex items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-0.5',
                size === 'sm' ? 'size-8 text-[0.8rem]' : 'size-11 text-base',
                itemClassName,
              )}
            >
              <Icon />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
