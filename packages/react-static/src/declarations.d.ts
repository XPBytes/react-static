declare module 'react-error-overlay' {
  import React from 'react'

  interface ErrorLocation {
    fileName: string
    lineNumber?: number
    colNumber?: number
  }

  class ErrorOverlay extends React.Component {
    public static dismissBuildError(): void
    public static reportBuildError(error: string): void
    public static setEditorHandler(handler: (errorLocation: ErrorLocation) => void): void
    public static startReportingRuntimeErrors(params: { onError: Function, filename: string }): void
    public static stopReportingRuntimeErrors(): void
  }

  export default ErrorOverlay
}
