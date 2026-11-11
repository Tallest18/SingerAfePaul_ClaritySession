import clsx, { type ClassValue } from 'clsx'
import { contact } from '../data/site'

export const cn = (...inputs: ClassValue[]) => clsx(inputs)

/** WhatsApp click-to-chat link with an optional pre-filled message. */
export const whatsappLink = (message?: string) =>
  `https://wa.me/${contact.whatsappNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`

/** mailto: link with an optional subject and body. */
export const mailtoLink = (subject?: string, body?: string) => {
  const params = new URLSearchParams()
  if (subject) params.set('subject', subject)
  if (body) params.set('body', body)
  const query = params.toString().replace(/\+/g, '%20')
  return `mailto:${contact.email}${query ? `?${query}` : ''}`
}
