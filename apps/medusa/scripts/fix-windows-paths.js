import fs from 'fs'

const path = './.medusa/client/entry.jsx'

let content = fs.readFileSync(path, 'utf8')

// Reemplazar todos los backslashes por slashes
content = content.replace(/\\/g, '/')

fs.writeFileSync(path, content, 'utf8')

console.log('✅ Arreglado el path en .medusa/client/entry.jsx')
