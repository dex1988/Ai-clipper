const { test } = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const ts = require('typescript')
const { runInSandbox } = require('./vm-sandbox.cjs')

function loadStatusHelper() {
  const file = path.join(__dirname, '../src/utils/projectStatus.ts')
  const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText
  const module = { exports: {} }
  runInSandbox(code, { module, exports: module.exports })
  return module.exports.matchesProjectStatus
}

test('project status filter treats failed and error as the same failure state', () => {
  const matches = loadStatusHelper()
  assert.equal(matches('failed', 'error'), true)
  assert.equal(matches('error', 'failed'), true)
  assert.equal(matches('error', 'error'), true)
  assert.equal(matches('processing', 'error'), false)
  assert.equal(matches('completed', null), true)
  assert.equal(matches('failed', 'all'), true)
})
