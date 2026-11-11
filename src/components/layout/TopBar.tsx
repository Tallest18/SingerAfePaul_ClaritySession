import { Mail, Phone } from 'lucide-react'
import { contact } from '../../data/site'
import { SocialIcons } from '../ui/SocialIcons'

export function TopBar() {
  return (
    <div className="hidden bg-navy-950 text-white/70 md:block">
      <div className="container-x flex h-10 items-center justify-between gap-6 text-[0.8rem]">
        <div className="flex items-center gap-6">
          <a href={contact.phoneHref} className="flex items-center gap-2 transition-colors hover:text-white">
            <Phone className="size-3.5 text-ember-400" />
            {contact.phoneDisplay}
          </a>
          <a href={`mailto:${contact.email}`} className="flex items-center gap-2 transition-colors hover:text-white">
            <Mail className="size-3.5 text-ember-400" />
            {contact.email}
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden lg:inline">
            <span className="text-ember-300">@{contact.handle}</span> on every social media
          </span>
          <SocialIcons
            size="sm"
            className="gap-1"
            itemClassName="size-7 border-transparent text-white/70 hover:text-white hover:bg-white/10"
          />
        </div>
      </div>
    </div>
  )
}
