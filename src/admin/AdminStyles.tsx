export default function AdminStyles() {
  return <style>{`
    .admin-shell { min-height: 100vh; display: flex; background: #f7f4f1; color: #342538; font-family: 'DM Sans', system-ui, sans-serif; }
    .admin-sidebar { width: 250px; padding: 2rem 1.25rem; background: #342538; color: #fffaf7; display: flex; flex-direction: column; gap: 2.5rem; }
    .admin-sidebar h1 { font: 600 1.4rem 'Playfair Display', Georgia, serif; margin: .35rem 0 0; }
    .admin-eyebrow { margin: 0; color: #e8a4b0; text-transform: uppercase; letter-spacing: .12em; font-size: .65rem; font-weight: 700; }
    .admin-nav { display: grid; gap: .35rem; }
    .admin-nav a { color: #d8cbd7; text-decoration: none; padding: .75rem .8rem; border-radius: .65rem; font-size: .9rem; }
    .admin-nav a.active, .admin-nav a:hover { color: #342538; background: #fdf0f3; }
    .admin-user { margin-top: auto; display: grid; gap: .7rem; font-size: .75rem; color: #d8cbd7; word-break: break-word; }
    .admin-user button, .admin-button { border: 0; border-radius: .6rem; background: #c05c74; color: white; padding: .7rem 1rem; cursor: pointer; font-weight: 600; }
    .admin-main { flex: 1; padding: 3rem; max-width: 1280px; }
    .admin-page-header { display: flex; justify-content: space-between; align-items: center; gap: 1rem; margin-bottom: 2rem; }
    .admin-page-header h2 { margin: 0; font: 600 2rem 'Playfair Display', Georgia, serif; }
    .admin-muted { color: #806f82; }
    .admin-card { background: #fffdfa; border: 1px solid #eadfe7; border-radius: 1rem; padding: 1.25rem; box-shadow: 0 5px 20px rgba(52,37,56,.04); }
    .admin-grid { display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); }
    .admin-stat strong { display: block; font-size: 2rem; margin-top: .5rem; }
    .admin-table { width: 100%; border-collapse: collapse; }
    .admin-table th, .admin-table td { text-align: left; padding: .85rem .65rem; border-bottom: 1px solid #eee4eb; vertical-align: top; }
    .admin-table th { color: #806f82; font-size: .72rem; text-transform: uppercase; letter-spacing: .06em; }
    .admin-actions { display: flex; gap: .5rem; flex-wrap: wrap; }
    .admin-link-button { border: 0; background: transparent; color: #c05c74; cursor: pointer; padding: .35rem; font-weight: 600; }
    .admin-danger { color: #a33b52; }
    .admin-form { max-width: 780px; display: grid; gap: 1rem; }
    .admin-form label { display: grid; gap: .4rem; font-weight: 600; font-size: .85rem; }
    .admin-form input, .admin-form textarea, .admin-form select { border: 1px solid #ddcfdb; border-radius: .55rem; padding: .75rem; font: inherit; background: #fffdfa; }
    .admin-form textarea { min-height: 150px; resize: vertical; }
    .admin-error { color: #a33b52; font-size: .82rem; }
    .admin-login { min-height: 100vh; display: grid; place-items: center; background: linear-gradient(145deg, #fbf8f5, #fdf0f3); }
    .admin-login-card { width: min(420px, calc(100% - 2rem)); }
    .admin-loading { padding: 4rem; text-align: center; color: #806f82; }
    @media (max-width: 760px) { .admin-shell { display: block; } .admin-sidebar { width: auto; padding: 1.25rem; gap: 1.25rem; } .admin-nav { display: flex; overflow-x: auto; } .admin-main { padding: 1.25rem; } .admin-table { min-width: 680px; } .admin-card:has(.admin-table) { overflow-x: auto; } }
  `}</style>
}
