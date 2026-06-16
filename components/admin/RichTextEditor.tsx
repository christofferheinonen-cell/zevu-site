'use client'
import { useEditor, EditorContent, type Editor } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'
import { Underline } from '@tiptap/extension-underline'
import { Link } from '@tiptap/extension-link'
import { Image } from '@tiptap/extension-image'
import { TextStyle } from '@tiptap/extension-text-style'
import { Extension } from '@tiptap/core'
import { useEffect } from 'react'

// TipTap ships no built-in font-size control; this adds a `fontSize` mark
// attribute (rendered as inline style) on top of the existing TextStyle mark.
const FontSize = Extension.create({
  name: 'fontSize',
  addOptions() {
    return { types: ['textStyle'] }
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize: {
            default: null,
            parseHTML: el => el.style.fontSize || null,
            renderHTML: attrs => (attrs.fontSize ? { style: `font-size: ${attrs.fontSize}` } : {}),
          },
        },
      },
    ]
  },
  addCommands() {
    return {
      setFontSize: (size: string) => ({ chain }: { chain: () => any }) =>
        chain().setMark('textStyle', { fontSize: size }).run(),
      unsetFontSize: () => ({ chain }: { chain: () => any }) =>
        chain().setMark('textStyle', { fontSize: null }).run(),
    } as any
  },
})

const FONT_SIZES = [
  { label: 'Pieni', value: '0.875rem' },
  { label: 'Normaali', value: '' },
  { label: 'Suuri', value: '1.25rem' },
  { label: 'Erittäin suuri', value: '1.5rem' },
]

function Toolbar({ editor }: { editor: Editor }) {
  function addLink() {
    const prev = editor.getAttributes('link').href as string | undefined
    const url = window.prompt('Linkin osoite (URL):', prev ?? 'https://')
    if (url === null) return
    if (!url.trim()) {
      editor.chain().focus().extendMarkRange('link').unsetLink().run()
      return
    }
    editor.chain().focus().extendMarkRange('link').setLink({ href: url.trim() }).run()
  }

  function addImage() {
    const url = window.prompt('Kuvan osoite (esim. /blog/kuva.png tai https://...):')
    if (!url || !url.trim()) return
    editor.chain().focus().setImage({ src: url.trim() }).run()
  }

  const btn = (active: boolean) => `adm-rte-btn${active ? ' is-active' : ''}`

  return (
    <div className="adm-rte-toolbar">
      <button type="button" className={btn(editor.isActive('bold'))} title="Lihavoitu" onClick={() => editor.chain().focus().toggleBold().run()}><strong>B</strong></button>
      <button type="button" className={btn(editor.isActive('italic'))} title="Kursivoitu" onClick={() => editor.chain().focus().toggleItalic().run()}><em>I</em></button>
      <button type="button" className={btn(editor.isActive('underline'))} title="Alleviivattu" onClick={() => editor.chain().focus().toggleUnderline().run()}><u>U</u></button>
      <span className="adm-rte-sep" />
      <select
        className="adm-rte-select"
        title="Tekstin koko"
        value={(editor.getAttributes('textStyle').fontSize as string) ?? ''}
        onChange={e => {
          const v = e.target.value
          if (v) (editor.chain().focus() as any).setFontSize(v).run()
          else (editor.chain().focus() as any).unsetFontSize().run()
        }}
      >
        {FONT_SIZES.map(s => <option key={s.label} value={s.value}>{s.label}</option>)}
      </select>
      <span className="adm-rte-sep" />
      <button type="button" className={btn(editor.isActive('paragraph'))} title="Leipäteksti" onClick={() => editor.chain().focus().setParagraph().run()}>P</button>
      <button type="button" className={btn(editor.isActive('heading', { level: 2 }))} title="Väliotsikko (H2)" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>H2</button>
      <button type="button" className={btn(editor.isActive('heading', { level: 3 }))} title="Alaotsikko (H3)" onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>H3</button>
      <span className="adm-rte-sep" />
      <button type="button" className={btn(editor.isActive('bulletList'))} title="Luettelo" onClick={() => editor.chain().focus().toggleBulletList().run()}>• Lista</button>
      <button type="button" className={btn(editor.isActive('orderedList'))} title="Numeroitu luettelo" onClick={() => editor.chain().focus().toggleOrderedList().run()}>1. Lista</button>
      <button type="button" className={btn(editor.isActive('blockquote'))} title="Lainaus" onClick={() => editor.chain().focus().toggleBlockquote().run()}>” Lainaus</button>
      <span className="adm-rte-sep" />
      <button type="button" className={btn(editor.isActive('link'))} title="Linkki" onClick={addLink}>🔗 Linkki</button>
      <button type="button" className="adm-rte-btn" title="Lisää kuva" onClick={addImage}>🖼 Kuva</button>
      <span className="adm-rte-sep" />
      <button type="button" className="adm-rte-btn" title="Kumoa" onClick={() => editor.chain().focus().undo().run()}>↶</button>
      <button type="button" className="adm-rte-btn" title="Tee uudelleen" onClick={() => editor.chain().focus().redo().run()}>↷</button>
    </div>
  )
}

export default function RichTextEditor({ value, onChange }: { value: string; onChange: (html: string) => void }) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({ heading: { levels: [2, 3] } }),
      Underline,
      Link.configure({ openOnClick: false, autolink: false }),
      Image,
      TextStyle,
      FontSize,
    ],
    content: value,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
  })

  // Keep the editor in sync if the form is reset/reloaded from outside (e.g. after "Palauta alkuperäinen").
  useEffect(() => {
    if (editor && value !== editor.getHTML()) editor.commands.setContent(value)
  }, [value, editor])

  if (!editor) return null

  return (
    <div className="adm-rte">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} className="adm-rte-content single-content" />
    </div>
  )
}
