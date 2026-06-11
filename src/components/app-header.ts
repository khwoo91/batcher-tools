import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("app-header")
export class AppHeader extends LitElement {
  @property({ type: Boolean }) hasFiles = false;

  protected override createRenderRoot() {
    return this;
  }

  private handleReset() {
    this.dispatchEvent(
      new CustomEvent("reset-all", { bubbles: true, composed: true }),
    );
  }

  protected override render() {
    return html`
      <header
        class="flex flex-col md:flex-row items-center justify-between border-b border-slate-800 pb-6 mb-8 gap-4"
      >
        <div class="flex items-center gap-3">
          <div class="flex items-center justify-center w-14 h-14">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              class="w-full h-full"
            >
              <defs>
                <linearGradient
                  id="header-primary-grad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stop-color="#6366f1" />
                  <stop offset="100%" stop-color="#4f46e5" />
                </linearGradient>
                <linearGradient
                  id="header-accent-grad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stop-color="#a855f7" />
                  <stop offset="100%" stop-color="#6366f1" />
                </linearGradient>
                <linearGradient
                  id="header-emerald-grad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stop-color="#34d399" />
                  <stop offset="100%" stop-color="#059669" />
                </linearGradient>
                <filter
                  id="header-glow"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                >
                  <feGaussianBlur stdDeviation="1" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              <!-- Stack Layer 3 (Background) -->
              <rect
                x="10"
                y="4"
                width="16"
                height="16"
                rx="4"
                fill="#1e293b"
                stroke="#334155"
                stroke-width="1.2"
                opacity="0.4"
                transform="rotate(-6 18 12)"
              />

              <!-- Stack Layer 2 (Middle) -->
              <rect
                x="8"
                y="6"
                width="16"
                height="16"
                rx="4"
                fill="url(#header-accent-grad)"
                stroke="#ffffff"
                stroke-width="0.8"
                stroke-opacity="0.15"
                opacity="0.8"
                transform="rotate(3 16 14)"
              />

              <!-- Stack Layer 1 (Foreground/Main) -->
              <g transform="translate(4, 8)">
                <rect
                  x="0"
                  y="0"
                  width="18"
                  height="18"
                  rx="4.5"
                  fill="url(#header-primary-grad)"
                  stroke="#ffffff"
                  stroke-width="1"
                  stroke-opacity="0.25"
                  filter="url(#header-glow)"
                />
                <path
                  d="M3 14 L7.5 8.5 L11 12.5 L13 10 L15.5 14 Z"
                  fill="#ffffff"
                  fill-opacity="0.95"
                />
                <circle cx="12.5" cy="5.5" r="2" fill="#34d399" />
              </g>

              <!-- Export Dynamic Arrow -->
              <path
                d="M21 17 L27 17 L27 23 M27 17 L18 26"
                stroke="#34d399"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                filter="url(#header-glow)"
              />
            </svg>
          </div>
          <div>
            <h1
              class="text-2xl font-bold tracking-tight text-white flex items-center gap-2"
            >
              Batcher
            </h1>
            <p class="text-sm text-slate-400 font-medium">
              단일 배율 변환, 포맷 확장(JPG), 원본 정리 기능을 포함한 통합 배치
              변환기
            </p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          ${this.hasFiles
            ? html`
                <button
                  @click="${this.handleReset}"
                  class="px-4 py-2 border border-slate-800 hover:border-slate-700 bg-slate-900 text-slate-300 rounded-md text-sm transition-all flex items-center gap-2 font-sans cursor-pointer"
                >
                  <i class="fa-solid fa-rotate-left"></i> 초기화
                </button>
              `
            : ""}
        </div>
      </header>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "app-header": AppHeader;
  }
}
