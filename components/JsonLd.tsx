/**
 * Renders a JSON-LD structured-data script. Render inside a Server Component.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here — the data is application-controlled.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
