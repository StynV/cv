import sanitizeHtml from 'sanitize-html'

const YGWYS = ({ html, className }: { html: string, className: string }) => (
    <div dangerouslySetInnerHTML={{__html: sanitizeHtml(html)}} className={className} />
)

export default YGWYS