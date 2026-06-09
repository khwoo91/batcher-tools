import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('alert-modal')
export class AlertModal extends LitElement {
  @property({ type: String }) message = '';
  @property({ type: String }) type: 'info' | 'success' | 'error' = 'info';
  @property({ type: Boolean }) show = false;

  protected override createRenderRoot() {
    return this;
  }

  private handleClose() {
    this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
  }

  protected override render() {
    if (!this.show) return html``;

    return html`
      <div class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div class="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-150">
          <div class="p-6">
            <div class="flex items-center gap-4 mb-4">
              <div class="p-3 rounded-xl flex-shrink-0 ${
                this.type === 'success' ? 'bg-emerald-500/10 text-emerald-400' :
                this.type === 'error' ? 'bg-rose-500/10 text-rose-400' :
                'bg-indigo-500/10 text-indigo-400'
              }">
                ${this.type === 'success' ? html`<i class="fa-solid fa-circle-check text-2xl"></i>` : ''}
                ${this.type === 'error' ? html`<i class="fa-solid fa-circle-exclamation text-2xl"></i>` : ''}
                ${this.type === 'info' ? html`<i class="fa-solid fa-circle-info text-2xl"></i>` : ''}
              </div>
              <h3 class="text-lg font-bold text-white">알림 메시지</h3>
            </div>
            <div class="text-sm text-slate-300 whitespace-pre-wrap leading-relaxed font-sans">
              ${this.message}
            </div>
          </div>
          <div class="bg-slate-950 px-6 py-4 flex justify-end">
            <button 
              @click="${this.handleClose}" 
              class="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold shadow-md active:scale-95 transition-all cursor-pointer font-sans"
            >
              확인
            </button>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'alert-modal': AlertModal;
  }
}
