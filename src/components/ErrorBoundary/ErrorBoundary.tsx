import { Component, ErrorInfo , ReactNode } from "react"

interface IEBProps {
  children?: ReactNode
}

interface IEBState {
  hasError: boolean
  error: Error | undefined
}

export class ErrorBoundary extends Component<IEBProps, IEBState> {
  constructor(props: IEBProps) {
    super(props)
    this.state = {
      hasError: false,
      error: undefined,
    }
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error,
    }
  }

  componentDidCatch(err: Error, errStack: ErrorInfo) {
    console.error(err)
    console.error(errStack)
  }

  render() {
    const { hasError, error } = this.state
    const { children } = this.props

    if (hasError || error) {
      return <h1>Opps, something went wrong!</h1>
    }
    return children
  }
}
