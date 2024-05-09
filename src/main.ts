import './style.css'
import { setupDir, setupFile } from './file-system-api.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="card">
    <button id="confirm" type="button">确定</button>
    <button id="btn-dir" type="button">pick dir</button>
    <button id="btn-file" type="button">pick file</button>
    <textarea></textarea>
  </div>
`

setupDir(document.querySelector<HTMLButtonElement>('#btn-dir')!)
setupFile(document.querySelector<HTMLButtonElement>('#btn-file')!)
