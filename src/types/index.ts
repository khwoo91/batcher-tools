export interface SvgFile {
  name: string;
  file: File;
  relativePath: string;
  status: 'pending' | 'processing' | 'success' | 'error';
  errorMsg?: string;
}

export interface ScaleOption {
  scale: number;
  label: string;
  suffix: string;
}

export interface ConversionLog {
  timestamp: string;
  text: string;
  type: 'info' | 'success' | 'error' | 'warning';
}
