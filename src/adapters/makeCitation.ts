import { ICitation } from '../interfaces'

function sanitizeHtml(html = '') {
  const allowed = /^(i|em|b|strong|sub|sup|br|p|span)$/i

  return html.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, (tag, name) => {
    if (!allowed.test(name)) return ''
    return tag.startsWith('</') ? `</${name}>` : `<${name}>`
  })
}

function sanitizeAndLinkifyHtml(html: string = ''): string {
  const urlRegex = /\bhttps?:\/\/[^\s<>"']+[^\s<>"'.,;:!?)]/g
  const safe = sanitizeHtml(html)
  return safe.replace(urlRegex, (url) => {
    const href = url.replace(/&/g, '&amp;')
    return `<a href="${href}" target="_blank" rel="noopener noreferrer">${url}</a>`
  })
}

export const makeCitation = (data: any): ICitation => ({
  author: data?.cached_author_string,
  label: sanitizeAndLinkifyHtml(data?.cached),
  year: data?.year
})
