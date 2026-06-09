import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { SvgFile } from '../types';

@customElement('file-queue')
export class FileQueue extends LitElement {
  @property({ type: Array }) svgFiles: SvgFile[] = [];

  protected override createRenderRoot() {
    return this;
  }

  protected override render() {
    return html`
      <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col h-[400px]">
        <div class="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-list-ul text-indigo-400"></i>
            <span class="text-md font-semibold text-white font-sans">파일 큐 대기열 (${this.svgFiles.length}개)</span>
          </div>
          <span class="text-xs text-slate-500">상태 모니터</span>
        </div>

        <div class="flex-1 overflow-y-auto space-y-2 pr-1">
          ${this.svgFiles.length === 0 ? html`
            <div class="h-full flex flex-col items-center justify-center text-slate-500 space-y-2 py-10">
              <i class="fa-solid fa-images text-4xl text-slate-700"></i>
              <p class="text-sm">대기열이 비어 있습니다. 대상 로컬 SVG 폴더를 연동해 주세요.</p>
            </div>
          ` : this.svgFiles.map(file => html`
            <div class="flex items-center justify-between p-3 bg-slate-950 rounded-xl border border-slate-800 hover:border-slate-700/60 transition-colors text-xs">
              <div class="flex items-center gap-3 min-w-0 font-sans">
                <i class="fa-regular fa-file-image text-indigo-400 text-lg flex-shrink-0"></i>
                <div class="min-w-0">
                  <p class="font-medium text-slate-200 truncate" title="${file.relativePath}">${file.name}</p>
                  <p class="text-[10px] text-slate-500 font-mono">${(file.file.size / 1024).toFixed(1)} KB</p>
                </div>
              </div>

              <div>
                ${file.status === 'pending' ? html`
                  <span class="px-2.5 py-1 bg-slate-900 text-slate-400 border border-slate-800 rounded-full text-[10px] font-semibold">대기 중</span>
                ` : ''}
                ${file.status === 'processing' ? html`
                  <span class="px-2.5 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full text-[10px] font-semibold animate-pulse">렌더링 중</span>
                ` : ''}
                ${file.status === 'success' ? html`
                  <span class="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-[10px] font-semibold flex items-center gap-1 font-sans">
                    <i class="fa-solid fa-check"></i> 완료됨
                  </span>
                ` : ''}
                ${file.status === 'error' ? html`
                  <span class="px-2.5 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 rounded-full text-[10px] font-semibold flex items-center gap-1" title="${file.errorMsg || ''}">
                    <i class="fa-solid fa-exclamation"></i> 에러
                  </span>
                ` : ''}
              </div>
            </div>
          `)}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'file-queue': FileQueue;
  }
}
