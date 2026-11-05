import { INCLUDED, PROCESS } from '@/lib/site-content'
import Lines from './Lines'

export default function Process() {
  return (
    <section className="zv-section" id="process" aria-labelledby="process-h">
      <div className="zv-wrap">
        <div className="zv-section-head">
          <div>
            <span className="zv-eyebrow">{PROCESS.eyebrow}</span>
            <Lines id="process-h" className="zv-h2" lines={['Four courses.', <em key="e">No homework.</em>]} />
          </div>
          <p className="zv-lede" data-rv="">You run a business. We run the project, from first coffee to launch, with one person you can always reach.</p>
        </div>
        <ol className="zv-courses" style={{ listStyle: 'none' }}>
          {PROCESS.steps.map((s, i) => (
            <li key={s.course} className="zv-course" data-rv="" style={{ ['--d' as string]: i * 120 }}>
              <span className="zv-course-n">0{i + 1} / 04</span>
              <span className="zv-course-name">{s.course}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
        <div className="zv-included">
          {INCLUDED.map((x, i) => (
            <div key={x.k} data-rv="" style={{ ['--d' as string]: i * 90 }}>
              <b>{x.k}</b>
              <p>{x.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
