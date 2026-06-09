import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('app-header')
export class AppHeader extends LitElement {
  @property({ type: Boolean }) hasFiles = false;

  protected override createRenderRoot() {
    return this;
  }

  private handleReset() {
    this.dispatchEvent(new CustomEvent('reset-all', { bubbles: true, composed: true }));
  }

  protected override render() {
    return html`
      <header class="flex flex-col md:flex-row items-center justify-between border-b border-slate-800 pb-6 mb-8 gap-4">
        <div class="flex items-center gap-4">
          <div class="bg-indigo-600 text-white p-3 rounded-2xl shadow-lg shadow-indigo-500/20">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          </div>
          <div>
            <h1 class="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              SVG to PNG/JPG Batch Exporter
              <span class="text-xs px-2 py-0.5 bg-slate-800 text-indigo-400 rounded-full border border-slate-700">v1.2</span>
            </h1>
            <p class="text-sm text-slate-400 font-medium">단일 배율 변환, 포맷 확장(JPG), 원본 정리 기능을 포함한 통합 배치 변환기</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          ${this.hasFiles ? html`
            <button @click="${this.handleReset}" class="px-4 py-2 border border-slate-800 hover:border-slate-700 bg-slate-900 text-slate-300 rounded-xl text-sm transition-all flex items-center gap-2 font-sans">
              <i class="fa-solid fa-rotate-left"></i> 초기화
            </button>
          ` : ''}
        </div>
      </header>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-header': AppHeader;
  }
}
